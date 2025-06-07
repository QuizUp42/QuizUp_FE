import { Outlet } from "react-router-dom";
import bgImage from "../../../assets/background_mobile.png";

const MobileLayout = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="h-screen px-10 py-20 bg-cover bg-center flex flex-col gap-14 items-center justify-start"
    >
      <Outlet />
    </div>
  );
};

export default MobileLayout;
