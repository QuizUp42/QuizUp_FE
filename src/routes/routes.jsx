import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import MobileLayout from "@/layouts/MobileLayout";
import Login from "../pages/Login";
import MobileLogin from "../pages/mobile/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "", element: <Login /> }],
  },
  {
    path: "/mobile",
    element: <MobileLayout />,
    children: [{ path: "enter", element: <MobileLogin /> }],
  },
]);
