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
            <HeaderCard img={sushi3D} title="Sushi" color="var(--accent-color-green)" />
            <HeaderCard img={salad3D} title="Salads" color="var(--accent-color-purple)" />
            <HeaderCard img={coffee3D} title="Drinks" color="var(--accent-color-orange)" />
            <HeaderCard img={noodles3D} title="Noodles" color="var(--accent-color-blue)" />
          </div>
        </div>
        <div className="header__content burger__container col">
          <img src={burger3DSmall} />
          <div className="stats__container">
            <div className="stat__container one ">
              <i className="bi bi-emoji-laughing"></i>
              <div className="col">
                <p>Happy Cutsomers</p>
                <h3>5067</h3>
              </div>
            </div>
            <div className="stat__container two">
              <i className="bi bi-truck"></i>
              <div className="col">
                <p>Meals Delivered</p>
                <h3>600,000+</h3>
              </div>
            </div>
            <div className="stat__container three">
              <i className="bi bi-egg-fried"></i>
              <div className="col">
                <p>Meals cooked</p>
                <h3>990,200+</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
