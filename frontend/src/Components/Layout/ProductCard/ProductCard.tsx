import React, { useState } from "react";
import { images } from "../../../Assets/Images";
import { apiResponse, menuItemModel } from "../../../Interfaces";

import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";
import { useUpdateShoppingCartMutation } from "../../../Apis/shoppingCartApi";
import { toastNotify } from "../../../Helper";
import userModel from "./../../../Interfaces/userModel";
import { useSelector } from "react-redux";
import { RootState } from "../../../Storage/Redux/store";

export default function ProductCard(props: menuItemModel) {
  const navigate = useNavigate();

  const [isAddingToCart, setIsAddingCart] = useState<boolean>(false);
  const [updateShoppingCart] = useUpdateShoppingCartMutation();
  const userData: userModel = useSelector((state: RootState) => state.userAuthStore);

  const handleAddToCart = async (menuItemId: number) => {
    if (!userData.id) {
      navigate("/login");
      return;
    }
    setIsAddingCart(true);

    const response: apiResponse = await updateShoppingCart({
      menuItemId: menuItemId,
      updateQuantityBy: 1,
      userId: userData.id,
    });

    if (response.data && response.data.isSuccess) {
      toastNotify("Item added to cart successfully! ");
    }

    setIsAddingCart(false);
  };

  return (
    <div className="product__card-container">
      <div
        onClick={() => navigate(`/menuItemDetails/${props.id}`)}
        className="product__img-container"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <p>
          {props.specialTag !== null && props.specialTag !== "" ? <span>{props.specialTag}</span> : <></>}
         
        </p>
      </div>
      <div className="product__card-content">
        <p className="product__tag">{props.category}</p>
        <div className="row">
          <p className="product__name">{props.name}</p>
          <p className="product__price">${props.price.toFixed(2)}</p>
        </div>

        <p className="p-text">{props.description}</p>
        <button onClick={() => handleAddToCart(props.id)} className="btn btn__accent">
          Add to cart
        </button>
      </div>
    </div>
  );
}
