import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "../Components/Layout/Page/Payment";
import { useLocation } from "react-router-dom";
import { OrderSummary } from "../Components/Layout/Page/Order";

export default function Payment() {
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
      <div className="container m-5 p-5">
        <div className="row">
          <div className="col md-6">
            <OrderSummary data={apiResult} userInput={userInput} />
          </div>
          <div className="col-md-4 offset-md-1">
            <h3 className="text-success">Payment</h3>
            <div className="mt-5">
              <PaymentForm />
            </div>
          </div>
        </div>
      </div>
    </Elements>
  );
}
