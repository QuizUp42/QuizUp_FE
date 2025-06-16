import { useNavigate, useParams } from "react-router-dom";
import { useRoomStore } from "../../../stores/useRoomStore";
import { useEffect } from "react";
import { useAuthStore } from "../../../stores/useAuthStore";

const MobileRoutes = () => {
  const navigate = useNavigate();

  const { roomCode } = useParams();
  const { setRoomCode } = useRoomStore();
  const { accessToken, role } = useAuthStore();

  // url로 넘어온 roomId 전역 상태로 저장, 만약 없다면 roomId 입력 페이지로 navigate.
  useEffect(() => {
    if (!roomCode) {
      navigate("/mobile");
      return;
    }
    setRoomCode(roomCode);
  }, [roomCode]);

  // 전역 상태에 저장된 로그인 정보 확인 후 역할에 따른 라우팅 분기, 만약 없다면 login 페이지로 navigate
  useEffect(() => {
    if (!accessToken || !role) {
      navigate("/mobile/signin");
      return;
    }

    if (role === "student") {
      navigate(`/mobile/${roomCode}/nickname`);
    } else if (role === "professor") {
      navigate(`/mobile/${roomCode}/chat`);
    }
  });

  return null;
};

export default MobileRoutes;
