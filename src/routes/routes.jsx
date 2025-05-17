import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import MobileLogin from "../pages/mobile/Login";
import AppLayout from "../components/layout/AppLayout";
import Signup from "../pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
  {
    path: "/mobile",
    element: <MobileLogin />,
    // children: [{ path: "enter", element: <MobileLogin /> }],
  },
]);
