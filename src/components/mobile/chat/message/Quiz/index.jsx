import BaseTeacherText from "../common/baseTeacherText";
import { BiPlay } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";

const MessageQuiz = ({ quizId, quizName, isSubmit }) => {
  const navigate = useNavigate();
  const { roomId } = useParams();

  const handleOnQuiz = () => {
    navigate(`/mobile/${roomId}/quiz/${quizId}`);
  };
  const handleOnAnswer = () => {
    navigate(`/mobile/${roomId}/answer/${quizId}`);
  };

  return (
    <BaseTeacherText>
      <div className="flex flex-col items-start gap-1 w-[155px] h-[80px]">
        {isSubmit ? (
          <>
            <div className="w-full flex items-center justify-between text-base px-2 text-primary-soft font-semibold py-2">
              <p>문제 1</p>
              <p>30s</p>
            </div>
            <button
              onClick={handleOnAnswer}
              className="w-full p-2 rounded-lg bg-primary-white cursor-pointer"
            >
              <p className="text-xs text-primary-light font-bold">결과보기</p>
            </button>
          </>
        ) : (
          <>
            <div className="w-full flex items-center justify-between text-base px-2 text-primary-soft font-semibold py-2">
              <p>문제 1</p>
              <p>30s</p>
            </div>
            <button
              onClick={handleOnQuiz}
              className="w-full px-2 py-1 rounded-lg text-system-green bg-primary-white cursor-pointer border-2 border-system-green flex items-center justify-center"
            >
              <BiPlay className="flex items-center justify-center w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </BaseTeacherText>
  );
};

export default MessageQuiz;
