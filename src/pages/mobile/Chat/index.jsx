import { useEffect, useRef, useState } from "react";
import ChatInput from "../../../components/mobile/chat/ChatInput";
import ChatMessages from "../../../components/mobile/chat/ChatMessages";
import { io } from "socket.io-client";

const MobileChat = () => {
  const socketRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [username] = useState("슬픈 고양이"); // 추후 받아옴
  const [roomId] = useState("0BLHYG"); // 추후 받아옴
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiMjIiLCJyb2xlIjoicHJvZmVzc29yIiwiaWF0IjoxNzQ4MjQwNjU0LCJleHAiOjE3NDgyNDQyNTR9.4Buu6FSpZH-1xCA3tF-OUhuSbJE1u5l2mFBcGlqzwP4";

  useEffect(() => {
    const socket = io("https://6432-112-166-124-75.ngrok-free.app/teachers", {
      transports: ["websocket"],
      auth: { token: token },
    });
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("✅ 연결됨:", socket.id);
      socket.emit("joinRoom", { room: roomId, username });
    });

    socket.on("joinedRoom", (room) => {
      console.log("🎉 방 입장:", room);
    });

    socket.onAny((event, ...args) => {
      console.log("[디버깅] 받은 이벤트:", event, args);
    });

    socket.on("messages", (msgs) => {
      console.log("전체내역", msgs);
      setMessages(msgs);
    });

    socket.on("chatMessage", (msg) => {
      io.emit("chat message", msg);
      console.log(msg);
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [roomId, username]);

  const sendMessage = (message) => {
    if (!message.trim()) return;
    socketRef.current?.emit("chatMessage", {
      room: roomId,
      text: message,
    });
    console.log(message);
  };

  return (
    <div className="flex flex-col flex-1">
      <ChatMessages messages={messages} />
      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default MobileChat;
