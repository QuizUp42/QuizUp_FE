import MultipleQuiz from "./MultipleQuiz";
import ShortQuiz from "./ShortQuiz";

const QuizMain = ({ question, answer, onAnswer }) => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="w-full flex-1 max-h-[200px] px-5 flex items-center justify-center">
        <p className="text-system-accent font-bold text-xl text-center">
          {question.question}
        </p>
      </div>
      {question.type === "short" ? (
        <ShortQuiz value={answer} onChange={onAnswer} />
      ) : (
        <MultipleQuiz
          id={question.id}
          questions={question.choices}
          value={answer[question.id]}
          onChange={onAnswer}
        />
      )}
    </div>
  );
};

export default QuizMain;
