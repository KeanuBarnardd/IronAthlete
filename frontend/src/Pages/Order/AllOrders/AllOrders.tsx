import React, { useState, useEffect } from "react";
import { withAdminAuth, withAuth } from "../../../HOC";
import { useSelector } from "react-redux";
import { RootState } from "../../../Storage/Redux/store";
import { useGetAllOrdersQuery } from "../../../Apis/orderApi";
import OrderList from "../../../Components/Page/Order/OrderList/OrderList";
import { MainLoader } from "../../../Components/Page/Common";
import { inputHelper } from "../../../Helper";
import { SD_Status } from "../../../Utility/SD";
import "./AllOrders.scss";

const filterOptions = [
  "All",
  SD_Status.CONFIRMED,
  SD_Status.BEING_COOKED,
  SD_Status.READY_FOR_PICKUP,
  SD_Status.CANCELLED,
];

function AllOrders() {
  const [filters, setFilters] = useState({ searchString: "", status: "" });
  const [orderData, setOrderData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageOptions, setPageOptions] = useState({
    pageNumber: 1,
    pageSize: 5,
  });
  const [currentPageSize, setCurrentPageSize] = useState(pageOptions.pageSize);
  const [apiFilters, setApiFilters] = useState({
    searchString: "",
    status: "",
  });

  const { data, isLoading } = useGetAllOrdersQuery({
    ...(apiFilters && {
      searchString: apiFilters.searchString,
      status: apiFilters.status,
      pageNumber: pageOptions.pageNumber,
      pageSize: pageOptions.pageSize,
    }),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const tempValue = inputHelper(e, filters);
    setFilters(tempValue);
  };

  const handleFilters = () => {
    setApiFilters({
      searchString: filters.searchString,
      status: filters.status,
    });
  };

  useEffect(() => {
    if (data) {
      setOrderData(data.apiResponse.result);
      const { TotalRecords } = JSON.parse(data.totalRecords);
      setTotalRecords(TotalRecords);
    }
  }, [data]);

  const getPageDetails = () => {
    const dataStartNumber = (pageOptions.pageNumber - 1) * pageOptions.pageSize + 1;
    const dataEndNumber = pageOptions.pageNumber * pageOptions.pageSize;

    return `${dataStartNumber}
             - 
            ${dataEndNumber < totalRecords ? dataEndNumber : totalRecords} of ${totalRecords}`;
  };

  const handlePageOptionChange = (direction: string, pageSize?: number) => {
    if (direction === "prev") {
      setPageOptions({ pageSize: 5, pageNumber: pageOptions.pageNumber - 1 });
    } else if (direction === "next") {
      setPageOptions({ pageSize: 5, pageNumber: pageOptions.pageNumber + 1 });
    } else if (direction === "change") {
      setPageOptions({
        pageSize: pageSize ? pageSize : 5,
        pageNumber: 1,
      });
    }
  };

  return (
    <>

      {isLoading && <div className="app__container app__flex" style={{padding:"16rem 0rem",backgroundColor: "var(--grey-000)"}}>
          <MainLoader/>
        </div>}
      <div
        className="app__flex"
        style={{ backgroundColor: "var(--grey-000)", paddingBottom: "5rem" }}
      >
        {!isLoading && (
          <div className="app__container-width app__container col">
            <div className="col all-orders__top">
              <h1>Orders List</h1>
              <hr />
              <div className="row" style={{ justifyContent: "space-between" }}>
                <div className="row">
                  <input
                    type="text"
                    placeholder="Search Name, Email or Phone"
                    name="searchString"
                    onChange={handleChange}
                  />
                  <select onChange={handleChange} name="status">
                    {filterOptions.map((item, index) => (
                      <option key={index} value={item === "All" ? "" : item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <button className="btn btn__dark" onClick={handleFilters}>
                    Filter
                  </button>
                </div>

                <select
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    handlePageOptionChange("change", Number(e.target.value));
                    setCurrentPageSize(Number(e.target.value));
                  }}
                  style={{ width: "80px" }}
                  value={currentPageSize}
                >
                  <option>5 Rows</option>
                  <option>10 Rows </option>
                  <option>15 Rows</option>
                  <option>20 Rows</option>
                </select>
              </div>
            </div>

            <OrderList isLoading={isLoading} orderData={orderData} />

            <div style={{ marginTop: "10px" }}>
              <div>{getPageDetails()}</div>
              <button
                onClick={() => handlePageOptionChange("prev")}
                disabled={pageOptions.pageNumber === 1}
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                onClick={() => handlePageOptionChange("next")}
                disabled={pageOptions.pageNumber * pageOptions.pageSize >= totalRecords}
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default withAdminAuth(AllOrders);
