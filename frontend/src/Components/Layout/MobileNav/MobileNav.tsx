import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MobileNav.scss";
import { SD_Roles } from "../../../Utility/SD";
import { userModel } from "./../../../Interfaces/index";
import { useNavigate } from "react-router";

interface Props {
  userData: userModel;
  shoppingCartLength: number;
  handleLogout: (params: any) => void;
}

export default function MobileNav(props: Props) {
  const [toggleOrders, setToggleOrders] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="app__flex mobile__nav-container">
      <div className="col mobile__nav-content active">
        <NavLink className="mobile__nav-link" aria-current="page" to="/">
          Home
        </NavLink>
        <NavLink className="mobile__nav-link" to="/store">
          Shop
        </NavLink>
        {props.userData.role == SD_Roles.ADMIN ? (
          <button
            style={{ display: "flex", gap: "15px" }}
            onClick={() => {
              toggleOrders ? setToggleOrders(false) : setToggleOrders(true);
            }}
            className="mobile__nav-link dropdown__btn"
          >
            Orders <i className="bi bi-chevron-compact-down"></i>
          </button>
        ) : (
          <NavLink to="/login" className="nav-link">
            Orders
          </NavLink>
        )}
        <div className={`dropdown__container ${toggleOrders ? "active" : ""}`}>
          <li className="mobile__nav-link" onClick={() => navigate("menuItem/menuitemlist")}>
            Products
          </li>
          <li className="mobile__nav-link" onClick={() => navigate("order/myorders")}>
            My Orders
          </li>
          <li className="mobile__nav-link" onClick={() => navigate("order/allOrders")}>
            All Orders
          </li>
        </div>
        <NavLink className="mobile__nav-link" to="/store">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

// <div className="mobile__nav-content app__container-width">
//   <div className="mobile__nav-top">
//     <NavLink className="nav-link home-toggle" aria-current="page" to="/"></NavLink>
//     <button
//       onClick={() => {
//         toggleNav ? setToggleNav(false) : setToggleNav(true);
//       }}
//       className="navbar-toggler"
//       type="button"
//     >
//       <i className="bi bi-list"></i>
//     </button>
//   </div>
//   <div className={`mobile__nav-dropdown ${toggleNav ? "active" : ""}`}>
//     <NavLink className="mobile__nav-link" to={"/"}>
//       Home
//     </NavLink>

//     <li
//       onClick={() => {
//         toggleOrders ? setToggleOrders(false) : setToggleOrders(true);
//       }}
//       className="mobile__nav-link"
//     >
//       Orders
//     </li>

//     <div className={`orders__dropdown-container ${toggleOrders ? "active" : ""}`}>
//       <NavLink className={"mobile__nav-link"} to={"/menuItem/menuitemList"}>
//         Edit Menu
//       </NavLink>
//       <NavLink className={"mobile__nav-link"} to={"order/myorders"}>
//         My Orders
//       </NavLink>
//       <NavLink className={"mobile__nav-link"} to={"order/allOrders"}>
//         All Orders
//       </NavLink>
//     </div>
//     <NavLink className="mobile__nav-link" to={"/shoppingCart"}>
//       Shopping Cart <span>3 Items</span>
//     </NavLink>
//   </div>
//   <div className={`mobile__nav-bottom ${toggleNav ? "active" : ""}`}>
//     {!props.userId && (
//       <>
//         <NavLink className="nav-link btn btn-outline" to="/register">
//           Register
//         </NavLink>

//         <NavLink className="nav-link btn btn-rainbow" to="/login">
//           Login
//         </NavLink>
//       </>
//     )}
//     {props.userId && (
//       <div className="logged__in-container-mobile">
//         <p>Welcome, {props.userName}</p>
//         <button className="btn btn-rainbow" onClick={props.handleLogout}>
//           Logout
//         </button>
//       </div>
//     )}
//   </div>
// </div>
