import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useGetMenuItemsByIdQuery } from "../Apis/menuItemsApi";
import { useNavigate } from "react-router-dom";
import { useUpdateShoppingCartMutation } from "../Apis/shoppingCartApi";
import { MainLoader } from "../Components/Layout/Page/Common";

// USER ADMIN ID - a11c959d-bc03-4d89-90bf-98ae62bc292b

export default function MenuItemDetails() {
  const { menuItemId } = useParams();
  const { data, isLoading } = useGetMenuItemsByIdQuery(menuItemId);
  const navigate = useNavigate();

  const [quantity, setQuanity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);
  const [updateShoppingCart] = useUpdateShoppingCartMutation();

  const handleQuantity = (counter: number) => {
    let newQuanity = quantity + counter;
    if (newQuanity == 0) {
      newQuanity = 1;
    }
    setQuanity(newQuanity);
    return;
  };

  const handleAddCart = async (menuItemId: number) => {
    setIsAddingToCart(true);
    const response = await updateShoppingCart({
      menuItemId: menuItemId,
      updateQuantityBy: quantity,
      userId: "a11c959d-bc03-4d89-90bf-98ae62bc292b",
    });

    console.log(response);
    console.log(
      `Here is the MenuItem ID: ${menuItemId}. \nHere is the Quantity: ${quantity}\nHere is the userId: `
    );
    setIsAddingToCart(false);
  };

  return (
    <div className="container pt-4 pt-md-5">
      {!isLoading ? (
        <>
          <div className="row">
            <div className="col-7">
              <h2 className="text-success">{data.result?.name}</h2>
              <span>
                <span
                  className="badge text-bg-dark pt-2"
                  style={{ height: "40px", fontSize: "20px" }}
                >
                  {data.result?.category}
                </span>
              </span>
              <span>
                <span
                  className="badge text-bg-light pt-2"
                  style={{ height: "40px", fontSize: "20px" }}
                >
                  {data.result?.specialTag}
                </span>
              </span>
              <p style={{ fontSize: "20px" }} className="pt-2">
                {data.result?.description}
              </p>
              <span className="h3">{data.result?.price}</span> &nbsp;&nbsp;&nbsp;
              <span
                className="pb-2  p-3"
                style={{ border: "1px solid #333", borderRadius: "30px" }}
              >
                <i
                  onClick={() => {
                    handleQuantity(-1);
                  }}
                  className="bi bi-dash p-1"
                  style={{ fontSize: "25px", cursor: "pointer" }}
                ></i>
                <span className="h3 mt-3 px-3">{quantity}</span>
                <i
                  onClick={() => {
                    handleQuantity(+1);
                  }}
                  className="bi bi-plus p-1"
                  style={{ fontSize: "25px", cursor: "pointer" }}
                ></i>
              </span>
              <div className="row pt-4">
                <div className="col-5">
                  <button
                    onClick={() => {
                      handleAddCart(data.result?.id);
                    }}
                    className="btn btn-success form-control"
                  >
                    Add to Cart
                  </button>
                </div>

                <div className="col-5 ">
                  <button onClick={() => navigate(-1)} className="btn btn-secondary form-control">
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
            <div className="col-5">
              <img
                src={data.result.image}
                width="100%"
                style={{ borderRadius: "50%" }}
                alt="No content"
              ></img>
            </div>
          </div>
        </>
      ) : (
        <MainLoader />
      )}
    </div>
  );
}
