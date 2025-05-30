import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { EVENTS } from "@/libs/constants/socketEvents";

/**
 * WebSocket 커스텀 훅
 * @param {'teacher' | 'student'} role 로그인한 사용자 역할
 * @param {string} roomId 방 ID
 * @param {string} username 사용자 이름
 * @returns { messages, sendMessage, socketRef }
 */

export const useSocket = (role, roomId, username, token) => {
  const socketRef = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const baseUrl = "https://6432-112-166-124-75.ngrok-free.app";
    const namespace = role === "teacher" ? "teachers" : "students";
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

    socket.onAny((event, ...args) => {
      console.log("[디버깅] 받은 이벤트:", event, args);
    });

    return () => {
      socket.disconnect();
    };
  }, [role, roomId, username, token]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    socketRef.current?.emit(EVENTS.CHAT_MESSAGE, {
      room: roomId,
      text,
    });
  };

  return {
    messages,
    sendMessage,
    socketRef,
  };
};
