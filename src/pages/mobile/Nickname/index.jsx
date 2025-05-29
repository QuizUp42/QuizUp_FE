import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import icon from "../../../assets/icon.png";

const MobileNickname = () => {
  return (
    <>
      <div className="mb-1.5 flex flex-col items-center gap-4 font-bold text-primary-white text-xl">
        <img src={icon} alt="" className="w-12 h-16" />
        <div className="flex flex-col items-center gap-2">
          <p>프로젝트 기반 SW 교육</p>
          <p>조학수</p>
        </div>
      </div>
      <div className="w-full max-w-112.5 h-[51px] px-6 py-2 flex gap-2 items-center bg-primary-white border-2 rounded-full shadow-[2px_8px_4px_2px_rgba(0,0,0,1)]">
        <input
          type="text"
          placeholder="슬픈 고양이"
          className=" w-full text-black font-bold placeholder:text-[#b6b6b6] placeholder:font-bold"
        />
        <GiPerspectiveDiceSixFacesRandom className="w-7.5 h-7.5 text-system-text" />
      </div>
      <button className="px-8 py-2 text-2 font-bold bg-primary-light text-primary-white rounded-full shadow-[2px_6px_4px_0px_rgba(0,0,0,0.25)]">
        입장
      </button>
    </>
  );
};

export default MobileNickname;
