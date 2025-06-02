import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { EVENTS } from "../libs/constants/socketEvents";

export const useSocket = (role, roomId, username, token) => {
  const socketRef = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const baseUrl = "https://a936-112-166-124-97.ngrok-free.app";
    const namespace = role === "teacher" ? "teachers" : "students";
    console.log("주소", namespace);
    const socket = io(`${baseUrl}/${namespace}`, {
      transports: ["websocket"],
      auth: { token },
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("✅ 연결됨:", socket.id);
      socket.emit(EVENTS.ROOM_JOIN, { room: roomId, username });
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
      setMessages((prev) => [...prev, msg]);
    });

    socket.on(EVENTS.CHECK_CREATED, (msg) => {
      console.log("✅ 새 체크 메세지", msg);
    });

    socket.onAny((event, ...args) => {
      console.log("[디버깅] 받은 이벤트:", event, args);
    });

    return () => {
      socket.disconnect();
    };
  }, [role, roomId, username, token]);

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

  return {
    messages,
    sendMessage,
    socketRef,
    sendCheck,
  };
};
