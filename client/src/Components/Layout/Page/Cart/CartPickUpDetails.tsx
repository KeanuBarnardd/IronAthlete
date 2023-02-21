import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInitiatePaymentMutation } from "../../../../Apis/paymentApi";
import { apiResponse, cartItemModel } from "../../../../Interfaces";
import { RootState } from "../../../../Storage/Redux/store";
import { MiniLoader } from "../Common";
import inputHelper from "./../../../../Helper/inputHelper";
import { useNavigate } from "react-router-dom";

export default function CartPickUpDetails() {
  const [loading, setLoading] = useState(false);
  const shoppingCartFromStore: cartItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );
  const navigate = useNavigate();
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

  const [userInput, setUserInput] = useState(initialUserData);

  const [initiatePayment] = useInitiatePaymentMutation();

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    //Initiate the Payment using API here

    const { data }: apiResponse = await initiatePayment(userData.id);
    const orderSummary = { grandTotal, totalItems };
    console.log(data);
    navigate("/payment", {
      state: { apiResult: data?.result, userData, orderSummary },
    });
  };

  return (
    <div className="border pb-5 pt-3">
      <h1 style={{ fontWeight: "300" }} className="text-center text-success">
        Pickup Details
      </h1>
      <hr />
      <form onSubmit={handleSubmit} className="col-10 mx-auto">
        <div className="form-group mt-3">
          Pickup Name
          <input
            value={userInput.name}
            type="text"
            className="form-control"
            placeholder="name..."
            name="name"
            required
            onChange={handleUserInput}
          />
        </div>
        <div className="form-group mt-3">
          Pickup Email
          <input
            type="email"
            value={userInput.email}
            className="form-control"
            placeholder="email..."
            name="email"
            required
            onChange={handleUserInput}
          />
        </div>

        <div className="form-group mt-3">
          Pickup Phone Number
          <input
            type="number"
            value={userInput.phoneNumber}
            className="form-control"
            placeholder="phone number..."
            name="phoneNumber"
            required
            onChange={handleUserInput}
          />
        </div>
        <div className="form-group mt-3">
          <div className="card p-3" style={{ background: "ghostwhite" }}>
            <h5>Grand Total : ${`${grandTotal.toFixed(2)}`}</h5>
            <h5>No of items : {`${totalItems}`}</h5>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-success form-control mt-3"
          disabled={loading}
        >
          {loading ? <MiniLoader size={0.5} /> : "Looks Good? Place Order! "}
        </button>
      </form>
    </div>
  );
}
