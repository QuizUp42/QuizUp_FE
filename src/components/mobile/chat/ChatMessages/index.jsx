import MessageImage from "../message/Image";
import MessageStudentText from "../message/StudentText";
import MessageTeacherText from "../message/TeacherText";
import MessageSystem from "../message/System";

const ChatMessages = ({ messages }) => {
  return (
    <div className="flex-1 px-4 py-2 space-y-2 overflow-y-auto">
      {messages.map((msg) => {
        if (msg.role === "student") {
          return (
            <MessageStudentText
              key={msg.id}
              name={msg.username}
              text={msg.message}
            />
          );
        }

        if (msg.role === "professor") {
          return <MessageTeacherText key={msg.id} text={msg.message} />;
        }

        // if (msg.type === "image") {
        //   return (
        //     <MessageImage
        //       key={msg.id}
        //       name={msg.name}
        //       image={msg.image}
        //       time={msg.time}
        //       sender={msg.sender}
        //     />
        //   );
        // }

        // if (msg.type === "system") {
        //   return <MessageSystem key={msg.id} text={msg.text} time={msg.time} />;
        // }

        return null;
      })}
    </div>
  );
};

export default ChatMessages;
