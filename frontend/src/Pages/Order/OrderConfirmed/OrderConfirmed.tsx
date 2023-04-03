import { useParams } from "react-router-dom";
import React from "react";
import "./OrderConfirmed.scss";

function OrderConfirmed() {
  const { id } = useParams();
  return (
    <div className="app__flex">
      <div className="app__container-width  app__container " style={{ gap: "20px ", justifyContent:"center"}}>
        <i className="bi bi-check2-circle confirmed_logo "></i>
        <div className="">
          <h1 style={{color:"var(--grey-600)"}}>Order has been Confirmed!</h1>
          <hr />
          <h2>Your order ID: {id}</h2>
          <p className="p-text">We will soon start to cook the delicous food you ordered. </p>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmed;
