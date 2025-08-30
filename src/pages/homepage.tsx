import { useCookies } from "react-cookie";
import { APP_CONSTANTS } from "../constants";

const Homepage = () => {
  const [cookies] = useCookies(["user_id", "full_name"]);
  const isUserLoggedIn = (): boolean => {
    const userId = cookies.user_id;
    const fullName = cookies.full_name;
    return Boolean(
      userId && fullName && userId !== "Guest" && fullName !== "Guest"
    );
  };

  // Always show homepage content, but change button text based on login status
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to {APP_CONSTANTS.APP_NAME}
        </h1>
        <p className="text-gray-600">
          A shipping tracking application built with React and TypeScript
        </p>

        <div className="space-y-4">
          <a
            href={isUserLoggedIn() ? "/track" : "/login"}
            className="block w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {isUserLoggedIn() ? "Go to Tracking" : "Sign In to Track Shipments"}
          </a>

          <a
            href={APP_CONSTANTS.GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border border-primary text-primary py-3 px-6 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            View README
          </a>
        </div>

        <div className="text-sm text-gray-500 space-y-2">
          <p>
            <strong>Demo Credentials:</strong>
          </p>
          <p>Username: {APP_CONSTANTS.DEMO_CREDENTIALS.username}</p>
          <p>Password: {APP_CONSTANTS.DEMO_CREDENTIALS.password}</p>
        </div>
      </div>
    </div>
  );
};

export { Homepage };
