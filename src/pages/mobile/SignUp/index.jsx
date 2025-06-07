import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useState } from "react";
import publicInstance from "../../../libs/instance/publicInstance";

const MobileSignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    studentNo: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.studentNo || !form.password) {
      return alert("모든 항목을 입력해주세요");
    }

    try {
      const res = await publicInstance.post("/auth/register", form);
      alert("회원가입 성공!");
      console.log(res);
      navigate("/mobile/signin");
    } catch (err) {
      alert("회원가입 실패..", err);
    }
  };

  return (
    <>
      <img src={logo} alt="" />
      <div className="w-full flex flex-col gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="이름"
          className="w-full px-6 py-3 bg-primary-white text-black font-bold placeholder:text-[#b6b6b6] placeholder:font-bold border-2 rounded-full shadow-[2px_8px_4px_2px_rgba(0,0,0,1)]"
        />
        <input
          name="studentNo"
          value={form.studentNo}
          onChange={handleChange}
          type="number"
          placeholder="학번 / 교번"
          className="w-full px-6 py-3 bg-primary-white text-black font-bold placeholder:text-[#b6b6b6] placeholder:font-bold border-2 rounded-full shadow-[2px_8px_4px_2px_rgba(0,0,0,1)]"
        />
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          type="password"
          placeholder="비밀번호"
          className="w-full px-6 py-3 bg-primary-white text-black font-bold placeholder:text-[#b6b6b6] placeholder:font-bold border-2 rounded-full shadow-[2px_8px_4px_2px_rgba(0,0,0,1)]"
        />
        <div className="w-full text-primary-white flex gap-2 text-xs font-bold pl-3">
          <p className="text-system-accent">계정이 이미 있으신가요?</p>
          <p
            className="text-primary-white underline"
            onClick={() => navigate("/mobile/signin")}
          >
            로그인
          </p>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="px-8 py-2 text-2 font-bold bg-primary-light text-primary-white rounded-full shadow-[2px_6px_4px_0px_rgba(0,0,0,0.25)]"
      >
        회원가입
      </button>
    </>
  );
};

export default MobileSignUp;
