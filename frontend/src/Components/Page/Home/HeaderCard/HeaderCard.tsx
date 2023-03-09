import React from "react";
import "./HeaderCard.scss";

interface Props {
  title: string;
  img: any;
  color: string;
}

export default function HeaderCard(props: Props) {
  return (
    <div className="headercard__container">
      <div className="img__container" style={{ backgroundColor: `${props.color}` }}>
        <img src={props.img} alt="" />
      </div>
      <p>{props.title}</p>
    </div>
  );
}
