import React from "react";
import { images } from "../../../Assets/Images";
import { menuItemModel } from "../../../Interfaces";
import "./ProductCard.scss";

export default function ProductCard(props: menuItemModel) {
  return (
    <div className="product__card-container">
      <div
        className="product__img-container"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <p>
          <span>{props.specialTag}</span>
        </p>
      </div>
      <div className="product__card-content">
        <p className="product__tag">{props.category}</p>
        <div className="row">
          <p className="product__name">{props.name}</p>
          <p className="product__price">${props.price.toFixed(2)}</p>
        </div>

        <p className="p-text">
         {props.description}
        </p>
        <button  className="btn btn__accent">Add to cart</button>
      </div>
    </div>
  );
}
