import React from "react";
import { useParams } from "react-router-dom";
import { useGetOrderDetailsQuery } from "../../../Apis/orderApi";
import { OrderSummary } from "../../../Components/Page/Order";
import "./OrderDetails.scss";
function OrderDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetOrderDetailsQuery(id);
  let userInput, orderDetails;
  if (!isLoading && data?.result) {
    console.log(data.result);
    userInput = {
      name: data.result[0].pickupName,
      email: data.result[0].pickupEmail,
      phoneNumber: data.result[0].pickupPhoneNumber,
    };
    orderDetails = {
      id: data.result[0].orderHeaderId,
      cartItems: data.result[0].orderDetails,
      cartTotal: data.result[0].orderTotal,
      status: data.result[0].status,
    };
  }

  return (
    <div className="app__flex" style={{ backgroundColor: "var(--grey-000)" }}>
      <div className="app__container app__container-width order__details__pad">
        {!isLoading && orderDetails && userInput && (
          <OrderSummary data={orderDetails} userInput={userInput} />
        )}
      </div>
    </div>
  );
}

export default OrderDetails;
