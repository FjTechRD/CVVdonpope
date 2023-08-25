import React from "react";
import "../styles/register.css";

const Register = () => {
  return (
    <div className="register__form">
      <h3>Registro</h3>
      <form className="register-card__form">
        <div className="register__section">
          <label htmlFor="">Nombre</label>
          <input type="text" />
        </div>
        <div className="register__section">
          <label htmlFor="">Apellidos</label>
          <input type="text" />
        </div>
        <div className="register__section">
          <label htmlFor="">Dirrecion</label>
          <input type="text" />
        </div>
        <div className="register__section">
          <label htmlFor="">Numero de Telefono</label>
          <input type="numbers" />
        </div>
        <div className="register__section">
          <label htmlFor="">Contraseña</label>
          <input type="password" />
          <label htmlFor="">Repite tu Contraseña</label>
          <input type="password" />
        </div>
        <button>Enviar</button>
      </form>
      <button className="back__button">⬅</button>
    </div>
  );
};

export default Register;
