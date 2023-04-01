import React from "react";
import { useLocation } from "react-router";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "../Components/Page/Payment";
import { OrderSummary } from "../Components/Page/Order";

function Payment() {
  const {
    state: { apiResult, userInput },
  } = useLocation();
  const stripePromise = loadStripe(
    "pk_test_51MbwiwGg3VC7gPnxcbXkjmadqwDdUbeFNbBPKVuhVfv1k4Aq3dL4Nsk3FmWPcRitguVrG5WPUwZINFrMPSrvk08O00flFKZ7K7"
  );
  const options = {
    // passing the client secret obtained from the server
    clientSecret: apiResult.clientSecret,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <div className="app__flex" style={{ width: "100%" }}>
        <div className="app__container-width app__container row" style={{ gap: "40px" }}>
          <div className="col-md-7">
            <OrderSummary data={apiResult} userInput={userInput} />
          </div>
          <div className="col">
            <h3>Payment</h3>
            <PaymentForm data={apiResult} userInput={userInput} />
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default Payment;
