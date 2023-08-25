import React from "react";

export const DevicePage = () => {
  return (
    <main>
      <section>
        <div className="device-page__information">
          <div>
            <h2>Device Model</h2>
            <p>Info y Status</p>
          </div>
          <div className="device--page__location">
            <h2>google maps</h2>
            <p>current state</p>
          </div>
          <div className="device-page__stadistics"></div>
        </div>
      </section>
    </main>
  );
};
