import { useState } from "react";
import BaseTeacherText from "../common/baseTeacherText";

const MessageDraw = ({ winnerUsername, isRelease: initialIsRelease }) => {
  const [isRelease, setIsRelease] = useState(initialIsRelease);

  const handleRelease = () => {
    setIsRelease(true);
  };

  return (
    <BaseTeacherText>
      <div className="flex flex-col items-center gap-1 w-[155px] h-[70px]">
        {isRelease ? (
          <>
            <p className="text-base text-primary-soft font-semibold py-1">
              🎉 당첨
            </p>
            <p className="text-base text-primary-accent font-semibold py-1">
              {winnerUsername}
            </p>
          </>
        ) : (
          <>
            <p className="text-base text-primary-soft font-semibold py-2">
              두구두구
            </p>
            <button
              onClick={handleRelease}
              className="w-full p-2 rounded-lg bg-primary-white cursor-pointer"
            >
              <p className="text-xs text-primary-light font-bold">결과보기</p>
            </button>
          </>
        )}
      </div>
    </BaseTeacherText>
  );
};

export default MessageDraw;
