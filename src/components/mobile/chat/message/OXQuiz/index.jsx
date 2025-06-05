import { useEffect, useState } from "react";
import BaseTeacherText from "../common/baseTeacherText";
import { AiOutlineCheck } from "react-icons/ai";
import { BiCircle } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const MessageOXQuiz = ({ isChecked, xCount, oCount, toggleOXQuiz, id }) => {
  const [selected, setSelected] = useState(isChecked);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  const handleCheck = (choice) => {
    if (role !== "student") return;

    const newCheck = selected === choice ? null : choice;
    setSelected(newCheck);
    toggleOXQuiz(id, newCheck);
  };

  return (
    <BaseTeacherText>
      <div className="flex gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <div
            onClick={() => handleCheck("O")}
            className={`w-14 h-14 flex items-center justify-center rounded-lg border-2 border-primary-white ${
              selected === "O" ? "bg-system-green" : "bg-transparent"
            }`}
          >
            <BiCircle
              className={`w-9 h-9 ${
                selected === "O" ? "text-primary-white" : "text-system-green"
              }`}
            />
          </div>
          <div>
            {selected !== null && (
              <p className="text-base font-semibold text-primary-white leading-4">
                {oCount}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div
            onClick={() => handleCheck("X")}
            className={`w-14 h-14 flex items-center justify-center rounded-lg border-2 border-primary-white ${
              selected === "X" ? "bg-system-red" : "bg-transparent"
            }`}
          >
            <CgClose
              className={`w-9 h-9 ${
                selected === "X" ? "text-primary-white" : "text-system-red"
              }`}
            />
          </div>
          <div>
            {selected !== null && (
              <p className="text-base font-semibold text-primary-white leading-4">
                {xCount}
              </p>
            )}
          </div>
        </div>
      </div>
    </BaseTeacherText>
  );
};

export default MessageOXQuiz;
