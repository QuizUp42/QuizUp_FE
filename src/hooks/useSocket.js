import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { EVENTS } from "../libs/constants/socketEvents";

export const useSocket = (role, roomId, token) => {
  const socketRef = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_SOCKET_URL;
    const namespace = role === "professor" ? "teachers" : "students";
    console.log("주소", namespace);
    const socket = io(`${baseUrl}/${namespace}`, {
      transports: ["websocket"],
      auth: { token },
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("✅ 연결됨:", socket.id);
      socket.emit(EVENTS.ROOM_JOIN, { room: roomId });
    });

    socket.on(EVENTS.ROOM_JOINED, (room) => {
      console.log("🎉 방 입장:", room);
    });

    socket.on(EVENTS.MESSAGES, (msgs) => {
      console.log("📜 전체 채팅 내역", msgs);
      setMessages(msgs);
    });

    socket.on(EVENTS.CHAT_MESSAGE, (msg) => {
      console.log("💬 새 메시지", msg);
      setMessages((prev) => [...prev, { ...msg, type: "chat" }]);
    });

    socket.on(EVENTS.CHECK_CREATED, (msg) => {
      console.log("✅ 새 체크 메세지", msg);
      setMessages((prev) => [...prev, { ...msg, type: "check" }]);
    });

    socket.on(EVENTS.CHECK_TOGGLED, (msg) => {
      console.log("✅ 토글 메세지 업데이트", msg);
      const { id, checkCount, isChecked } = msg;

      setMessages((prevMessages) =>
        prevMessages.map((m) => {
          if (m.type === "check" && m.id === id) {
            return { ...m, checkCount, isChecked };
          }
          return m;
        })
      );
    });

    socket.on(EVENTS.OXQUIZ_CREATED, (msg) => {
      console.log("✅ 새 O/X 메세지", msg);
      setMessages((prev) => [...prev, { ...msg, type: "oxquiz" }]);
    });

    socket.on(EVENTS.OXQUIZ_ANSWERED, (msg) => {
      console.log("✅ o/x 메세지 업데이트", msg);
      const { id, xCount, oCount } = msg;

      setMessages((prevMessages) =>
        prevMessages.map((m) => {
          if (m.type === "oxquiz" && m.id === id) {
            return { ...m, xCount, oCount };
          }
          return m;
        })
      );
    });

    socket.onAny((event, ...args) => {
      console.log("[디버깅] 받은 이벤트:", event, args);
    });

    return () => {
      socket.disconnect();
    };
  }, [role, roomId, token]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    socketRef.current?.emit(EVENTS.CHAT_SEND, {
      room: roomId,
      text,
    });
  };

  const sendCheck = () => {
    socketRef.current?.emit(EVENTS.CHECK_CREATE, {
      room: roomId,
    });
  };

  const toggleCheck = (id, isChecked) => {
    socketRef.current?.emit(EVENTS.CHECK_TOGGLE, {
      room: roomId,
      checkId: id,
      isChecked: isChecked,
    });
  };

  const sendOXQuiz = () => {
    socketRef.current?.emit(EVENTS.OXQUIZ_CREATE, {
      room: roomId,
    });
  };

  const toggleOXQuiz = (id, isChecked) => {
    socketRef.current?.emit(EVENTS.OXQUIZ_ANSWER, {
      room: roomId,
      quizId: id,
      answer: isChecked,
    });
  };

  return {
    messages,
    sendMessage,
    socketRef,
    sendCheck,
    toggleCheck,
    sendOXQuiz,
    toggleOXQuiz,
  };
};
