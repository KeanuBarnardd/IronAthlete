import React from "react";
import { getStatusColor } from "../../../Helper";
import { cartItemModel } from "../../../Interfaces";
import { orderSummaryProps } from "../Order/orderSummaryProps";
import { useNavigate } from "react-router-dom";
import { SD_Roles, SD_Status } from "../../../Utility/SD";
import { RootState } from "../../../Storage/Redux/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useUpdateOrderHeaderMutation } from "../../../Apis/orderApi";
import { MainLoader } from "../Common";
import "./OrderSummary.scss";
function OrderSummary({ data, userInput }: orderSummaryProps) {
  const badgeTypeColor = getStatusColor(data.status!);
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.userAuthStore);
  const [loading, setIsLoading] = useState(false);
  const [updateOrderHeader] = useUpdateOrderHeaderMutation();
  const nextStatus: any =
    data.status! === SD_Status.CONFIRMED
      ? { color: "info", value: SD_Status.BEING_COOKED }
      : data.status! === SD_Status.BEING_COOKED
      ? { color: "warning", value: SD_Status.READY_FOR_PICKUP }
      : data.status! === SD_Status.READY_FOR_PICKUP && {
          color: "success",
          value: SD_Status.COMPLETED,
        };

  const handleNextStatus = async () => {
    setIsLoading(true);
    await updateOrderHeader({
      orderHeaderId: data.id,
      status: nextStatus.value,
    });

    setIsLoading(false);
  };

  const handleCancel = async () => {
    setIsLoading(true);
    await updateOrderHeader({
      orderHeaderId: data.id,
      status: SD_Status.CANCELLED,
    });
    setIsLoading(false);
  };

  return (
    <div className="order__summary-parent">
      {loading && <MainLoader />}
      {!loading && (
        <div>
          <div className="order__summary-top">
            <h1 style={{ marginBottom: "5px" }}>Order Summary</h1>
            <hr style={{ marginBottom: "10px" }} />
            {!data.status ? (
              <></>
            ) : (
              <span className="status__tag" style={{ backgroundColor: "var(--grey-300)" }}>
                {data.status}
              </span>
            )}
          </div>
          <div className="order__summary-content">
            <p className="p-text">Name : {userInput.name}</p>
            <p className="p-text">Email : {userInput.email}</p>
            <p className="p-text">Phone : {userInput.phoneNumber}</p>
            <div>
              <h2>Menu Items</h2>
              <div className="menu__items-parent">
                {data.cartItems?.map((cartItem: cartItemModel, index: number) => {
                  return (
                    <div key={index}>
                      <div>
                        <p>{cartItem.menuItem?.name}</p>
                        <p style={{ marginBottom: "5px" }}>
                          ${cartItem.menuItem?.price} x {cartItem.quantity} =
                          <span>${(cartItem.menuItem?.price ?? 0) * (cartItem.quantity ?? 0)}</span>
                        </p>
                      </div>
                    </div>
                  );
                })}

                <hr />
                <h4 className="text-danger" style={{ textAlign: "right" }}>
                  ${data.cartTotal?.toFixed(2)}
                </h4>
              </div>
            </div>
          </div>
          <div>
            {userData.role == SD_Roles.ADMIN && (
              <div className="row">
                {data.status! !== SD_Status.CANCELLED && data.status! !== SD_Status.COMPLETED && (
                  <button className="btn btn__dark" onClick={handleCancel}>
                    Cancel
                  </button>
                )}
                {!nextStatus.value ? (
                  <></>
                ) : (
                  <button className={`btn btn__accent`} onClick={handleNextStatus}>
                    {nextStatus.value}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
