import React from "react";
import { Banner } from "../Components/Page/Common";
import { MenuItemList } from "../Components/Page/Home";

function Home() {
  return (
    <div>
      <Banner />
      <a href="https://dotnetmastery.com/Home/Details?courseId=29" target="_blank"></a>
      <div className="container p-2">
        <MenuItemList />
      </div>
    </div>
  );
}

export default Home;
