const MessageStudentText = ({ name, text, time }) => {
  return (
    <div className="w-full flex flex-col gap-2 items-end">
      <p className="text-xs text-system-accent font-semibold">{name}</p>
      <div className="w-full flex items-end justify-end gap-1.5">
        <p className="text-xs text-system-accent">{time}</p>
        <div className="w-fit max-w-[70%] break-words p-3 bg-primary-accent rounded-lg">
          <p className="text-sm text-primary-light font-semibold">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageStudentText;
