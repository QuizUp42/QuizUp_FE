import ChatInput from "../../../components/mobile/chat/ChatInput";
import ChatMessages from "../../../components/mobile/chat/ChatMessages";

import { useSocket } from "../../../hooks/useSocket";
import { useParams } from "react-router-dom";

const MobileChat = () => {
  const { roomId: paramRoomId } = useParams();
  const roomId = paramRoomId;

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  console.log(roomId, token, role);
  const { messages, sendMessage, sendCheck, toggleCheck } = useSocket(
    role,
    roomId,
    token
  );

  return (
    <div className="flex flex-col flex-1">
      <ChatMessages messages={messages} toggleCheck={toggleCheck} />
      <ChatInput role={role} onSend={sendMessage} onCheck={sendCheck} />
    </div>
  );
};

export default MobileChat;
