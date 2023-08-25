import React from "react";
import Register from "../components/loginPage/Register";

const RegisterPage = () => {
  return (
    <main className="credentials__page">
      <section className="credentials__container">
        <article className="register__card">
          <Register />
        </article>
      </section>
    </main>
  );
};

export default RegisterPage;
