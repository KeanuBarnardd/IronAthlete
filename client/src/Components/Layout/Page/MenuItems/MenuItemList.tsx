import React from "react";
import { useState, useEffect } from "react";

import { menuItemModel } from "../../../../Interfaces/index";
import MenuItemCard from "./MenuItemCard";
import { useDispatch } from "react-redux";
import { setMenuItem } from "../../../../Storage/Redux/menuItemSlice";

export default function MenuItemList() {
  // Creates an Array of MenuItemModels...
  //const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

  return <div className="container row"></div>;
}
