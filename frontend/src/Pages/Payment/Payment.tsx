import React from "react";
import { useLocation } from "react-router";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "../../Components/Page/Payment";
import { OrderSummary } from "../../Components/Page/Order";

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
      <div className="app__flex">
        <div
          className="app__container-width app__container app__flex row"
          style={{ gap: "40px", alignItems: "flex-start" }}
        >
          <OrderSummary data={apiResult} userInput={userInput} />

          <div className="col">
            <h1 style={{ marginBottom: "5px", color: "var(--grey-700)" }}>Payment</h1>
            <hr style={{ marginBottom: "10px" }} />
            <PaymentForm data={apiResult} userInput={userInput} />
          </div>
        </div>
      </div>
      .
    </Elements>
  );
}

export default Payment;
