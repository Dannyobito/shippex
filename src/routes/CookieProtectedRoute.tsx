import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

interface CookieProtectedRouteProps {
  children: React.ReactNode;
}

const CookieProtectedRoute = ({ children }: CookieProtectedRouteProps) => {
  const [cookies] = useCookies(["user_id", "full_name"]);
  const isUserLoggedIn = (): boolean => {
    const userId = cookies.user_id;
    const fullName = cookies.full_name;
    return Boolean(
      userId && fullName && userId !== "Guest" && fullName !== "Guest"
    );
  };
  return isUserLoggedIn() ? <>{children}</> : <Navigate to="/login" />;
};

export { CookieProtectedRoute };
