import React from "react";
import { menuItemModel } from "../../../Interfaces";
import { useNavigate } from "react-router-dom";

export default function MenuItemCard(menuItem: menuItemModel) {
  const navigate = useNavigate();

  return (
    <div className="menu-item__container">
      <div
        onClick={() => navigate(`/menuItemsDetails/${menuItem.id}`)}
        className="img__container"
        style={{ backgroundImage: `url(${menuItem.image})` }}
      >
        <p>
          <span>{menuItem.specialTag}</span>
        </p>
      </div>
      <h2>{menuItem.name}</h2>
      <p>
        <span>{menuItem.category}</span>
      </p>
      <p className="p-text">{menuItem.description}</p>
    </div>
  );
}
