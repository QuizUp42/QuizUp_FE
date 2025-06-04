import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import publicInstance from "../../../libs/instance/publicInstance";
import { useState } from "react";
import { useRoomStore } from "../../../stores/useRoomStore";

const MobileSignIn = () => {
  const navigate = useNavigate();
  const roomCode = useRoomStore((state) => state.roomCode);
  console.log(roomCode);

  const [form, setForm] = useState({
    studentNo: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    if (!form.studentNo || !form.password) {
      return alert("모든 항목을 입력해주세요");
    }

    try {
      const res = await publicInstance.post("/auth/login", form);
      const token = res.data.accessToken;
      const role = res.data.role;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      alert("로그인 성공!", res);
      if (role === "student") {
        navigate(`/mobile/${roomCode}/nickname`);
      } else if (role === "professor") {
        navigate(`/mobile/${roomCode}/chat`);
      }
    } catch (err) {
      alert("로그인 실패..", err);
    }
  };

  return (
    <>
      <img src={logo} alt="" />
      <div className="w-full flex flex-col gap-4">
        <input
          name="studentNo"
          value={form.studentNo}
          onChange={handleChange}
          type="text"
          placeholder="학번 / 교번"
          className="w-full px-6 py-3 bg-primary-white text-black font-bold placeholder:text-[#b6b6b6] placeholder:font-bold border-2 rounded-full shadow-[2px_8px_4px_2px_rgba(0,0,0,1)]"
        />
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          type="text"
          placeholder="비밀번호"
          className="w-full px-6 py-3 bg-primary-white text-black font-bold placeholder:text-[#b6b6b6] placeholder:font-bold border-2 rounded-full shadow-[2px_8px_4px_2px_rgba(0,0,0,1)]"
        />
        <div className="w-full text-primary-white flex gap-2 text-xs font-bold pl-3">
          <p className="text-system-accent">계정이 없으신가요?</p>
          <p
            className="text-primary-white underline"
            onClick={() => navigate("/mobile/signup")}
          >
            회원가입
          </p>
        </div>
      </div>
      <button
        onClick={handleLogin}
        className="px-8 py-2 text-2 font-bold bg-primary-light text-primary-white rounded-full shadow-[2px_6px_4px_0px_rgba(0,0,0,0.25)]"
      >
        로그인
      </button>
    </>
  );
};

export default MobileSignIn;
