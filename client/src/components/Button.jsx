import React from "react";

import { useStateContext } from "../contexts/ContextProvider";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}) => {
  const { setIsClicked, initialState } = useStateContext();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    cookies.remove("token");
    cookies.remove("username");
    cookies.remove("name");
  };

  const handleClick = () => {
    if (text === "Logout") {
      logout();
      navigate("/");
    }
    setIsClicked(initialState);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
