import { useState } from "react";
import ChatInput from "../../../components/mobile/chat/ChatInput";
import ChatMessages from "../../../components/mobile/chat/ChatMessages";

import { useSocket } from "../../../hooks/useSocket";

const MobileChat = () => {
  const role = useState("teachers");
  const [username] = useState("슬픈 고양이"); // 추후 받아옴
  const [roomId] = useState("0BLHYG"); // 추후 받아옴
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiMjIiLCJyb2xlIjoicHJvZmVzc29yIiwiaWF0IjoxNzQ4MjQwNjU0LCJleHAiOjE3NDgyNDQyNTR9.4Buu6FSpZH-1xCA3tF-OUhuSbJE1u5l2mFBcGlqzwP4";

  const { messages, sendMessage } = useSocket(role, roomId, username, token);

  return (
    <div className="flex flex-col flex-1">
      <ChatMessages messages={messages} />
      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default MobileChat;
