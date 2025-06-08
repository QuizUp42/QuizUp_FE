import { useEffect, useState } from "react";
import ChatInput from "../../../components/mobile/chat/ChatInput";
import ChatMessages from "../../../components/mobile/chat/ChatMessages";

import { useSocket } from "../../../hooks/useSocket";
import { useParams } from "react-router-dom";

const MobileChat = () => {
  const { roomId: paramRoomId } = useParams();
  const [roomId, setRoomId] = useState();
  const [token, setToken] = useState();
  const [role, setRole] = useState();

  useEffect(() => {
    setRoomId(paramRoomId);
    setToken(localStorage.getItem("token"));
    setRole(localStorage.getItem("role"));
    console.log(roomId, token, role);
  }, [paramRoomId, token, role, roomId]);

  console.log(roomId, token, role);
  const {
    messages,
    sendMessage,
    sendCheck,
    toggleCheck,
    sendOXQuiz,
    toggleOXQuiz,
    sendDraw,
    sendQuiz,
  } = useSocket(role, roomId, token);

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <ChatMessages
        messages={messages}
        toggleCheck={toggleCheck}
        toggleOXQuiz={toggleOXQuiz}
      />
      <ChatInput
        role={role}
        onSend={sendMessage}
        onCheck={sendCheck}
        onOXQuiz={sendOXQuiz}
        onDraw={sendDraw}
        onQuiz={sendQuiz}
      />
    </div>
  );
};

export default MobileChat;
