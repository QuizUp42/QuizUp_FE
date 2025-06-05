import { AiOutlineCheck } from "react-icons/ai";
import BaseTeacherText from "../common/baseTeacherText";
import { useEffect, useState } from "react";

const MessageCheck = ({ isChecked, id, count, toggleCheck }) => {
  const [isCheck, setIsCheck] = useState(isChecked);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  const handleCheck = () => {
    console.log(role);
    if (role === "student") {
      console.log("여기는 들어와??");
      const newCheck = !isCheck;
      setIsCheck(newCheck);
      toggleCheck(id, newCheck);
    }
  };

  return (
    <BaseTeacherText>
      <div className="flex flex-col items-center justify-center gap-2">
        <div
          onClick={handleCheck}
          className={`w-14 h-14 flex items-center justify-center rounded-lg border-2 border-primary-white ${
            isCheck ? "bg-system-green" : "bg-transparent"
          }`}
        >
          <AiOutlineCheck className="w-8 h-8 text-primary-white" />
        </div>
        <div>
          <p className="text-base font-semibold text-primary-white leading-4">
            {count}
          </p>
        </div>
      </div>
    </BaseTeacherText>
  );
};

export default MessageCheck;
