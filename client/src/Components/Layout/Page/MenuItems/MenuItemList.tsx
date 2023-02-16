import React from "react";
import { useState, useEffect } from "react";
import { menuItemModel } from "../../../../Interfaces/index";
import MenuItemCard from "./MenuItemCard";

export default function MenuItemList() {
  // Creates an Array of MenuItemModels...
  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);


  return <div className="container row">
    {menuItems.length > 0 && menuItems.map((menuItem, index)=>(
      <MenuItemCard menuItem={menuItem} key={index}/>
    ))}
  </div>;
}
