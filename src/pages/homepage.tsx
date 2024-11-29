import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

const Homepage = () => {
  const [cookies] = useCookies(["user_id", "full_name"]);
  const isUserLoggedIn = (): boolean => {
    const userId = cookies.user_id;
    const fullName = cookies.full_name;
    return Boolean(
      userId && fullName && userId !== "Guest" && fullName !== "Guest"
    );
  };
  return isUserLoggedIn() ? <Navigate to="/track" /> : <Navigate to="/login" />;
  return <div>homepage</div>;
};

export { Homepage };
