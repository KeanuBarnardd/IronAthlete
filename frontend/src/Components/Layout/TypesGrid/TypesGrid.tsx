import React from "react";
import { images } from "../../../Assets/Images";
export default function TypesGrid() {
  return (
    <div className="app__flex">
      <div className="types__grid-container app__container-width" style={{ marginBottom: "600px" }}>
        <div className="grid__item-container" style={{ backgroundImage: `url(${images.types_1})` }}>
          <p>
            <span>Clothing</span>
          </p>
        </div>
        <div className="grid__item-container" style={{ backgroundImage: `url(${images.types_2})` }}>
          <p>
            <span>Boxing</span>
          </p>
        </div>
        <div className="grid__item-container" style={{ backgroundImage: `url(${images.types_3})` }}>
          <p>
            <span>Gym</span>
          </p>
        </div>
        <div className="grid__item-container" style={{ backgroundImage: `url(${images.types_4})` }}>
          <p>
            <span>Golf</span>
          </p>
        </div>
        <div className="grid__item-container" style={{ backgroundImage: `url(${images.types_5})` }}>
          <p>
            <span>Footwear</span>
          </p>
        </div>
      </div>
    </div>
  );
}
