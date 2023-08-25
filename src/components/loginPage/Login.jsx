import React, { useState } from "react";
import "../styles/login.css";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  return (
    <div className="login__form  ">
      <h3>INICIA SESIÓN</h3>
      <form className="login-card__form">
        <div className="form__section">
          <label htmlFor="">Nombre de Usuario</label>
          <input type="text" />
        </div>
        <div className="form__section">
          <label htmlFor="">Contraseña</label>
          <input type="password" />
        </div>
      </form>
      <div className="login-submit">
        <button>INICIAR SESION</button>
        <p>
          No tienes cuenta? <Link to="/register-account">registrate!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
