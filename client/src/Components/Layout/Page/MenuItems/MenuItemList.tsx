import React from "react";
import { useState, useEffect } from "react";
import { useGetMenuItemsByIdQuery, useGetMenuItemsQuery } from "../../../../Apis/menuItemsApi";
import { menuItemModel } from "../../../../Interfaces/index";
import MenuItemCard from "./MenuItemCard";
import { useDispatch } from "react-redux";
import { setMenuItem } from "../../../../Storage/Redux/menuItemSlice";

export default function MenuItemList() {
  // Creates an Array of MenuItemModels...
  //const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

  const { data, isLoading } = useGetMenuItemsQuery(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      dispatch(setMenuItem(data.result));
    }
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container row">
      {data.result.length > 0 &&
        data.result.map((menuItem: menuItemModel, index: number) => (
          <MenuItemCard menuItem={menuItem} key={index} />
        ))}
    </div>
  );
}
