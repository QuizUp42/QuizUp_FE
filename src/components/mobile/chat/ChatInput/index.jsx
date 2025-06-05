import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiSolidImageAdd, BiRightArrowCircle } from "react-icons/bi";
import quizIcon from "../../../../assets/quiz_icon.png";
import checkIcon from "../../../../assets/check_icon.png";
import oxIcon from "../../../../assets/ox_icon.png";
import randomIcon from "../../../../assets/random_icon.png";

const ChatInput = ({ role, onSend, onCheck, onOXQuiz }) => {
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-3 relative">
      <div className="flex items-center px-3 py-1.5 gap-2 text-primary-soft border border-primary-border rounded-xl">
        {role === "professor" ? (
          <AiOutlinePlusCircle
            className={`w-5 h-5 cursor-pointer transition-transform duration-300 ${
              isModalOpen ? "rotate-45" : ""
            }`}
            onClick={() => setIsModalOpen(!isModalOpen)}
          />
        ) : (
          <BiSolidImageAdd className="w-5 h-5 cursor-pointer" />
        )}
        <input
          type="text"
          placeholder="질문을 입력하기"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 p-4 text-sm font-semibold text-primary-soft placeholder-primary-muted rounded-lg bg-transparent outline-none"
        />
        <BiRightArrowCircle
          className="w-7 h-7 cursor-pointer"
          onClick={handleSend}
        />
      </div>

      {isModalOpen && (
        <div className="absolute ml-3 top-0 left-0 -translate-y-full px-6 py-0 bg-primary-dark rounded-full flex items-center justify-between w-[200px] h-[48px] border border-primary-border shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <img src={quizIcon} alt="quiz" className="cursor-pointer" />
          <img
            src={checkIcon}
            alt="check"
            className="cursor-pointer"
            onClick={onCheck}
          />
          <img
            src={oxIcon}
            alt="o/x"
            className="cursor-pointer"
            onClick={onOXQuiz}
          />
          <img src={randomIcon} alt="random" className="cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default ChatInput;
