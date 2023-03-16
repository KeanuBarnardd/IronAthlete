import React from "react";

// Functionality
import { menuItemModel } from "../../../Interfaces";
import { useNavigate } from "react-router-dom";

// Styling
import "./MenuItemCard.scss";

export default function MenuItemCard(menuItem: menuItemModel) {
  const navigate = useNavigate();



  return (
    <div className="menu-item__container">
      <div
        onClick={() => navigate(`/menuItemDetails/${menuItem.id}`)}
        className="img__container"
        style={{ backgroundImage: `url(${menuItem.image})` }}
      >
        {menuItem.specialTag ? (
          <p>
            <span>
              <i className="bi bi-star-fill"></i>
              {menuItem.specialTag}
            </span>
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className="menu-item__content">
        <h2>{menuItem.name}</h2>
        <div className="row">
          <p>
            <span>{menuItem.category}</span>
          </p>
          <p>
            <span>{menuItem.category}</span>
          </p>
        </div>

        <p className="p-text">{menuItem.description}</p>
        <div className="row" style={{ alignItems: "center", justifyContent: "space-between" }}>
          <button className="btn btn-menu-item">Add to cart</button>
          <h2 className="menu-item-price">${menuItem.price.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
}
