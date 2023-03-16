import React, { useState, useEffect } from "react";

// General
import { MenuItemCard } from "../../Components/Layout";
import { useGetMenuItemsQuery } from "../../Apis/menuItemApi";
import menuItemModel from "./../../Interfaces/menuItemModel";
import { setMenuItem, setSearchItem } from "../../Storage/Redux/menuItemSlice";
import { MainLoader } from "../../Components/Page/Common";

// Filter/Category/Search specific
import { useDispatch, useSelector } from "react-redux";
import { SD_SortTypes } from "../../Utility/SD";
import { RootState } from "../../Storage/Redux/store";

// Styling
import { girlEatingPink } from "../../Assets/Images/images";
import "./Store.scss";

export default function Shop() {
  // General
  const { data, isLoading } = useGetMenuItemsQuery(null);
  const dispatch = useDispatch();

  // Search component specifc
  const [value, setValue] = useState("");
  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]); // A array of MenuItems that need to adhere to our 'menuItem' interface.
  const [selectedCategory, setSelectedCategory] = useState("All"); // Will be used to select our filter category.
  const [categoryList, setCategoryList] = useState([""]);
  const [sortName, setSortName] = useState(SD_SortTypes.NAME_A_Z); // Default state to how our list will be sorted
  const sortOptions: Array<SD_SortTypes> = [
    SD_SortTypes.PRICE_LOW_HIGH,
    SD_SortTypes.PRICE_HIGH_LOW,
    SD_SortTypes.NAME_A_Z,
    SD_SortTypes.NAME_Z_A,
  ];

  const searchValue = useSelector((state: RootState) => state.menuItemStore.search);

  useEffect(() => {
    if (data && data.result) {
      const tempMenuArray = handleFilters(sortName, selectedCategory, searchValue);
      setMenuItems(tempMenuArray);
    }
  }, [searchValue]);

  useEffect(() => {
    if (!isLoading) {
      dispatch(setMenuItem(data.result));
      setMenuItems(data.result);
      const tempCategoryList = ["All"];
      // Loop through our Array items to determine what is all the categories we have..
      data.result.forEach((item: menuItemModel) => {
        if (tempCategoryList.indexOf(item.category) === -1) {
          tempCategoryList.push(item.category);
        }
      });
      // This will then become our list of categories we can filter between.
      setCategoryList(tempCategoryList);
    }
  }, [isLoading]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchItem(e.target.value));
    setValue(e.target.value);
  };

  const handleSortClick = (i: number) => {
    setSortName(sortOptions[i]);
    const tempArray = handleFilters(sortOptions[i], selectedCategory, searchValue);
    setMenuItems(tempArray);
  };

  const handleCategoryClick = (i: number) => {
    // Handle selecting our category through our select input.
    const buttons = document.querySelectorAll(".category__buttons");
    let localCategory;
    buttons.forEach((button, index) => {
      if (index === i) {
        button.classList.add("active");
        if (index === 0) {
          localCategory = "All";
        } else {
          localCategory = categoryList[index];
        }
        setSelectedCategory(localCategory);
        const tempArray = handleFilters(sortName, localCategory, searchValue);
        setMenuItems(tempArray);
      } else {
        button.classList.remove("active");
      }
    });
  };

  const handleFilters = (sortType: SD_SortTypes, category: string, search: string) => {
    let tempArray =
      category === "All"
        ? [...data.result]
        : data.result.filter(
            (item: menuItemModel) => item.category.toUpperCase() === category.toUpperCase()
          );
    // Search functionality
    if (search) {
      const tempArray2 = [...tempArray];
      tempArray = tempArray2.filter((item: menuItemModel) =>
        item.name.toUpperCase().includes(search.toUpperCase())
      );
    }

    //Sort
    if (sortType === SD_SortTypes.PRICE_LOW_HIGH) {
      tempArray.sort((a: menuItemModel, b: menuItemModel) => a.price - b.price);
    }

    if (sortType === SD_SortTypes.PRICE_HIGH_LOW) {
      tempArray.sort((a: menuItemModel, b: menuItemModel) => b.price - a.price);
    }

    if (sortType === SD_SortTypes.NAME_A_Z) {
      tempArray.sort(
        (a: menuItemModel, b: menuItemModel) =>
          a.name.toUpperCase().charCodeAt(0) - b.name.toUpperCase().charCodeAt(0)
      );
    }

    if (sortType === SD_SortTypes.NAME_Z_A) {
      tempArray.sort(
        (a: menuItemModel, b: menuItemModel) =>
          b.name.toUpperCase().charCodeAt(0) - a.name.toUpperCase().charCodeAt(0)
      );
    }

    return tempArray;
  };

  return (
    <div className="app__flex app__container">
      <div className="app__container-width ">
        <div className="shop__banner-container">
          <h1>Grab upto 50% off on selected products</h1>
          <button className="btn btn-grey">Buy Now</button>
          <img src={girlEatingPink} alt="" />
        </div>
        <div className="search__container row">
          <input
            value={value}
            onChange={handleChange}
            placeholder="Search product name here..."
            type="text"
            name=""
            id=""
          ></input>
          <div className="filter__container row">
            {categoryList.map((categoryName, index) => (
              <button
                className={`category__buttons ${index === 0 && "active"}`}
                onClick={() => handleCategoryClick(index)}
                key={index}
              >
                {categoryName}
              </button>
            ))}
          </div>
          <select name="" id="">
            {sortOptions.map((sortType, index) => (
              <option key={index} onClick={() => handleSortClick(index)}>
                {sortType}
              </option>
            ))}
          </select>
        </div>
        {isLoading && <p>Loading Content</p>}
        {!isLoading && (
          <div className="store__grid">
            {menuItems.length > 0 &&
              menuItems.map((menuItem: menuItemModel, index: number) => (
                <MenuItemCard
                  id={menuItem.id}
                  description={menuItem.description}
                  image={menuItem.image}
                  name={menuItem.name}
                  category={menuItem.category}
                  price={menuItem.price}
                  specialTag={menuItem.specialTag}
                  key={index}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
