import React from "react";
import { Header } from "../../Components/Page/Common";
import { MenuItemList } from "../../Components/Page/Home";
import { foodBowl, order, delivery, lambPot } from "../../Assets/Images/images";
import "./Home.scss";

function Home() {
  return (
    <div>
      <Header />
      <div className="app__flex">
        <div className="app__container-width app__container col">
          <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
            <div className="col">
              <p className="sub-title">
                <span style={{ backgroundColor: "var(--accent-color-orange)" }}>Our proccess</span>
              </p>
              <h1 className="head-text">How it all works</h1>
            </div>
            <p className="p-text" style={{ maxWidth: "700px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod deserunt provident
              repudiandae ratione unde harum voluptatum quas asperiores suscipit minima quia
              delectus, dolores mollitia temporibus ex ad hic ipsum. Ex.
            </p>
          </div>
          <div className="home__grid-container">
            <div className="proccess__container">
              <div className="img__container" style={{ backgroundImage: `url(${order})` }}></div>
              <h2>Choose & order meal</h2>
              <p className="p-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolores!
                SAaaa
              </p>
            </div>
            <div className="proccess__container">
              <div className="img__container" style={{ backgroundImage: `url(${lambPot})` }}></div>
              <h2>We prepare your food</h2>
              <p className="p-text">
                Lorem, ipsum dolor adipisicing elit. Necessitatibus, dolores!
              </p>
            </div>
            <div className="proccess__container">
              <div className="img__container" style={{ backgroundImage: `url(${delivery})` }}></div>
              <h2>We deliver </h2>
              <p className="p-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="proccess__container">
              <div className="img__container" style={{ backgroundImage: `url(${foodBowl})` }}></div>
              <h2>You eat & enjoy</h2>
              <p className="p-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolores!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="app__flex" style={{ backgroundColor: "var(--accent-color-orange)" }}>
        <div
          className="app__container app__container-width"
          style={{
            borderRadius: "var(--border-radius-1",
          }}
        >
          <h1 className="head-text" style={{textAlign:"center"}}>We're changing the way people order food. Message, when you need food quickly.</h1>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
