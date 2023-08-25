// eslint-disable-next-line no-unused-vars
import React from "react";
import "./style/home.css";

const Home = () => {
  return (
    <main className="home__page">
      <section className="device__list">
        <div className="client">
          <h2>
            Nombre del cliente: <span>Gustabo Polanco</span>
          </h2>
        </div>
        <div className="device">
          <h3>
            model: <span>Iphone 14 XS</span>
          </h3>
          <h3>
            type: <span>2021 - 128GB</span>
          </h3>
        </div>
        <div className="status">
          <div className="circle__status"></div>
          <button className="btn__status">Activate / Deactivate</button>
        </div>
      </section>
      <section className="device__aside">
        <article className="device__information">
          <h3>Marca: Iphone 14</h3>
          <h3>Modelo: PRO MAX</h3>
          <h3>Año: 2022</h3>
          <h3>Capacidad: 254 GB</h3>
          <h3>Memoria: 6 RAM</h3>
        </article>
        <article className="device__Status">
          <div></div>
        </article>
      </section>
    </main>
  );
};

export default Home;
