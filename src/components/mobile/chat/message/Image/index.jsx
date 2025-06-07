const MessageImage = ({ name, image, time }) => {
  return (
    <div className="w-full flex flex-col gap-2 items-end">
      <p className="text-xs text-system-accent font-semibold">{name}</p>
      <div className="w-full flex items-end justify-end gap-1.5">
        <p className="text-xs text-system-accent">{time}</p>
        <img
          className="w-[60%] max-w-[250px] h-auto rounded-lg"
          src={image}
          alt="sended image"
        />
      </div>
    </div>
  );
};

export default MessageImage;
