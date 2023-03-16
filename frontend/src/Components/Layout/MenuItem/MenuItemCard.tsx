import React, { useState } from "react";

// Functionality
import { apiResponse, menuItemModel, userModel } from "../../../Interfaces";
import { useNavigate } from "react-router-dom";
import { useUpdateShoppingCartMutation } from "../../../Apis/shoppingCartApi";
import { MiniLoader } from "../../Page/Common";
import { RootState } from "../../../Storage/Redux/store";
import { toastNotify } from "../../../Helper";
import { useSelector } from "react-redux";

// Styling
import "./MenuItemCard.scss";

export default function MenuItemCard(menuItem: menuItemModel) {
  const navigate = useNavigate();
  const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);
  const [updateShoppingCart] = useUpdateShoppingCartMutation();
  const userData: userModel = useSelector((state: RootState) => state.userAuthStore);

  const handleAddToCart = async (menuItemId: number) => {
    if (!userData.id) {
      navigate("/login");
      return;
    }
    setIsAddingToCart(true);

    const response: apiResponse = await updateShoppingCart({
      menuItemId: menuItemId,
      updateQuantityBy: 1,
      userId: userData.id,
    });

    if (response.data && response.data.isSuccess) {
      toastNotify("Item added to cart successfully!");
    }
    setIsAddingToCart(false);
  };

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
        </div>

        <p className="p-text">{menuItem.description}</p>
        <div className="row" style={{ alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={() => handleAddToCart(menuItem.id)} className="btn btn-menu-item">
            Add to cart
          </button>
          <h2 className="menu-item-price">${menuItem.price.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
}
