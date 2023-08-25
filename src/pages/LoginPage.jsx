import React from "react";
import Login from "../components/loginPage/Login";

import "../style/App.css";

const LoginPage = () => {
  return (
    <main className="credentials__page">
      <section className="credentials__container">
        <article className="login__card">
          <Login />
        </article>
      </section>
    </main>
  );
};

export default LoginPage;
