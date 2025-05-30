import MessageImage from "../message/Image";
import MessageStudentText from "../message/StudentText";
import MessageTeacherText from "../message/TeacherText";
import MessageSystem from "../message/System";

const mockMessages = [
  {
    id: 1,
    message: "하이",
    role: "student",
    timestamp: "2025-05-29T20:40:45.774Z",
    username: "11",
  },
  {
    id: 2,
    message: "안녕",
    role: "teacher",
    timestamp: "2025-05-29T20:41:38.159Z",
    username: "11",
  },
];

const ChatMessages = ({ messages }) => {
  console.log(messages);
  return (
    <div className="flex-1 px-4 py-2 space-y-2 overflow-y-auto">
      {mockMessages.map((msg) => {
        if (msg.role === "student") {
          return (
            <MessageStudentText
              key={msg.id}
              name={msg.username}
              text={msg.message}
            />
          );
        }

        if (msg.role === "teacher") {
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
