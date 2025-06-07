import MessageImage from "../message/Image";
import MessageStudentText from "../message/StudentText";
import MessageTeacherText from "../message/TeacherText";
import MessageSystem from "../message/System";
import MessageCheck from "../message/Check";
import MessageOXQuiz from "../message/OXQuiz";
import MessageDraw from "../message/Draw";

// const messages = [
//   {
//     id: 1,
//     type: "oxquiz",
//     count: [12, 11],
//     role: "student",
//     isChecked: true,
//   },
//   {
//     id: 2,
//     type: "check",
//     count: 10,
//     role: "professor",
//     isChecked: false,
//   },
// ];

const ChatMessages = ({ messages, toggleCheck, toggleOXQuiz }) => {
  console.log(messages);
  return (
    <div className="flex-1 px-4 py-2 space-y-2 overflow-y-auto">
      {messages.map((msg) => {
        const key = `${msg.type}-${msg.id}`;

        if (msg.type === "chat" && msg.role === "student") {
          return (
            <MessageStudentText
              key={key}
              name={msg.username}
              text={msg.message}
            />
          );
        }

        if (msg.type === "chat" && msg.role === "professor") {
          return <MessageTeacherText key={msg.id} text={msg.message} />;
        }

        if (msg.type === "check") {
          return (
            <MessageCheck
              key={key}
              id={msg.id}
              isChecked={msg.isChecked}
              count={msg.checkCount}
              role={msg.role}
              toggleCheck={toggleCheck}
            />
          );
        }

        if (msg.type === "oxquiz") {
          return (
            <MessageOXQuiz
              key={key}
              id={msg.id}
              isChecked={msg.isChecked}
              oCount={msg.oCount}
              xCount={msg.xCount}
              toggleOXQuiz={toggleOXQuiz}
            />
          );
        }

        if (msg.type === "draw") {
          return (
            <MessageDraw
              key={key}
              id={msg.id}
              winnerUsername={msg.winnerUsername}
              isRelease={msg.isRelease}
            />
          );
        }

        if (msg.type === "image") {
          return (
            <MessageImage
              key={key}
              name={msg.name}
              image={msg.image}
              time={msg.time}
              sender={msg.sender}
            />
          );
        }

        if (msg.type === "system") {
          return <MessageSystem key={msg.id} text={msg.text} time={msg.time} />;
        }

        return null;
      })}
    </div>
  );
};

export default ChatMessages;
