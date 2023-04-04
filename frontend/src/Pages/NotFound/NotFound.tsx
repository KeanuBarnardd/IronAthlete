import React from "react";
import { images } from "../../Assets/Images/index";
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="app__flex" style={{ height: "60vh" }}>
      <div className="app__container app__container-width col notfound__container">
        <h1>Sorry this page was'nt found</h1>
        <h2>Try going back to home the home page. </h2>
      </div>
    </div>
  );
}

export default NotFound;
