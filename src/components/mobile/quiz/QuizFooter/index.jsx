const QuizFooter = ({ currentIndex, total, onPrev, onNext }) => {
  return (
    <div className="py-8 flex items-center justify-between">
      {currentIndex > 0 ? (
        <button
          onClick={onPrev}
          className="px-8 py-3 flex items-center justify-center rounded-full bg-primary-light cursor-pointer"
        >
          <p className="text-base font-bold text-primary-white leading-4">
            이전
          </p>
        </button>
      ) : (
        <div />
      )}

      <button
        onClick={onNext}
        className={`px-8 py-3 flex items-center justify-center rounded-full cursor-pointer
        ${currentIndex === total - 1 ? "bg-primary-soft" : "bg-primary-light"}
        `}
      >
        <p
          className={`text-base font-bold leading-4 ${
            currentIndex === total - 1
              ? "text-primary-light"
              : "text-primary-white"
          }`}
        >
          {currentIndex === total - 1 ? "제출" : "다음"}
        </p>
      </button>
    </div>
  );
};

export default QuizFooter;
