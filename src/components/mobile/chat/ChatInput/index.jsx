import { useState } from "react";
import { BiSolidImageAdd, BiRightArrowCircle } from "react-icons/bi";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");

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
    <div className="p-3">
      <div className="flex items-center px-3 py-1.5 gap-2 text-primary-soft border border-primary-border rounded-xl">
        <BiSolidImageAdd className="w-5 h-5 cursor-pointer" />
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
    </div>
  );
};

export default ChatInput;
