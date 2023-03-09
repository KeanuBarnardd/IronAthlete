import React from "react";
import { HeaderCard } from "../../Home/index";

import "./Header.scss";

export default function Header() {
  return (
    <header className="app__flex nav__padding">
      <div className="app__container-width app__container header__container">
        <div className="header__content col">
          <h1>We deliver amazing food for all gays.</h1>
          <h3>Because i love gay people no cap</h3>
          <p className="p-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, minima? Dicta dignissimos
            accusantium aut sed reiciendis odit, quia quaerat vel delectus totam officia temporibus.
            Dolor autem sint eos veniam illo.
          </p>

          <div className="header__card-grid">
            <HeaderCard />
            <HeaderCard />
            <HeaderCard />
            <HeaderCard />
          </div>
        </div>
        <div className="header__content col"></div>
      </div>
    </header>
  );
}
