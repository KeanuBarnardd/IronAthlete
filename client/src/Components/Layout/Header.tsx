import React from "react";
import { NavLink } from "react-router-dom";
import { RootState } from "../../Storage/Redux/store";
import cartItemModel from "./../../Interfaces/cartItemModel";
import { useSelector } from "react-redux";

let logo = require("../../Assets/Images/mango.png");

export default function Header() {
  const shoppingCartFromStore: cartItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <NavLink to={"/"} className="nav-link">
          <img src={logo} style={{ height: "40px" }} className="m-1" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0 w-100">
            <li className="nav-item ">
              <NavLink className="nav-link" to={"/"}>
                Home <span className="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/shoppingCart"}>
                <i className="bi bi-cart">
                  {shoppingCartFromStore?.length ? ` (${shoppingCartFromStore.length})` : ""}
                </i>
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Admin Panel
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <div className="d-flex" style={{ marginLeft: "auto" }}>
              <li className="nav-item ">
                <button
                  className="btn btn-success btn-outlined rounged-pill text-white mx-2"
                  style={{ border: "none", height: "40px", width: "100px" }}
                >
                  Logout
                </button>
              </li>
              <li className="nav-item text-white">
                <NavLink to={"/register"} className="nav-link">
                  Register
                </NavLink>
              </li>
              <li className="nav-item text-white">
                <NavLink
                  to={"/login"}
                  className="btn btn-success btn-outlined rounged-pill text-white mx-2"
                  style={{ border: "none", height: "40px", width: "100px" }}
                >
                  Login
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
