import { useEffect, useState } from "react";
import QuizFooter from "../../../components/mobile/quiz/QuizFooter";
import QuizHeader from "../../../components/mobile/quiz/QuizHeader";
import QuizMain from "../../../components/mobile/quiz/QuizMain";
import instance from "../../../libs/instance/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";

const MobileQuiz = () => {
  const navigate = useNavigate();

  const totalSeconds = 30;
  const { quizId, roomId } = useParams();

  const [quizList, setQuizList] = useState([]);
  const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleSubmit = async () => {
    try {
      const answerArray = quizList.map((q) => answers[q.id] || "");
      const payload = {
        answers: answerArray,
      };

      const res = await instance.post(`/quiz/${quizId}/submit`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("제출 성공 ✅", res.data);
      navigate(`/mobile/${roomId}/chat`);
    } catch (error) {
      console.error("제출 실패 ❌", error);
    }
  };

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await instance.get(`/quiz/${quizId}`);
        setQuizList(res.data.questions);
      } catch (error) {
        console.error("퀴즈 불러오기 실패", error);
      }
    };

    fetchQuiz();
  }, [quizId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (remainingSeconds === 0) {
      handleSubmit();
    }
  }, [remainingSeconds]);

  if (quizList.length === 0) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="flex-1 w-full y-full flex flex-col p-4">
      <QuizHeader
        totalSeconds={totalSeconds}
        remainingSeconds={remainingSeconds}
      />
      <div className="w-full py-2 flex items-center justify-end">
        <p className="text-base text-system-accent font-bold">
          {currentIndex + 1} / {quizList.length}
        </p>
      </div>
      <QuizMain
        question={quizList[`${currentIndex}`]}
        answer={answers}
        onAnswer={handleAnswer}
      />
      <QuizFooter
        currentIndex={currentIndex}
        total={quizList.length}
        onPrev={() => setCurrentIndex((i) => i - 1)}
        onNext={() => {
          if (currentIndex === quizList.length - 1) {
            handleSubmit();
          } else {
            setCurrentIndex((i) => i + 1);
          }
        }}
      />
    </div>
  );
};

export default MobileQuiz;
