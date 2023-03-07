import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MobileNav.scss";

let logo = require("../../../Assets/Images/mango.png");

export default function MobileNav() {
  const [toggleNav, setToggleNav] = useState(true);
  const [toggleOrders, setToggleOrders] = useState(false);

  return (
    <div className="mobile__nav-content app__container-width">
      <div className="mobile__nav-top">
        <NavLink className="nav-link home-toggle" aria-current="page" to="/">
          <img src={logo} style={{ height: "50px", marginRight: "10px" }} alt="FreshDirect Logo" />
        </NavLink>
        <button
          onClick={() => {
            toggleNav ? setToggleNav(false) : setToggleNav(true);
          }}
          className="navbar-toggler"
          type="button"
        >
          <i className="bi bi-list"></i>
        </button>
      </div>
      <div className={`mobile__nav-dropdown ${toggleNav ? "active" : ""}`}>
        <NavLink className="mobile__nav-link" to={"/"}>
          Home
        </NavLink>
        <li
          onClick={() => {
            toggleOrders ? setToggleOrders(false) : setToggleOrders(true);
          }}
          className="mobile__nav-link"
        >
          Orders
        </li>
        <div className={`orders__dropdown-container ${toggleOrders ? "active" : ""}`}>
          <NavLink className={"mobile__nav-link"} to={"/menuItem/menuitemList"}>
            Edit Menu
          </NavLink>
          <NavLink className={"mobile__nav-link"} to={"order/myorders"}>
            My Orders
          </NavLink>
          <NavLink className={"mobile__nav-link"} to={"order/allOrders"}>
            All Orders
          </NavLink>
        </div>

        <NavLink className="mobile__nav-link" to={"/shoppingCart"}>
          Shopping Cart <span>3 Items</span>
        </NavLink>
        
      </div>
      <div className="mobile__nav-bottom">
          <NavLink className="nav-link btn btn-outline" to="/register">
            Register
          </NavLink>

          <NavLink className="nav-link btn btn-rainbow" to="/login">
            Login
          </NavLink>
        </div>
    </div>
  );
}
