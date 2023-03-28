import React from "react";
import "./JoinBanner.scss";
import { images } from "../../../Assets/Images";
export default function JoinBanner() {
  return (
    <div style={{marginBottom:"50px"}} className="join__bannner-container app__flex">
      <div className="row app__container-width  join__banner-content">
        <img src={images.gym_girl} alt="" />
        <div className="col">
          <h1 className="head-text">Lets join the community and join this program.</h1>
          <p>You are not alone, many have joined us and we wait to have on many more. Join with us now.</p>
          <div className="row join__banner-input-container">
            <input placeholder="Enter your email" type="text" />
            <button className="btn">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
