import React from "react";
import { burger3DSmall } from "../../../Assets/Images/images";
import "./SliderCard.scss";

export default function SliderCard() {
  return (
    <div className="slider__card-container" style={{ backgroundImage: `url(${burger3DSmall})` }}>
      Hello this is keanu
    </div>
  );
}
