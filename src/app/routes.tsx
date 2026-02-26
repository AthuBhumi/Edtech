import { createBrowserRouter } from "react-router";
import { Login } from "./pages/Login";
import { PrincipalDashboard } from "./pages/PrincipalDashboard";
import { TeacherDashboard } from "./pages/TeacherDashboard";
import { StudentDashboard } from "./pages/StudentDashboard";
import { ParentDashboard } from "./pages/ParentDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/principal/*",
    Component: PrincipalDashboard,
  },
  {
    path: "/teacher/*",
    Component: TeacherDashboard,
  },
  {
    path: "/student/*",
    Component: StudentDashboard,
  },
  {
    path: "/parent/*",
    Component: ParentDashboard,
  },
]);
