import { useState } from "react";
import ChatInput from "../../../components/mobile/chat/ChatInput";
import ChatMessages from "../../../components/mobile/chat/ChatMessages";

import { useSocket } from "../../../hooks/useSocket";

const MobileChat = () => {
  const [role] = useState("teacher");
  const [username] = useState("22"); // 추후 받아옴
  const [roomId] = useState("GJ2T5U"); // 추후 받아옴
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiMjIiLCJyb2xlIjoicHJvZmVzc29yIiwiaWF0IjoxNzQ4NTg2NjgzLCJleHAiOjE3NDg1OTAyODN9.BRYu4uQcF_Q3EQ2TQssLO9FOWpN7Ppv28VmBf-rnPYY";

  const { messages, sendMessage, sendCheck } = useSocket(
    role,
    roomId,
    username,
    token
  );

  return (
    <div className="flex flex-col flex-1">
      <ChatMessages messages={messages} />
      <ChatInput role={role} onSend={sendMessage} onCheck={sendCheck} />
    </div>
  );
};

export default MobileChat;
