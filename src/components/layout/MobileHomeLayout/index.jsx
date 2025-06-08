import { Outlet, useParams } from "react-router-dom";
import { FaRankingStar } from "react-icons/fa6";
import { BiMenu } from "react-icons/bi";
import icon from "../../../assets/icon.png";

const mockClassData = {
  classId: 1,
  className: "프로젝트 기반 SW 교육",
};

const MobileHomeLayout = () => {
  const { quizId } = useParams();
  return (
    <div className="bg-primary-base h-[100dvh] flex flex-col overflow-hidden">
      {!quizId && (
        <div className="flex items-center gap-4 py-2 px-4 bg-primary-dark text-primary-soft">
          <img src={icon} alt="app-icon" className="w-7 h-8.5" />
          <h1 className="flex-1 text-xs font-semibold">
            {mockClassData.className}
          </h1>
          <FaRankingStar className="w-6 h-6" />
          <BiMenu className="w-7.5 h-7.5" />
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default MobileHomeLayout;
