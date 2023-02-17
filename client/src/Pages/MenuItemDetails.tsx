import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// USER ADMIN ID - a11c959d-bc03-4d89-90bf-98ae62bc292b

export default function MenuItemDetails() {
  const { menuItemId } = useParams();

  const navigate = useNavigate();

  return (
    <div className="container pt-4 pt-md-5">
      <>
        <div className="row">
          <div className="col-7">
            <h2 className="text-success"></h2>
            <span>
              <span
                className="badge text-bg-dark pt-2"
                style={{ height: "40px", fontSize: "20px" }}
              ></span>
            </span>
            <span>
              <span
                className="badge text-bg-light pt-2"
                style={{ height: "40px", fontSize: "20px" }}
              ></span>
            </span>
            <p style={{ fontSize: "20px" }} className="pt-2"></p>
            <span className="h3"></span> &nbsp;&nbsp;&nbsp;
            <span className="pb-2  p-3" style={{ border: "1px solid #333", borderRadius: "30px" }}>
              <i className="bi bi-dash p-1" style={{ fontSize: "25px", cursor: "pointer" }}></i>
              <span className="h3 mt-3 px-3"></span>
              <i className="bi bi-plus p-1" style={{ fontSize: "25px", cursor: "pointer" }}></i>
            </span>
            <div className="row pt-4">
              <div className="col-5">
                <button className="btn btn-success form-control">Add to Cart</button>
              </div>

              <div className="col-5 ">
                <button className="btn btn-secondary form-control">Back to Home</button>
              </div>
            </div>
          </div>
          <div className="col-5">
            <img src={""} width="100%" style={{ borderRadius: "50%" }} alt="No content"></img>
          </div>
        </div>
      </>

      <div className="d-flex justify-content-center" style={{ width: "100%" }}>
        Loading
      </div>
    </div>
  );
}
