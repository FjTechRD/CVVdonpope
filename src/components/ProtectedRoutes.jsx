import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const user = {
    userName: "Gustavo Polanco",
    password: "Admin1234",
  };

  const isLoggin = (nick, pass) => {
    if (nick(user.userName) & pass(user.password)) {
      return <Outlet />;
    } else {
      return navigate("/login-account");
    }
  };
};

export default ProtectedRoutes;
