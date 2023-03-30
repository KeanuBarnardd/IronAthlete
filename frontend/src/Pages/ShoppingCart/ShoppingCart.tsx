import React from "react";
import { CartPickUpDetails, CartSummary } from "../../Components/Page/Cart";
import { withAuth } from "../../HOC";
import "./ShoppingCart.scss";

function ShoppingCart() {
  return (
    <div className="app__flex">
      <hr />
      <div className="app__container-width app__container" style={{ gap: "30px" }}>
        <CartSummary />

        <CartPickUpDetails />
      </div>
    </div>
  );
}

export default withAuth(ShoppingCart);
