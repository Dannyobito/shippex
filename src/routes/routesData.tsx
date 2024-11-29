import { Login } from "../pages/auth/login";
import { SignUp } from "../pages/auth/signup";
import { NotFound } from "../components/NotFound";
import { Tracking } from "../pages/tracking/Tracking";

interface RouteType {
  path: string;
  Component: React.FC;
}

const allRoutes: RouteType[] = [
  {
    path: "signup",
    Component: SignUp,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "track",
    Component: Tracking,
  },
  {
    path: "*",
    Component: NotFound,
  },
];
export { allRoutes };
