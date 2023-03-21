import React from "react";
import { HeaderCard } from "../../Home/index";

import "./Header.scss";

export default function Header() {
  return (
    <header className="app__flex nav__padding">
      <div className="app__container-width app__container header__container">
        <h1 className="background__text one">FRESH DIRECT</h1>
        <h1 className="background__text tw">FRESH DIRECT</h1>
        <div className="header__content col">
          <h1>Healthy Eating Made Simple</h1>
          <h2>Nutritious Meals for a Healthier You</h2>
          <p className="p-text">
            Our meals are designed to give you the energy and nutrients you need to live your best
            life. Say goodbye to processed junk food and hello to delicious, wholesome meals.
          </p>

          <div className="row" style={{ marginTop: "20px", width: "450px" }}>
            <button
              className="btn "
              style={{
                backgroundColor: "var(--accent-color-blue)",
                color: "var(--grey-600)",
                fontWeight: "bold",
              }}
            >
              Shop now
            </button>
            <button
              className="btn "
              style={{
                backgroundColor: "var(--accent-color-orange)",
                color: "var(--grey-600)",
                fontWeight: "bold",
              }}
            >
              Register
            </button>
          </div>
        </div>
        <div className="header__content girl__container col">
          
        </div>
      </div>
    </header>
  );
}
