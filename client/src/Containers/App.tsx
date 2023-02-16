import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "../Components/Layout/index";
import { Home, NotFound } from "../Pages/index";

function App() {
  return (
    <div>
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
