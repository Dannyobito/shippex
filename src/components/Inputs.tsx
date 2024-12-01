import { Link } from "react-router-dom";

import lock from "../assets/lock.svg";
import eyeOpen from "../assets/eye-open.svg";
import eyeClosed from "../assets/eye-off.svg";

interface GeneralInputProps {
  label: string;
  icon: string;
  placeholder: string;
  type: string;
  value: string;
  setValue: (value: string) => void;
}
const GeneralInput = ({
  label,
  icon,
  placeholder,
  type,
  value,
  setValue,
}: GeneralInputProps) => {
  return (
    <div className="flex flex-col gap-[.625rem] w-full">
      <label htmlFor={label} className="text-sm font-semibold capitalize">
        {label}
      </label>
      <div className="login-input-container">
        <img src={icon} />
        <input
          className="login-input"
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};
interface PasswordInputProps {
  password: string;
  setPassword: (password: string) => void;
  passwordIsVisible: boolean;
  setPasswordIsVisible: (isVisible: boolean) => void;
}
const PasswordInput = ({
  password,
  setPassword,
  passwordIsVisible,
  setPasswordIsVisible,
}: PasswordInputProps) => {
  return (
    <div className="flex flex-col gap-[.625rem] w-full">
      <div className="flex justify-between text-sm font-semibold">
        <label htmlFor="password" className="">
          Password
        </label>
        <Link to="/signup" className="text-primary">
          Forgot Password
        </Link>
      </div>
      <div className="login-input-container">
        <img src={lock} />
        <input
          className="login-input"
          placeholder="your password"
          autoComplete="off"
          value={password}
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
  );
};

export { GeneralInput, PasswordInput };
