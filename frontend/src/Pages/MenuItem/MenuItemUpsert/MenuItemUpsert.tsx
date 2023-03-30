import React, { useEffect, useState } from "react";
import {
  useCreateMenuItemMutation,
  useGetMenuItemByIdQuery,
  useUpdateMenuItemMutation,
} from "../../../Apis/menuItemApi";
import { inputHelper, toastNotify } from "../../../Helper";
import { useNavigate, useParams } from "react-router-dom";
import { MainLoader } from "../../../Components/Page/Common";
import { SD_Categories } from "../../../Utility/SD";
import "./MenuItemUpsert.scss";

const Categories = [
  SD_Categories.APPETIZER,
  SD_Categories.BEVERAGES,
  SD_Categories.DESSERT,
  SD_Categories.ENTREE,
];

const menuItemData = {
  name: "",
  description: "",
  specialTag: "",
  category: Categories[0],
  price: "",
};

function MenuItemUpsert() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [imageToStore, setImageToStore] = useState<any>();
  const [imageToDisplay, setImageToDisplay] = useState<string>("");
  const [menuItemInputs, setMenuItemInputs] = useState(menuItemData);
  const [loading, setLoading] = useState(false);
  const [createMenuItem] = useCreateMenuItemMutation();
  const [updateMenuItem] = useUpdateMenuItemMutation();
  const { data } = useGetMenuItemByIdQuery(id);

  useEffect(() => {
    if (data && data.result) {
      const tempData = {
        name: data.result.name,
        description: data.result.description,
        specialTag: data.result.specialTag,
        category: data.result.category,
        price: data.result.price,
      };
      setMenuItemInputs(tempData);
      setImageToDisplay(data.result.image);
    }
  }, [data]);

  const handleMenuItemInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const tempData = inputHelper(e, menuItemInputs);
    setMenuItemInputs(tempData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const imgType = file.type.split("/")[1];
      const validImgTypes = ["jpeg", "jpg", "png"];

      const isImageTypeValid = validImgTypes.filter((e) => {
        return e === imgType;
      });

      if (file.size > 1000 * 1024) {
        setImageToStore("");
        toastNotify("File Must be less then 1 MB", "error");
        return;
      } else if (isImageTypeValid.length === 0) {
        setImageToStore("");
        toastNotify("File Must be in jpeg, jpg or png", "error");
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      setImageToStore(file);
      reader.onload = (e) => {
        const imgUrl = e.target?.result as string;
        setImageToDisplay(imgUrl);
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!imageToStore && !id) {
      toastNotify("Please upload an image", "error");
      setLoading(false);
      return;
    }

    const formData = new FormData();

    formData.append("Name", menuItemInputs.name);
    formData.append("Description", menuItemInputs.description);
    formData.append("SpecialTag", menuItemInputs.specialTag ?? "");
    formData.append("Category", menuItemInputs.category);
    formData.append("Price", menuItemInputs.price);
    if (imageToDisplay) formData.append("File", imageToStore);

    let response;

    if (id) {
      //update
      formData.append("Id", id);
      response = await updateMenuItem({ data: formData, id });
      toastNotify("Menu Item updated successfully", "success");
    } else {
      //create
      response = await createMenuItem(formData);
      toastNotify("Menu Item created successfully", "success");
    }

    if (response) {
      setLoading(false);
      navigate("/menuItem/menuitemlist");
    }

    setLoading(false);
  };

  return (
    <div className="app__flex">
      <div  className=" app__container-width app__container" >
        {loading && <MainLoader />}
        <div  className="col form__parent">
          <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="row">
              <img src={imageToDisplay} alt="" />
              <div className="col form__input-side">
                <h1>{id ? "Edit Menu Item" : "Add Menu Item"}</h1>
                <hr style={{ marginBottom: "10px" }} />
                <p className="p-text"></p>
                <div className="input__container">
                  <p className="p-text">Product Name</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    required
                    name="name"
                    value={menuItemInputs.name}
                    onChange={handleMenuItemInput}
                  />
                </div>
                <div className="input__container">
                  <p className="p-text">Product Description</p>
                  <textarea
                    placeholder="Enter Description"
                    name="description"
                    rows={5}
                    value={menuItemInputs.description}
                    onChange={handleMenuItemInput}
                  ></textarea>
                </div>

                <div className="input__container">
                  <p className="p-text">Product Special Tag</p>
                  <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="Enter Special Tag"
                    name="specialTag"
                    value={menuItemInputs.specialTag}
                    onChange={handleMenuItemInput}
                  />
                </div>

                <div className="input__container">
                  <p className="p-text">Product Category</p>
                  <select
                    placeholder="Enter Category"
                    name="category"
                    value={menuItemInputs.category}
                    onChange={handleMenuItemInput}
                  >
                    {Categories.map((category) => (
                      <option value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div className="input__container">
                  <p className="p-text">Product Price</p>
                  <input
                    type="number"
                    className="form-control mt-3"
                    required
                    placeholder="Enter Price"
                    name="price"
                    value={menuItemInputs.price}
                    onChange={handleMenuItemInput}
                  />
                </div>

                <input type="file" onChange={handleFileChange} className="form-control mt-3" />
                <div className="row">
                  <button type="submit" className="btn btn__accent">
                    {id ? "Update" : "Create"}
                  </button>

                  <button
                    onClick={() => navigate("/menuItem/menuitemlist")}
                    className="btn btn__outline-dark"
                  >
                    Back to Menu Items
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MenuItemUpsert;
