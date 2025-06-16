import MessageImage from "../message/Image";
import MessageStudentText from "../message/StudentText";
import MessageTeacherText from "../message/TeacherText";
import MessageSystem from "../message/System";
import MessageCheck from "../message/Check";
import MessageOXQuiz from "../message/OXQuiz";
import MessageDraw from "../message/Draw";
import MessageQuiz from "../message/Quiz";
import { useEffect, useRef } from "react";

const ChatMessages = ({ messages, toggleCheck, toggleOXQuiz }) => {
  const scrollRef = useRef(null);
  const prevLengthRef = useRef(0);

  const scrollToBottom = () => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({
        top: el.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const isAtBottom = () => {
    const el = scrollRef.current;
    if (!el) return false;
    const diff = el.scrollHeight - el.scrollTop - el.clientHeight;
    return diff < 150;
  };

  // 초기 렌더 시
  useEffect(() => {
    if (messages.length > 0 && prevLengthRef.current === 0) {
      requestAnimationFrame(() => scrollToBottom());
    }
  }, [messages]);

  // 이후 메시지 증가 시
  useEffect(() => {
    if (messages.length > prevLengthRef.current) {
      if (isAtBottom()) {
        requestAnimationFrame(() => scrollToBottom());
      }
    }
    prevLengthRef.current = messages.length;
  }, [messages]);

  return (
    <div ref={scrollRef} className="flex-1 px-4 py-2 space-y-2 overflow-y-auto">
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

        if (msg.type === "quiz") {
          return (
            <MessageQuiz
              key={key}
              quizId={msg.quizId}
              quizName={msg.quizName}
              isSubmit={msg.isSubmit}
            />
          );
        }

        if (msg.type === "image") {
          return <MessageImage key={key} image={msg.url} sender={msg.sender} />;
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
