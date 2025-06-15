import ChatInput from "../../../components/mobile/chat/ChatInput";
import ChatMessages from "../../../components/mobile/chat/ChatMessages";

import { useSocket } from "../../../hooks/useSocket";
import { useRoomStore } from "../../../stores/useRoomStore";
import { useAuthStore } from "../../../stores/useAuthStore";

const MobileChat = () => {
  const { accessToken, role } = useAuthStore();
  const { roomCode } = useRoomStore();

  console.log(roomCode, accessToken, role);

  const {
    messages,
    sendMessage,
    sendCheck,
    toggleCheck,
    sendOXQuiz,
    toggleOXQuiz,
    sendDraw,
    sendQuiz,
  } = useSocket(role, roomCode, accessToken);

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
