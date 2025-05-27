import MessageImage from "../message/Image";
import MessageStudentText from "../message/StudentText";
import MessageTeacherText from "../message/TeacherText";
import MessageSystem from "../message/System";

const ChatMessages = ({ messages }) => {
  return (
    <div className="flex-1 p-2 space-y-2 overflow-y-auto">
      {messages.map((msg, index) => {
        if (msg.type === "text" && msg.sender === "student") {
          return (
            <MessageStudentText
              key={index}
              name={msg.name}
              text={msg.text}
              time={msg.time}
            />
          );
        }

        if (msg.type === "text" && msg.sender === "teacher") {
          return (
            <MessageTeacherText
              key={index}
              name={msg.name}
              text={msg.text}
              time={msg.time}
            />
          );
        }

        if (msg.type === "image") {
          return (
            <MessageImage
              key={index}
              name={msg.name}
              image={msg.image}
              time={msg.time}
              sender={msg.sender}
            />
          );
        }

        if (msg.type === "system") {
          return <MessageSystem key={index} text={msg.text} time={msg.time} />;
        }

        return null;
      })}
    </div>
  );
};

export default ChatMessages;
