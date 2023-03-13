import React from "react";
import { logo } from "../../../Assets/Images/images";

import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className="app__flex" style={{ backgroundColor: "var(--grey-000)" }}>
      <footer className="app__container-width">
        <div className="col">
          <h1>Money does'nt grow on trees but it can plant them</h1>
          <div className="row">
            <div className="col">
              <div className="row">
                <img src={logo} alt="" />
                <h1>Fresh Direct</h1>
              </div>
              <div className="row">
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
              <button className="btn btn-rainbow">Shop now</button>
            </div>
            <div className="col">
              <NavLink to="/">Careers</NavLink>
              <NavLink to="/">Careers</NavLink>
              <NavLink to="/">Careers</NavLink>
              <NavLink to="/">Careers</NavLink>
            </div>
            <div className="col">
              <h2>Hello im bob the builder</h2>
              <p>Im dead set the gayest cunt</p>
              <p className="p-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquid vel
                incidunt asperiores, voluptatum vitae consequuntur doloremque voluptates nobis fugit
                illum dignissimos recusandae enim porro non accusantium eos totam. Numquam inventore
                reiciendis itaque at dolorem doloribus ex laboriosam consequatur mollitia.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
