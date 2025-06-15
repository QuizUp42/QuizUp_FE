import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import AppLayout from "../components/layout/AppLayout";
import Signup from "../pages/Signup";
import MobileLayout from "../components/layout/MobileLayout";
import MobileEnter from "../pages/mobile/Enter";
import MobileSignUp from "../pages/mobile/SignUp";
import MobileNickname from "../pages/mobile/Nickname";
import MobileHomeLayout from "../components/layout/MobileHomeLayout";
import MobileChat from "../pages/mobile/Chat";
import MobileQuiz from "../pages/mobile/Quiz";
import MobileAnswer from "../pages/mobile/Answer";
import MobileScore from "../pages/mobile/Score";
import MobileSignIn from "../pages/mobile/SignIn";
import MobileRoutes from "../pages/mobile/Routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
  {
    path: "/mobile",
    element: <MobileLayout />,
    children: [
      { path: "", element: <MobileEnter /> },
      { path: "signin", element: <MobileSignIn /> },
      { path: "signup", element: <MobileSignUp /> },
      { path: ":roomCode", element: <MobileRoutes /> },
      { path: ":roomCode/nickname", element: <MobileNickname /> },
    ],
  },
  {
    path: "/mobile/:roomCode",
    element: <MobileHomeLayout />,
    children: [
      { path: "chat", element: <MobileChat /> },
      { path: "quiz/:quizId", element: <MobileQuiz /> },
      { path: "answer/:quizId", element: <MobileAnswer /> },
      { path: "score", element: <MobileScore /> },
    ],
  },
]);
