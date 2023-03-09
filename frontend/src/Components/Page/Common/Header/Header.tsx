import React from "react";
import { HeaderCard } from "../../Home/index";
import {
  burger3DSmall,
  salad3D,
  coffee3D,
  noodles3D,
  sushi3D,
} from "../../../../Assets/Images/images";
import "./Header.scss";

export default function Header() {
  return (
    <header className="app__flex nav__padding">
      <div className="app__container-width app__container header__container">
        <div className="header__content col">
          <h1>Healthy Eating Made Simple</h1>
          <h2>Nutritious Meals for a Healthier You</h2>
          <p className="p-text">
            Our meals are designed to give you the energy and nutrients you need to live your best
            life. Say goodbye to processed junk food and hello to delicious, wholesome meals.
          </p>

          <div className="header__card-grid">
            <HeaderCard img={sushi3D} title="Sushi" color="#e4efe0" />
            <HeaderCard img={burger3DSmall} title="Burgers" color="#faba92" />
            <HeaderCard img={salad3D} title="Salads" color="#E2E4F1" />
            <HeaderCard img={coffee3D} title="Drinks" color="#f5e0d4" />
            <HeaderCard img={noodles3D} title="Noodles" color="#dbeaf2" />
          </div>
        </div>
        <div className="header__content burger__container col">
          <img src={burger3DSmall} alt="" />
          <div className="stats__container">
            <div className="stat__container">
              <h3>Customers</h3>
              <p>100+</p>
            </div>
            <div className="stat__container">
              <h3>Customers</h3>
              <p>100+</p>
            </div>
            <div className="stat__container">
              <h3>Customers</h3>
              <p>100+</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
