import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "../Components/Layout/index";
import { Home, NotFound, MenuItemDetails } from "../Pages/index";

function App() {
  return (
    <div>
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/menuItemDetails/:menuItemId" element={<MenuItemDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
