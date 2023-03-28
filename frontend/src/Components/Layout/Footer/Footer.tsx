import React from "react";
import "./Footer.scss";
import { images } from "../../../Assets/Images";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="app__flex" style={{ backgroundColor: "var(--black-color)" }}>
      <footer className="app__container-width">
        <div className="col">
          <div className="row">
            <img src={images.ironAtheleteLogo} alt="" />
            <h1>IronAthelete</h1>
          </div>
          <p className="p-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at eveniet aperiam ad
            minima laboriosam adipisci, esse velit ipsam iusto aspernatur neque sapiente iste atque
            voluptatibus possimus odit totam praesentium.
          </p>
          <div className="row">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
          </div>
          <p className="p-text">Copyright iron@athelete made by Keanu Barnard</p>
        </div>
        <div className="col" style={{ gap: "5px" }}>
          <h1>Quick Links</h1>
          <NavLink className={"footer__navlink"} to="/">
            Home
          </NavLink>
          <NavLink className={"footer__navlink"} to="/store">
            Shop
          </NavLink>
     
          <NavLink className={"footer__navlink"} to="/contact">
            Contact
          </NavLink>
        </div>
      
        <div className="col" style={{ gap: "5px" }}>
          <h1>Orders</h1>
          <NavLink className={"footer__navlink"} to="/menuItem/menuitemlist">
            Products
          </NavLink>
          <NavLink className={"footer__navlink"} to="/order/myorders">
            Orders
          </NavLink>
          <NavLink className={"footer__navlink"} to="/order/allOrders">
            All Orders
          </NavLink>
        </div>

        <div className="col">
          <h1>Get our newsletter</h1>
          <p className="p-text" style={{marginTop:"5px"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis accusamus temporibus et odio harum dolorem velit, quam fugit consectetur itaque natus? Architecto aperiam nemo libe
          </p>
          <div className="row join__banner-input-container">
            <input placeholder="Enter your email" type="text" />
            <button className="btn">Join Now</button>
          </div>
          <p style={{color:"var(--grey-400)"}} className="p-text">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
