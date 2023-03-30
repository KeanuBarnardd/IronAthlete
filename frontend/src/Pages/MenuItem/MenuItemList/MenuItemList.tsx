import React from "react";
import { useDeleteMenuItemMutation, useGetMenuItemsQuery } from "../../../Apis/menuItemApi";
import { toast } from "react-toastify";
import { MainLoader } from "../../../Components/Page/Common";
import { menuItemModel } from "../../../Interfaces";
import { useNavigate } from "react-router";
import "./MenuItemList.scss";

function MenuItemList() {
  const [deleteMenuItem] = useDeleteMenuItemMutation();
  const { data, isLoading } = useGetMenuItemsQuery(null);
  const navigate = useNavigate();

  const handleMenuItemDelete = async (id: number) => {
    toast.promise(
      deleteMenuItem(id),
      {
        pending: "Processing your request...",
        success: "Menu Item Deleted Successfully 👌",
        error: "Error encoutnered 🤯",
      },
      {
        theme: "dark",
      }
    );
  };

  return (
    <>
      {isLoading && <MainLoader />}
      {!isLoading && (
        <div className="app__flex" style={{ backgroundColor: "var(--grey-000)" }}>
          <div className="app__container-width app__container">
            <div className="col product__list-parent">
              <div className="col">
                <h1>Products</h1>
                <hr style={{marginBottom:"10px"}} />
                <div className="row">
                  <button
                    className="btn btn__accent"
                    onClick={() => navigate("/menuitem/menuitemupsert")}
                  >
                    Add New Product
                  </button>
                  <p className="p-text">Edit the main menu - can add, edit and remove products from the home page.</p>
                </div>
              </div>
              <div></div>
              <div className="categories__row">
                <p className="col-1">Image</p>
                <p className="col-1">ID</p>
                <p className="col-2">Name</p>
                <p className="col-2">Category</p>
                <p className="col-1">Price</p>
                <p className="col-2">Special Tag</p>
                <p className="col-1">Action</p>
              </div>
              <div className="product__table">
                {data.result.map((menuItem: menuItemModel) => {
                  return (
                    <div className="product__item" key={menuItem.id}>
                      <img
                        src={menuItem.image}
                        alt="no content"
                        style={{ width: "100%", maxWidth: "120px" }}
                      />

                      <p>{menuItem.id}</p>
                      <p>
                        <b>{menuItem.name}</b>{" "}
                      </p>
                      <p>
                        <span>{menuItem.category}</span>
                      </p>
                      <p>${menuItem.price}</p>
                      <p> {menuItem.specialTag}</p>
                      <div className="row ">
                        <button className="btn btn__outline-dark">
                          <i
                            className="bi bi-pencil-fill"
                            onClick={() => navigate("/menuitem/menuitemupsert/" + menuItem.id)}
                          ></i>
                        </button>
                        <button
                          className="btn btn__outline-dark"
                          onClick={() => handleMenuItemDelete(menuItem.id)}
                        >
                          <i className="bi bi-trash-fill"></i>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuItemList;
