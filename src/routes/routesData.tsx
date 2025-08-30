import { Login } from "../pages/auth/login";
import { Homepage } from "../pages/homepage";
import { Tracking } from "../pages/tracking/Tracking";

interface RouteType {
  path: string;
  Component: React.FC;
}

const allRoutes: RouteType[] = [
  {
    path: "/",
    Component: Homepage,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/track",
    Component: Tracking,
  },
  {
    path: "*",
    Component: Homepage,
  },
];
export { allRoutes };
