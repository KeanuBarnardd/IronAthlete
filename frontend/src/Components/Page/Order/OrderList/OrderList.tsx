import React from "react";
import { orderHeaderModel } from "../../../../Interfaces";
import { MainLoader } from "../../Common";
import OrderListProps from "../orderListType";
import { useNavigate } from "react-router-dom";
import { getStatusColor } from "../../../../Helper";
import "./OrderList.scss";

function OrderList({ isLoading, orderData }: OrderListProps) {
  const navigate = useNavigate();
  return (
    <>
      {isLoading && <MainLoader />}
      {!isLoading && (
        <div>
          <div className="order__list-top-row">
            <p className="p-text">ID</p>
            <p className="p-text">Name</p>
            <p className="p-text">Phone</p>
            <p className="p-text">Total</p>
            <p className="p-text">Items</p>
            <p className="p-text">Date</p>
            <p className="p-text">Status</p>
            <p className="p-text"></p>
          </div>
          <div className="order__item-grid">
            {orderData.length === 0 && (
              <div className="app__flex">
                <div className="app__container col">
                  <h1>Can't find orders you are looking for</h1>
                  <p className="p-text">There may be no products ordered or you have to adjust your search.  </p>
                </div>
              </div>
            )}
            {orderData.map((orderItem: orderHeaderModel) => {
              const badgeColor = getStatusColor(orderItem.status!);
              return (
                <div className="order__item" key={orderItem.orderHeaderId}>
                  <div className="col-1">{orderItem.orderHeaderId}</div>
                  <div className="col-2">{orderItem.pickupName}</div>
                  <div className="col-2">{orderItem.pickupPhoneNumber}</div>
                  <div className="col-1">${orderItem.orderTotal!.toFixed(2)}</div>
                  <div className="col-1">{orderItem.totalItems}</div>
                  <div className="col-2">{new Date(orderItem.orderDate!).toLocaleDateString()}</div>
                  <div className="col-2">
                    <span className={`badge bg-${badgeColor}`}>{orderItem.status}</span>
                  </div>

                  <button
                    className="btn btn__outline-dark"
                    onClick={() => navigate("/order/orderDetails/" + orderItem.orderHeaderId)}
                  >
                    Details
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default OrderList;
