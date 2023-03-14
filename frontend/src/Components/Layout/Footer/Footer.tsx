import React from "react";
import { logo } from "../../../Assets/Images/images";
import "./Footer.scss";

import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className="app__flex" style={{ backgroundColor: "var(--grey-000)" }}>
      <footer className="app__container-width">
        <div className="col">
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="col footer__socials-container">
              <div className="row">
                <img src={logo} alt="" />
                <h1 style={{ color: "var(--accent-color-orange-dark)" }}>Fresh Direct</h1>
              </div>
              <p className="p-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquid vel
                incidunt asperiores, voluptatum vitae consequuntur doloremque voluptates nobis fugit
              </p>
              <div className="row ">
                <a href="">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
              <p className="p-text">@2022 Copyright ProCleaners</p>
            </div>
            <div className="col footer__links-container">
              <h2 style={{ color: "var(--accent-color-blue-dark)" }}>Customer</h2>
              <NavLink className={"footer__links"} to="/">
                Home
              </NavLink>
              <NavLink className={"footer__links"} to="/">
                Shop now
              </NavLink>
              <NavLink className={"footer__links"} to="/">
                Login
              </NavLink>
              <NavLink className={"footer__links"} to="/">
                Register
              </NavLink>
            </div>
            <div className="col footer__links-container">
              <h2>Admin Links</h2>
              <NavLink className={"footer__links"} to="/">
                Orders
              </NavLink>
              <NavLink className={"footer__links"} to="/">
                My Orders
              </NavLink>
              <NavLink className={"footer__links"} to="/">
                All Orders
              </NavLink>
              <NavLink className={"footer__links"} to="/">
                Menu Items
              </NavLink>
            </div>
            <div className="col" style={{ maxWidth: "300px" }}>
              <h2>Get in Touch</h2>
            
              <ul className="p-text" style={{ listStyle: "none", color:"var(--grey-700)",fontWeight:"bold", marginBottom:"5px" }}>
                <li>Cleaning 7 days per week</li>
                <li>8:00AM - 8:00PM</li>
                <li>info@proCleaners.com.au</li>
                <li>+432 846 256</li>
              </ul>
              <p className="p-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, sit.
              </p>
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
