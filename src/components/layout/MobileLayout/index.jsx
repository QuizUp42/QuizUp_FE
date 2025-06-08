import { Outlet } from "react-router-dom";
import bgImage from "../../../assets/background_mobile.png";

const MobileLayout = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="h-[100dvh] px-10 py-20 bg-cover flex flex-col gap-14 items-center justify-start overflow-hidden"
    >
      <Outlet />
    </div>
  );
};

export default MobileLayout;
