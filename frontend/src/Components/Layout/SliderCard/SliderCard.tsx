import React, { useState } from "react";
import { menuItemModel } from "../../../Interfaces";
import { useNavigate } from "react-router";
import "./SliderCard.scss";

const acaiBowl = require("../../../Assets/Images/MenuItems/acai_bowl.png");

const randomColourArray = [
  "var(--accent-color-green)",
  "var(--accent-color-blue)",
  "var(--accent-color-orange)",
  "var(--accent-color-purple)",
];

export default function SliderCard(props: menuItemModel) {

  const navigate = useNavigate();

  const color = randomColourArray[Math.floor(Math.random() * randomColourArray.length)];

  return (
    <div onClick={()=> navigate(`/menuitemDetails/${props.id}`)} className="slider__card-container" style={{ borderColor: `${color}` }}>
      <img src={props.image} alt="" />
      <div className="slider__card-content">
        <p className="slider__card-tag">
          <span style={{ backgroundColor: `${color}` }}>{props.category}</span>{" "}
        </p>
        <p className="slider__card-title">{props.name}</p>
        <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
          <h2>${props.price.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
}
