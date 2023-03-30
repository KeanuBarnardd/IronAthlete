import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartItemModel, userModel } from "../../../../Interfaces";
import { removeFromCart, updateQuantity } from "../../../../Storage/Redux/shoppingCartSlice";
import { RootState } from "../../../../Storage/Redux/store";
import { useUpdateShoppingCartMutation } from "../../../../Apis/shoppingCartApi";
import "./CartSummary.scss";

function CartSummary() {
  const dispatch = useDispatch();
  const [updateShoppingCart] = useUpdateShoppingCartMutation();
  const shoppingCartFromStore: cartItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );
  const userData: userModel = useSelector((state: RootState) => state.userAuthStore);

  if (shoppingCartFromStore.length == 0) {
    return (
      <div className="p-5">There are no items in your cart. Please add items to continue.</div>
    );
  }

  const handleQuantity = (updateQuantityBy: number, cartItem: cartItemModel) => {
    if ((updateQuantityBy == -1 && cartItem.quantity == 1) || updateQuantityBy == 0) {
      //remove the item
      updateShoppingCart({
        menuItemId: cartItem.menuItem?.id,
        updateQuantityBy: 0,
        userId: userData.id,
      });
      dispatch(removeFromCart({ cartItem, quantity: 0 }));
    } else {
      //update the quantity with the new quantity
      updateShoppingCart({
        menuItemId: cartItem.menuItem?.id,
        updateQuantityBy: updateQuantityBy,
        userId: userData.id,
      });
      dispatch(
        updateQuantity({
          cartItem,
          quantity: cartItem.quantity! + updateQuantityBy,
        })
      );
    }
  };

  return (
    <div className="col">
      <h1 style={{ marginBottom: "10px" }}>Cart Summary</h1>
      <hr style={{ marginBottom: "15px" }} />
      <div className="col" style={{ gap: "15px", width: "100%" }}>
        {shoppingCartFromStore.map((cartItem: cartItemModel, index: number) => (
          <div className="cart__item-parent row" key={index}>
            <img src={cartItem.menuItem?.image} alt="" />

            <div className="col">
              <h1>{cartItem.menuItem?.name}</h1>
              <p className="p-text">{cartItem.menuItem?.description}</p>
              <h4 style={{ marginTop: "5px" }}>
                ${(cartItem.quantity! * cartItem.menuItem!.price).toFixed(2)}
              </h4>

              <h4>${cartItem.menuItem!.price}</h4>

              <div className="row">
                <span role="button">
                  <i
                    className="bi bi-dash-circle-fill"
                    onClick={() => handleQuantity(-1, cartItem)}
                  ></i>
                </span>
                <span>
                  <b>{cartItem.quantity}</b>
                </span>
                <span>
                  <i
                    role="button"
                    className="bi bi-plus-circle-fill"
                    onClick={() => handleQuantity(1, cartItem)}
                  ></i>
                </span>
              </div>

              <button className="btn btn__outline-dark" onClick={() => handleQuantity(0, cartItem)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartSummary;
