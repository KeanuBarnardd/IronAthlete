import React from "react";
import { HeaderCard } from "../../Home/index";
import {
  burger3DSmall,
  salad3D,
  coffee3D,
  noodles3D,
  sushi3D,
  girlEating,
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
            <HeaderCard icon={"bi bi-truck"} title="Sushi" color="var(--accent-color-green)" darkColor={"var(--accent-color-green-dark)"} />
            <HeaderCard icon={"bi bi-box-seam"} title="Salads" color="var(--accent-color-purple)" darkColor={"var(--accent-color-purple-dark)"} />
            <HeaderCard
              icon={"bi bi-cup-straw"}
              title="Drinks"
              color="var(--accent-color-orange)"
            darkColor={"var(--accent-color-orange-dark)"} />
            <HeaderCard icon={"bi bi-egg-fried"} title="Noodles" color="var(--accent-color-blue)" darkColor={"var(--accent-color-blue-dark)"} />
          </div>
        </div>
        <div className="header__content girl__container col">
          <img src={girlEating}>
            
          </img>
          <div className="circle__container">
            <div className="circle one"></div>
            <div className="circle two"></div>
            <div className="circle three"></div>
            <div className="circle four"></div>
            <div className="circle five"></div>
            <div className="circle six"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
