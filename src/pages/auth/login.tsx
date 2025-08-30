import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import { Logo } from "../../components/Logo";

import users from "../../assets/users.svg";
import loader from "../../assets/loader.svg";
import { useCookies } from "react-cookie";
import { GeneralInput, PasswordInput } from "../../components/Inputs";
import { mockLogin } from "../../services/mockApi";
import { APP_CONSTANTS } from "../../constants";

const Login = () => {
  const [cookies, setCookie] = useCookies(["user_id", "full_name"]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const isComplete = userName && password;

  const navigate = useNavigate();

  const setUsernameInStorage = (userName: string, rememberMe: boolean) => {
    if (rememberMe) {
      localStorage.setItem("shippex_username", userName);
    } else {
      localStorage.removeItem("shippex_username");
    }
  };
  const getUsernameFromStorage = (): string => {
    return localStorage.getItem("shippex_username") ?? "";
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await mockLogin(userName, password);
      if (response.success && response.user) {
        setUsernameInStorage(userName, rememberMe);
        // Set cookies for authentication
        setCookie("user_id", response.user.user_id, { path: "/" });
        setCookie("full_name", response.user.full_name, { path: "/" });
        navigate("/track");
      } else {
        alert(response.message || "Invalid Username or Password");
      }
    } catch (error: any) {
      console.error(error);
      alert("Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const rememberedUsername = getUsernameFromStorage();
    if (rememberedUsername) {
      setUserName(rememberedUsername);
    }
  }, []);

  useEffect(() => {
    const isUserLoggedIn = (): boolean => {
      const userId = cookies.user_id;
      const fullName = cookies.full_name;
      return Boolean(
        userId && fullName && userId !== "Guest" && fullName !== "Guest"
      );
    };
    if (isUserLoggedIn()) {
      navigate("/track");
    }
  }, [cookies]);
  return (
    <>
      <Layout gap={false}>
        <Logo />
        <main className="w-full h-full flex justify-center items-center t-black">
          <form
            onSubmit={onSubmit}
            className="w-fit flex flex-col gap-4 justify-center items-center"
          >
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-2xl line text-black">Sign In</h1>
              <div className="flex gap-1 text-sm leading-5">
                <small className="text-[#4B5563] text-sm leading-5">
                  Don't have an Account yet?
                </small>
                <Link to="/signup" className="text-primary font-semibold">
                  Sign up here
                </Link>
              </div>
            </div>
            <GeneralInput
              label="username"
              placeholder="ali@brandim|"
              icon={users}
              type="text"
              value={userName}
              setValue={setUserName}
            />
            <PasswordInput
              password={password}
              setPassword={setPassword}
              passwordIsVisible={passwordIsVisible}
              setPasswordIsVisible={setPasswordIsVisible}
            />
            <div className="flex gap-4 justify-start items-center w-full">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="w-4 h-4 border-lightGray text-lightGray"
              />
              <p className="font-medium leading-6">Remember Me</p>
            </div>
            <button
              disabled={!isComplete || isSubmitting}
              className={` login-button ${
                isSubmitting
                  ? "focus-within:border-[#2563EB] focus-within:ring-4 focus-within:ring-[#3B82F6] focus-within:ring-opacity-25"
                  : ""
              }`}
            >
              {isSubmitting ? (
                <div className="flex justify-center items-center gap-[0.625rem]">
                  <img src={loader} className="animate-spin" />
                  <p>Signing In</p>
                </div>
              ) : (
                "Sign In"
              )}
            </button>

            {/* GitHub Repository Link */}
            <div className="mt-6 text-center">
              <a
                href={APP_CONSTANTS.GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-blue-700 font-medium underline"
              >
                View README
              </a>
            </div>
          </form>
        </main>
      </Layout>
    </>
  );
};

export { Login };
