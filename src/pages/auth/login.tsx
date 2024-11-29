import { Link } from "react-router-dom";

import Layout from "../../components/Layout";

import { Logo } from "../../components/Logo";
import users from "../../assets/users.svg";
import lock from "../../assets/lock.svg";
import eyeOpen from "../../assets/eye-open.svg";
import eyeClosed from "../../assets/eye-off.svg";
import { useState } from "react";

const Login = () => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  return (
    <>
      <Layout gap={false}>
        <Logo />
        <main className="w-full h-full flex justify-center items-center t-black">
          <form className="w-fit flex flex-col gap-4 justify-center items-center">
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
              <div className="px-4 py-[.875rem] flex gap-4 items-center border border-basicGray rounded-lg focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
                <img src={users} />
                <input
                  className="font-medium text-[.9375rem] placeholder-basicGray border-0 outline-0 w-full"
                  placeholder="ali@brandim|"
                  type="text"
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
              <div className="px-4 py-[.875rem] flex gap-4 items-center border border-basicGray rounded-lg focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
                <img src={lock} />
                <input
                  className="font-medium text-[.9375rem] placeholder-basicGray border-0 outline-0 w-full"
                  placeholder="your password"
                  type={passwordIsVisible ? "text" : "password"}
                />
                <img
                  src={passwordIsVisible ? eyeOpen : eyeClosed}
                  onClick={() => {
                    setPasswordIsVisible(!passwordIsVisible);
                  }}
                />
              </div>
            </div>
          </form>
        </main>
      </Layout>
    </>
  );
};

export { Login };
