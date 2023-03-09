import React from "react";
import { Header } from "../Components/Page/Common";
import { MenuItemList } from "../Components/Page/Home";

function Home() {
  return (
    <div>
      <Header />
      
      <div className="container p-2">
        <MenuItemList />
      </div>
    </div>
  );
}

export default Home;
