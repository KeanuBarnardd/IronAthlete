import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { cartItemModel, userModel } from "../../../Interfaces";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../Storage/Redux/store";
import { emptyUserState, setLoggedInUser } from "../../../Storage/Redux/userAuthSlice";
import { SD_Roles } from "../../../Utility/SD";
import "./Navbar.scss";
import "../../../App.scss";
let logo = require("../../../Assets/Images/mango.png");

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <div className="navbar__container app__flex">
      <nav className="app__container-width">
        {/* --------Mobile Nav------ */}
        <NavLink className="nav-link home-toggle" aria-current="page" to="/">
          <img src={logo} style={{ height: "50px", marginRight: "10px" }} alt="FreshDirect Logo" />
        </NavLink>
        <button className="navbar-toggler" type="button">
          <i className="bi bi-list"></i>
        </button>
        {/* --------Mobile Nav------ */}
        <div className="nav__content-left">
          <NavLink className="nav-link" aria-current="page" to="/">
            <img
              src={logo}
              style={{ height: "50px", marginRight: "10px" }}
              alt="FreshDirect Logo"
            />
          </NavLink>
          <NavLink className="nav-link" aria-current="page" to="/">
            Home
          </NavLink>

          {userData.role == SD_Roles.ADMIN ? (
            <li className=" dropdown">
              {/* <li onClick={() => navigate("menuItem/menuitemlist")}>Menu Item</li>
              <li onClick={() => navigate("order/myorders")}>My Orders</li>
              <li onClick={() => navigate("order/allOrders")}>All Orders</li> */}
            </li>
          ) : (
            <NavLink className="nav-link" aria-current="page" to="/order/myorders">
              Orders
            </NavLink>
          )}

          <NavLink className="nav-link" aria-current="page" to="/shoppingCart">
            <i className="bi bi-cart cart"></i> {userData.id && `(${shoppingCartFromStore.length})`}
          </NavLink>
        </div>

        <div className="nav__login-container">
          {userData.id && (
            <div className="logged__in-container">
              <p>Welcome, {userData.fullName}</p>
              <button className="btn btn-rainbow" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}

          {!userData.id && (
            <>
              <NavLink className="nav-link btn btn-outline" to="/register">
                Register
              </NavLink>

              <NavLink className="nav-link btn btn-rainbow" to="/login">
                Login
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
