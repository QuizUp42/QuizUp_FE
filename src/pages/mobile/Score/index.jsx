import { BiArrowBack } from "react-icons/bi";
import { useRoomStore } from "../../../stores/useRoomStore";
import { useEffect, useState } from "react";
import instance from "../../../libs/instance/axiosInstance";
import { FaMedal } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const dummyRanking = [
  { userId: 1, username: "김철수", correctCount: 6, totalScore: 60 },
  { userId: 2, username: "이영희", correctCount: 5, totalScore: 50 },
  { userId: 3, username: "박민수", correctCount: 4, totalScore: 40 },
  { userId: 4, username: "최지우", correctCount: 3, totalScore: 35 },
  { userId: 5, username: "정수빈", correctCount: 3, totalScore: 33 },
  { userId: 6, username: "한지원", correctCount: 2, totalScore: 28 },
  { userId: 7, username: "이준호", correctCount: 2, totalScore: 27 },
  { userId: 8, username: "김하린", correctCount: 2, totalScore: 25 },
  { userId: 9, username: "오세준", correctCount: 1, totalScore: 22 },
  { userId: 10, username: "장예린", correctCount: 1, totalScore: 20 },
  { userId: 11, username: "배지훈", correctCount: 1, totalScore: 18 },
  { userId: 12, username: "유다연", correctCount: 1, totalScore: 17 },
  { userId: 13, username: "문지환", correctCount: 0, totalScore: 15 },
  { userId: 14, username: "신다인", correctCount: 0, totalScore: 10 },
  { userId: 15, username: "홍지민", correctCount: 0, totalScore: 5 },
];

const MobileScore = () => {
  const navigate = useNavigate();
  const roomCode = useRoomStore((state) => state.roomCode);
  const [ranking, setRanking] = useState(dummyRanking);
  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const res = await instance.get(`/quiz/room/code/${roomCode}/ranking`);
        console.log(res);
      } catch (err) {
        console.error("랭킹 불러오기 실패:", err);
      }
    };

    if (roomCode) {
      fetchRanking();
    }
  }, [roomCode]);

  return (
    <div className="w-full h-full p-3 overflow-hidden">
      <div className="w-full h-full p-4 flex flex-col gap-4 rounded-[10px] border border-primary-border bg-primary-dark text-primary-soft font-semibold">
        <div className="w-full py-2 flex items-center justify-between">
          <BiArrowBack onClick={() => navigate(-1)} className="w-6 h-6" />
          <h1 className="text-primary-white">실시간 랭킹</h1>
          <div className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs">총 5명 참여중</p>
        </div>
        <div className="flex-1 py-2 overflow-y-auto">
          {ranking.map((user, idx) => (
            <div className="w-full px-2 py-4 flex gap-10 items-center justify-between">
              <div>
                {idx === 0 && <FaMedal className="text-system-gold" />}
                {idx === 1 && <FaMedal className="text-system-silver" />}
                {idx === 2 && <FaMedal className="text-system-bronze" />}
                {idx > 2 && (
                  <div className="w-4 flex items-center justify-center">
                    {idx + 1}
                  </div>
                )}
              </div>
              <div className="flex-1">{user.username}</div>
              <div>{user.totalScore} 점</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileScore;
