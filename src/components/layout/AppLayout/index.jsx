import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <p>앱 레이아웃</p>
      <hr />
      <Outlet />
    </div>
  );
};

export default AppLayout;
