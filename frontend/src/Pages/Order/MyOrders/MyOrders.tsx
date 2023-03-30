import React from "react";
import { withAuth } from "../../../HOC";
import { useSelector } from "react-redux";
import { RootState } from "../../../Storage/Redux/store";
import { useGetAllOrdersQuery } from "../../../Apis/orderApi";
import OrderList from "../../../Components/Page/Order/OrderList/OrderList";
import { MainLoader } from "../../../Components/Page/Common";
import { SD_Status } from "../../../Utility/SD";

function MyOrders() {
  const userId = useSelector((state: RootState) => state.userAuthStore.id);
  const { data, isLoading } = useGetAllOrdersQuery({ userId });
  return (
    <>
      {isLoading && <MainLoader />}
      {!isLoading && (
        <div className="app__flex" style={{ paddingBottom: "16rem" }}>
          <div className="app__container-width app__container col">
            <h1 className="text-success">My Orders</h1>
            <hr />

            {data?.apiResponse.result.length > 0 && (
              <OrderList isLoading={isLoading} orderData={data?.apiResponse.result} />
            )}
            {!(data?.apiResponse.result.length > 0) && (
              <div>You do not have any previous orders.</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default withAuth(MyOrders);
