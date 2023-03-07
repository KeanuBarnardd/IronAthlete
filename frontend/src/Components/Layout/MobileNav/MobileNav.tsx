import React from "react";
import { NavLink } from "react-router-dom";
import "./MobileNav.scss";

let logo = require("../../../Assets/Images/mango.png");

export default function MobileNav() {
  return (
    <div className="mobile__nav-content app__container-width">
      <div className="mobile__nav-top">
        <NavLink className="nav-link home-toggle" aria-current="page" to="/">
          <img src={logo} style={{ height: "50px", marginRight: "10px" }} alt="FreshDirect Logo" />
        </NavLink>
        <button className="navbar-toggler" type="button">
          <i className="bi bi-list"></i>
        </button>
      </div>
      <div className="mobile__nav-dropdown">
        
      </div>
    </div>
  );
}
