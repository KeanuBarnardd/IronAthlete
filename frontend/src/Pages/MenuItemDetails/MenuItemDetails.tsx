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
import { Suggestions } from "../../Components/Layout";
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
        <div className="app__container-width menu__details-container">
          <div className="row" style={{ gap: "50px" }}>
            <div className="col row image__container">
              <img className="main__img" src={data.result.image} alt="" />
              <div className="col">
                <h2>You may also like</h2>
                <Suggestions removeItem={data.result.id} />
              </div>
            </div>

            <div className="col menu__details-content " style={{ maxWidth: "700px" }}>
              <h1 className="head-text">{data.result.name}</h1>
              <p className="p-text">{data.result?.description}</p>
              <div className="row" style={{ marginBottom: "10px", marginTop: "10px", gap: "10px" }}>
                <p className="specials__tag">
                  <span>{data.result.category}</span>
                </p>
                {data.result.specialTag && (
                  <p className="specials__tag">
                    <span>{data.result.specialTag}</span>
                  </p>
                )}
              </div>
              <hr />
              <div
                className="row"
                style={{
                  alignItems: "center",
                  marginBottom: "20px",
                  marginTop: "20px",
                  gap: "20px",
                }}
              >
                <h1 className="price">${data.result?.price.toFixed(2)}</h1>
                <div className="add__remove-btn">
                  <button
                    onClick={() => {
                      handleQuantity(-1);
                    }}
                    className="remove"
                  >
                    -
                  </button>
                  {quantity}
                  <button
                    onClick={() => {
                      handleQuantity(+1);
                    }}
                    className="add"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="row">
                <button className="btn btn-grey" onClick={() => handleAddToCart(data.result?.id)}>
                  Buy Now
                </button>
                <button className="btn btn-outline" onClick={() => navigate(-1)}>
                  Return
                </button>
              </div>
              <div className="col delivery__details-container" >
                <div className="row">
                <i className="bi bi-truck"></i>
                  <div className="col">
                    <h2>Free delivery</h2>
                    <p className="p-text">Enter your postal code for Delivery Availability</p>
                  </div>
                </div>
                <div className="row col-two" style={{alignItems:"center", gap:"10px"}}>
                <i className="bi bi-box2-heart"></i>
                  <div className="col ">
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
