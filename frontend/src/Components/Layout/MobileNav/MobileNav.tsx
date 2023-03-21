import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MobileNav.scss";

interface Props {
  userId: string;
  userName: string | undefined;
  shoppingCartLength: number;
  handleLogout: (params: any) => void;
}

export default function MobileNav(props: Props) {
  const [toggleNav, setToggleNav] = useState(true);
  const [toggleOrders, setToggleOrders] = useState(false);

  return (
    <div className="mobile__nav-content app__container-width">
      <div className="mobile__nav-top">
        <NavLink className="nav-link home-toggle" aria-current="page" to="/"></NavLink>
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
      <div className={`mobile__nav-bottom ${toggleNav ? "active" : ""}`}>
        {!props.userId && (
          <>
            <NavLink className="nav-link btn btn-outline" to="/register">
              Register
            </NavLink>

            <NavLink className="nav-link btn btn-rainbow" to="/login">
              Login
            </NavLink>
          </>
        )}
        {props.userId && (
          <div className="logged__in-container-mobile">
            <p>Welcome, {props.userName}</p>
            <button className="btn btn-rainbow" onClick={props.handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
