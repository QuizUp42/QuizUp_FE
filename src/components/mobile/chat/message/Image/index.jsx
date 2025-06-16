import { useEffect, useState } from "react";

const MessageImage = ({ image }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 1000); // ✅ 1초(1000ms) 후 렌더링

    return () => clearTimeout(timeout); // 컴포넌트 언마운트 시 정리
  }, []);

  if (!show) return null;
  return (
    <div className="w-full flex flex-col gap-2 items-end">
      {/* <p className="text-xs text-system-accent font-semibold">{name}</p> */}
      <div className="w-full flex items-end justify-end gap-1.5">
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
