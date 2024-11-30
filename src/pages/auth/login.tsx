import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Layout from "../../components/Layout";
import { Logo } from "../../components/Logo";

import users from "../../assets/users.svg";
import lock from "../../assets/lock.svg";
import eyeOpen from "../../assets/eye-open.svg";
import eyeClosed from "../../assets/eye-off.svg";
import loader from "../../assets/loader.svg";
import { useCookies } from "react-cookie";

const Login = () => {
  const [cookies] = useCookies(["user_id", "full_name"]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const isComplete = userName && password;

  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginFormData = new FormData();
    loginFormData.append("usr", userName);
    loginFormData.append("pwd", password);
    setIsSubmitting(true);
    try {
      const { data } = await axios.post("/api/login", loginFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(data);
    } catch (error: any) {
      console.error(error);
      if (error.status === 401) {
        alert("Invalid Username or Password");
      }
    } finally {
      setIsSubmitting(false);
      navigate("/track");
    }
  };

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
                <small className="text-[#4B5563]">
                  Don't have an Account yet?
                </small>
                <Link to="/signup" className="text-primary font-semibold">
                  Sign up here
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-[.625rem] w-full">
              <label htmlFor="username" className="text-sm font-semibold">
                Username
              </label>
              <div className="px-4 py-[.875rem] flex gap-4 items-center border border-lightGray rounded-lg focus-within:border-[#2563EB] focus-within:ring-4 focus-within:ring-[#3B82F6] focus-within:ring-opacity-25">
                <img src={users} />
                <input
                  className="font-medium text-[.9375rem] placeholder-basicGray border-0 outline-0 w-full"
                  placeholder="ali@brandim|"
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-[.625rem] w-full">
              <div className="flex justify-between text-sm font-semibold">
                <label htmlFor="username" className="">
                  Password
                </label>
                <Link to="/signup" className="text-primary">
                  Forgot Password
                </Link>
              </div>
              <div className="px-4 py-[.875rem] flex gap-4 items-center border border-lightGray rounded-lg focus-within:border-[#2563EB] focus-within:ring-4 focus-within:ring-[#3B82F6] focus-within:ring-opacity-25">
                <img src={lock} />
                <input
                  className="font-medium text-[.9375rem] placeholder-basicGray border-0 outline-0 w-full"
                  placeholder="your password"
                  type={passwordIsVisible ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  src={passwordIsVisible ? eyeOpen : eyeClosed}
                  onClick={() => {
                    setPasswordIsVisible(!passwordIsVisible);
                  }}
                />
              </div>
            </div>
            <div className="flex gap-4 justify-start items-center w-full">
              <input
                type="checkbox"
                className="w-4 h-4 border-lightGray text-lightGray"
              />
              <p className="font-medium leading-6">Remember Me</p>
            </div>
            <button
              disabled={!isComplete || isSubmitting}
              className={`mt-2 max-w-[21.375rem] flex justify-center items-center px-[9.125rem] py-[0.875rem] bg-primary text-[0.9375rem] text-white font-semibold rounded-lg whitespace-nowrap disabled:bg-[#60A5FA] disabled:text-[#EFF6FF] focus-within:border-[#2563EB] focus-within:ring-4 focus-within:ring-[#3B82F6] focus-within:ring-opacity-25 ${
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
          </form>
        </main>
      </Layout>
    </>
  );
};

export { Login };
