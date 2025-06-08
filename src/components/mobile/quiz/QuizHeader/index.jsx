import { BiSolidTimeFive } from "react-icons/bi";

const QuizHeader = ({ totalSeconds, remainingSeconds }) => {
  const percent = (remainingSeconds / totalSeconds) * 100;
  return (
    <div className="w-full flex items-center gap-3 text-primary-soft">
      <div className="flex gap-2 items-center">
        <BiSolidTimeFive className="w-5 h-5" />
        <p className="text-base leading-none font-semibold">
          {remainingSeconds}
        </p>
      </div>
      <div className="w-full h-2 border-1 border-primary-border rounded-full">
        <div
          className="h-2 border-1 border-primary-border-soft rounded-full bg-primary-soft"
          style={{ width: `${percent}%`, transition: "width 1s linear" }}
        />
      </div>
    </div>
  );
};

export default QuizHeader;
