import React from "react";
import "./HeaderCard.scss";

interface Props {
  title: string;
  icon: string;
  color: string;
  darkColor: string;
}

export default function HeaderCard(props: Props) {
  return (
    <div className="headercard__container">
      <div className="img__container" style={{ backgroundColor: `${props.color}`, color: `${props.darkColor}` }}>
        <i className={`${props.icon}`}></i>
      </div>
      <p>{props.title}</p>
    </div>
  );
}
