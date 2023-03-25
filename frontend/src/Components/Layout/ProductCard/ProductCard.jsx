import React from "react";
import { images } from "../../../Assets/Images";
import "./ProductCard.scss";

export default function ProductCard() {
  return (
    <div className="product__card-container">
      <div
        className="product__img-container"
        style={{ backgroundImage: `url(${images.cat_img_2})` }}
      >
        <p>
          <span>10% OFF</span>
        </p>
      </div>
      <div className="product__card-content">
        <p className="product__tag">Gym Equipment</p>
        <div className="row">
          <p className="product__name">15kg Dumbells</p>
          <p className="product__price">$29.90</p>
        </div>

        <p className="p-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, adipisci aspernatur
          mollitia ipsam ex voluptatum atque earum dolor perspiciatis at.
        </p>
        <button className="btn btn__accent">Add to cart</button>
      </div>
    </div>
  );
}
