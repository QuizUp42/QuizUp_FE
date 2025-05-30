import { useState } from "react";
import ChatInput from "../../../components/mobile/chat/ChatInput";
import ChatMessages from "../../../components/mobile/chat/ChatMessages";

import { useSocket } from "../../../hooks/useSocket";

const MobileChat = () => {
  const [role] = useState("student");
  const [username] = useState("11"); // 추후 받아옴
  const [roomId] = useState("YTA96L"); // 추후 받아옴
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiMTEiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc0ODU4MzYyNCwiZXhwIjoxNzQ4NTg3MjI0fQ.MwKSdSs9W_67rFbarAK9ue-0DpMBsmk4jm7ir6l6z94";

  const { messages, sendMessage } = useSocket(role, roomId, username, token);

  return (
    <div className="flex flex-col flex-1">
      <ChatMessages messages={messages} />
      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default MobileChat;
