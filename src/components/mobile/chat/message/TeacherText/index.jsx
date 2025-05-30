import { FaCrown } from "react-icons/fa";

const MessageTeacherText = ({ text }) => {
  return (
    <div className="relative mt-4 w-full flex items-end justify-start gap-1.5">
      <FaCrown className="absolute w-8 h-8 -left-2 -top-4 z-0 text-system-gold rotate-[-18deg]" />
      <div className="w-fit max-w-[70%] break-words p-3 bg-primary-light rounded-lg z-1 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <p className="text-sm text-primary-soft font-semibold">{text}</p>
      </div>
    </div>
  );
};

export default MessageTeacherText;
