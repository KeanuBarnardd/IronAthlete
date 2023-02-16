import React from "react";
import { Header, Footer } from "../Components/Layout/index";
import { useState, useEffect } from "react";
import { menuItemModel } from "../Interfaces";

function App() {
  // Creates an Array of MenuItemModels...
  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

  useEffect(() => {
    //Get our Menu Item Data
    fetch("https://freshdirectapi.azurewebsites.net/api/MenuItem")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenuItems(data.result);
      });
  }, []);

  return (
    <div>
      <Header /> Main Component <Footer />
    </div>
  );
}

export default App;
