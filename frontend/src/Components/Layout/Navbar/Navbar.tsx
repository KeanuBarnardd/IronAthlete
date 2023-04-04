import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MobileNav } from "../index";

import { cartItemModel, userModel } from "../../../Interfaces";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../Storage/Redux/store";
import { emptyUserState, setLoggedInUser } from "../../../Storage/Redux/userAuthSlice";
import { SD_Roles } from "../../../Utility/SD";
import "./Navbar.scss";
import "../../../App.scss";
import { images } from "../../../Assets/Images/index";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [toggleNav, setToggleNav] = useState(false);

  const shoppingCartFromStore: cartItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );

  const userData: userModel = useSelector((state: RootState) => state.userAuthStore);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setLoggedInUser({ ...emptyUserState }));
    navigate("/");
  };

  return (
    <div className="nav__container-parent">
      <div className="nav__container-top app__flex">
        <div className="nav__content-top app__container-width">
          <div className="row">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
          </div>
          <div className="nav__login-container">
            {userData.id && (
              <div className="nav__container-login">
                <p>Welcome, {userData.fullName}</p>
                <button className="btn btn__outline-white small" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}

            {!userData.id && (
              <div className="nav__container-login">
                <NavLink className="btn btn__outline-white" to="/login">
                  Login
                </NavLink>
                <NavLink className="btn btn__accent" to="/register">
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
      <nav className="app__flex">
        <div className="nav__content-bottom app__container-width">
          <button
            onClick={() => {
              toggleNav ? setToggleNav(false) : setToggleNav(true);
            }}
            className="mobile__menu-btn"
          >
            <i className="bi bi-list"></i>
          </button>
          <div className="row">
            <NavLink
              style={{ display: "flex", alignItems: "center", textDecoration: "none", gap: "5px" }}
              to="/"
            >
              <img src={images.ironAtheleteLogo} alt="Iron Athelete Logo" />
              <h2>IronAthlete</h2>
            </NavLink>
          </div>
          <div className=" nav-link__container">
            <NavLink className="nav-link" aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/store">
              Shop
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>

            {userData.role == SD_Roles.ADMIN ? (
              <button
                style={{ display: "flex", gap: "15px" }}
                onClick={() => {
                  toggleNav ? setToggleNav(false) : setToggleNav(true);
                }}
                className="nav-link dropdown__btn"
              >
                Orders <i className="bi bi-chevron-compact-down"></i>
                <div className={`dropdown__container ${toggleNav ? "active" : ""}`}>
                  <li onClick={() => navigate("menuItem/menuitemlist")}>Products</li>
                  <li onClick={() => navigate("order/myorders")}>My Orders</li>
                  <li onClick={() => navigate("order/allOrders")}>All Orders</li>
                </div>
              </button>
            ) : (
              <>
                {userData.role == SD_Roles.CUTOMER ? (
                  <NavLink to="/order/myOrders" className="nav-link">
                    Orders
                  </NavLink>
                ) : (
                  <NavLink to="/login" className="nav-link">
                    Orders
                  </NavLink>
                )}
              </>
            )}
          </div>

          {userData.role == SD_Roles.CUTOMER || userData.role == SD_Roles.ADMIN ? (
            <NavLink className={"cart__btn"} aria-current="page" to="/shoppingCart">
              <i className="bi bi-cart cart"></i>{" "}
              {userData.id && <span>{shoppingCartFromStore.length}</span>}
            </NavLink>
          ) : (
            <NavLink className={"cart__btn"} aria-current="page" to="/login">
              <i className="bi bi-cart cart"></i>{" "}
              {userData.id && <span>{shoppingCartFromStore.length}</span>}
            </NavLink>
          )}
        </div>
      </nav>

      <MobileNav
        userData={userData}
        shoppingCartLength={shoppingCartFromStore.length}
        handleLogout={handleLogout}
        setToggleNav={setToggleNav}
        toggleNav={toggleNav}
      />
    </div>
  );
}

export default Navbar;
