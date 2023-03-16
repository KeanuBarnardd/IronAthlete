import React from "react";
import { useParams } from "react-router-dom";
import { useGetMenuItemByIdQuery, useGetMenuItemsQuery } from "../../Apis/menuItemApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUpdateShoppingCartMutation } from "../../Apis/shoppingCartApi";
import { MainLoader, MiniLoader } from "../../Components/Page/Common";
import { apiResponse, userModel } from "../../Interfaces";
import { toastNotify } from "../../Helper";
import { RootState } from "../../Storage/Redux/store";
import { useSelector } from "react-redux";
import { ItemSlider } from "../../Components/Layout";
import "./MenuItemDetails.scss";

function MenuItemDetails() {
  const { menuItemId } = useParams();
  const { data, isLoading } = useGetMenuItemByIdQuery(menuItemId);


  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);
  const [updateShoppingCart] = useUpdateShoppingCartMutation();
  const userData: userModel = useSelector((state: RootState) => state.userAuthStore);

  const handleQuantity = (counter: number) => {
    let newQuantity = quantity + counter;
    if (newQuantity == 0) {
      newQuantity = 1;
    }
    setQuantity(newQuantity);
    return;
  };

  const handleAddToCart = async (menuItemId: number) => {
    if (!userData.id) {
      navigate("/login");
      return;
    }
    setIsAddingToCart(true);
    const response: apiResponse = await updateShoppingCart({
      menuItemId: menuItemId,
      updateQuantityBy: quantity,
      userId: userData.id,
    });

    if (response.data && response.data.isSuccess) {
      toastNotify("Item added to cart successfully!");
    }
    setIsAddingToCart(false);
  };

  return (
    <div className="app__flex">
      {!isLoading ? (
        <div className="app__container app__container-width">
                 
          <div className="row">
          
            <div className="col">
              <img src={data.result.image} alt="" />
              <div className="col">
                <h2>You may also like</h2>
                <div className="suggestions__container">

                </div>
              </div>
            </div>

            <div className="col">
              <h1>{data.result.name}</h1>
              <p className="p-text">{data.result?.description}</p>
              <hr />
              <h1 className="price">{data.result?.price}</h1>
              <div className="add__remove-btn">
                <button className="remove">-</button>1<button className="add">+</button>
              </div>
              <div className="row">
                <button className="btn btn-grey">Buy Now</button>
                <button className="btn btn-outline">Add to cart</button>
              </div>
              <div className="col">
                <div className="row">
                  <i></i>
                  <div className="col">
                    <h2>Free delivery</h2>
                    <p className="p-text">Enter your postal code for Delivery Availability</p>
                  </div>
                </div>
                <div className="row">
                  <i></i>
                  <div className="col">
                    <h2>Unsatisfied with food? </h2>
                    <p className="p-text">We offer a 30 day back gurantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Fetching Data...</div>
      )}
    </div>
  );
}

export default MenuItemDetails;
