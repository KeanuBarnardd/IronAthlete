import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MobileNav.scss";
import { SD_Roles } from "../../../Utility/SD";
import { userModel } from "./../../../Interfaces/index";
import { useNavigate } from "react-router";

interface Props {
  userData: userModel;
  shoppingCartLength: number;
  handleLogout: () => void;
  setToggleNav: (params: boolean) => void;
}

export default function MobileNav(props: Props) {
  const [toggleOrders, setToggleOrders] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="app__flex mobile__nav-container">
      <div className="col mobile__nav-content app__container-width">
        <NavLink
          onClick={() => props.setToggleNav(false)}
          className="mobile__nav-link"
          aria-current="page"
          to="/"
        >
          Home
        </NavLink>
        <NavLink onClick={() => props.setToggleNav(false)} className="mobile__nav-link" to="/store">
          Shop
        </NavLink>
        {props.userData.role == SD_Roles.ADMIN ? (
          <button
            style={{ display: "flex", gap: "15px" }}
            onClick={() => {
              toggleOrders ? setToggleOrders(false) : setToggleOrders(true);
            }}
            className="mobile__nav-link"
          >
            Orders <i className="bi bi-chevron-compact-down"></i>
          </button>
        ) : (
          <NavLink to="/login" className="mobile__nav-link">
            Orders
          </NavLink>
        )}
        <div className={`dropdown__container ${toggleOrders ? "active" : ""}`}>
          <li
            className="mobile__nav-link"
            onClick={() => {
              navigate("menuItem/menuitemlist");
              props.setToggleNav(false);
            }}
          >
            Products
          </li>
          <li
            className="mobile__nav-link"
            onClick={() => {
              navigate("order/myorders");
              props.setToggleNav(false);
            }}
          >
            My Orders
          </li>
          <li
            className="mobile__nav-link"
            onClick={() => {
              navigate("order/allOrders");
              props.setToggleNav(false);
            }}
          >
            All Orders
          </li>
        </div>
        <NavLink onClick={() => props.setToggleNav(false)} className="mobile__nav-link" to="/store">
          Contact
        </NavLink>

        <div className="row mobile__nav-bottom-container ">
          {!props.userData.id && (
            <div className="row">
              <NavLink
                onClick={() => props.setToggleNav(false)}
                className=" btn btn__outline-dark"
                to="/register"
              >
                Register
              </NavLink>

              <NavLink
                onClick={() => props.setToggleNav(false)}
                className=" btn btn__accent"
                to="/login"
              >
                Login
              </NavLink>
            </div>
          )}
          {props.userData.id && (
            <div className="row">
              <p>Welcome, {props.userData.email}</p>
              <button
                className="btn btn__outline-dark"
                onClick={() => {
                  props.handleLogout();
                  props.setToggleNav(false);
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

