import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInitiatePaymentMutation } from "../../../../Apis/paymentApi";
import { inputHelper } from "../../../../Helper";
import { apiResponse, cartItemModel } from "../../../../Interfaces";
import { RootState } from "../../../../Storage/Redux/store";
import { MiniLoader } from "../../Common";
import { useNavigate } from "react-router";

import "./CartPickUpDetails.scss";

export default function CartPickUpDetails() {
  const [loading, setLoading] = useState(false);
  const shoppingCartFromStore: cartItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );
  const userData = useSelector((state: RootState) => state.userAuthStore);

  let grandTotal = 0;
  let totalItems = 0;
  const initialUserData = {
    name: userData.fullName,
    email: userData.email,
    phoneNumber: "",
  };
  shoppingCartFromStore?.map((cartItem: cartItemModel) => {
    totalItems += cartItem.quantity ?? 0;
    grandTotal += (cartItem.menuItem?.price ?? 0) * (cartItem.quantity ?? 0);
    return null;
  });
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState(initialUserData);
  const [initiatePayment] = useInitiatePaymentMutation();
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  useEffect(() => {
    setUserInput({
      name: userData.fullName,
      email: userData.email,
      phoneNumber: "",
    });
  }, [userData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { data }: apiResponse = await initiatePayment(userData.id);

    navigate("/payment", {
      state: { apiResult: data?.result, userInput },
    });
  };

  return (
    <div className="pickup-cart-details__container">
      <h1 style={{ marginBottom: "10px" }}>Pickup Details</h1>
      <hr style={{ marginBottom: "10px" }} />
      <form onSubmit={handleSubmit}>
        <div className="input__container">
          <p className="p-text">Pick up name</p>
          <input
            type="text"
            value={userInput.name}
            className="form-control"
            placeholder="name..."
            name="name"
            onChange={handleUserInput}
            required
          />
        </div>
        <div className="input__container">
          <p className="p-text">Pickup Email</p>
          <input
            type="email"
            value={userInput.email}
            className="form-control"
            placeholder="email..."
            name="email"
            onChange={handleUserInput}
            required
          />
        </div>

        <div className="input__container">
          <p className="p-text">Phone number</p>
          <input
            type="number"
            value={userInput.phoneNumber}
            className="form-control"
            name="phoneNumber"
            onChange={handleUserInput}
            required
          />
        </div>
        <div className="col total__container">
          <h2>Total</h2>
          <hr />
          <div className="row" style={{ justifyContent: "space-between", width: "100%" }}>
            <p className="p-text">No of Item</p>
            <p className="total__text">{totalItems}</p>
          </div>
          <div className="row" style={{ justifyContent: "space-between", width: "100%" }}>
            <p className="p-text">Grand Total</p>
            <p className="total__text">${grandTotal.toFixed(2)}</p>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn__accent"
          disabled={loading || shoppingCartFromStore.length == 0}
        >
          {loading ? <MiniLoader /> : "Place order"}
        </button>
      </form>
    </div>
  );
}
