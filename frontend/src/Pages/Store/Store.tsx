import React from "react";
import { girlEatingPink } from "../../Assets/Images/images";
import "./Store.scss";

export default function Shop() {
  return (
    <div className="app__flex app__container">
      <div className="app__container-width ">
        <div className="shop__banner-container">
          <h1>Grab upto 50% off on selected products</h1>
          <button className="btn btn-grey">Buy Now</button>
          <img src={girlEatingPink} alt="" />
        </div>
        <div className="search__container row">
          <input placeholder="Search product name here..." type="text" name="" id=""></input>
          <div className="filter__container row">
            <button className="active">Breakfast</button>
            <button>Dinner</button>
            <button>Dessert</button>
            <button>Snacks</button>
            <button>Drink</button>
          </div>
          <select name="" id="">
            <option value="">Name A-Z</option>
          </select>
        </div>
      </div>
    </div>
  );
}
