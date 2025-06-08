const MultipleQuiz = ({ questions, id, value, onChange }) => {
  return (
    <div className="py-5 flex flex-col gap-2 flex-1">
      {questions.map((item, idx) => {
        const isSelected = value === item;

        return (
          <button
            key={idx}
            onClick={() => onChange(id, item)}
            className={`w-full max-h-[80px] p-6 flex-1 rounded-lg flex items-center justify-start transition-all cursor-pointer
              ${isSelected ? "bg-primary-soft" : "bg-primary-light"}
            `}
          >
            <p
              className={` font-bold text-lg text-left ${
                isSelected ? "text-primary-light" : "text-primary-white"
              }`}
            >
              {idx + 1}. {item}
            </p>
          </button>
        );
      })}
    </div>
  );
};

export default MultipleQuiz;
