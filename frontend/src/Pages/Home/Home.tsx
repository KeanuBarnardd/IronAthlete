import React from "react";
import { Header } from "../../Components/Page/Common";
import { MenuItemList } from "../../Components/Page/Home";
import { ItemSlider } from "../../Components/Layout";
import { images } from "../../Assets/Images";
import "./Home.scss";

function Home() {
  return (
    <>
      <Header />;
      <div className="home__content">
        <div className="app__flex" style={{ marginTop: "30px", marginBottom: "50px" }}>
          <div className="app__container-width">
            {/* --------------Home Tags Grid-------------- */}
            <div className="home__tags-grid">
              <div className="home__tag-container row">
                <i className="bi bi-truck"></i>
                <div className="col">
                  <h2>Free Delivery</h2>
                  <p className="p-text">Free shipping on all orders over $30</p>
                </div>
              </div>
              <div className="home__tag-container row">
                <i className="bi bi-headset"></i>
                <div className="col">
                  <h2>Online Support</h2>
                  <p className="p-text">Support online 24 hours a day</p>
                </div>
              </div>
              <div className="home__tag-container row">
                <i className="bi bi-coin"></i>
                <div className="col">
                  <h2>Money Return</h2>
                  <p className="p-text">Back gurantee under 7 days</p>
                </div>
              </div>
              <div className="home__tag-container row">
                <i className="bi bi-piggy-bank"></i>
                <div className="col">
                  <h2>Member Discount</h2>
                  <p className="p-text">On every order over $120.00</p>
                </div>
              </div>
          
            </div>
          </div>
        </div>
        {/* --------------Cataglogue Component-------------- */}
        <div className="app__flex">
          <div className="app__container-width catalogue__parent-container">
            <div className="row catalogue__container">
              <div className="catalogue__container-tall">
                <span className="sales__tag">SALE 15% OFF</span>
                <div
                  className="catalogue__container-img"
                  style={{ backgroundImage: `url(${images.cat_img_4})` }}
                ></div>

                <div className="col">
                  <h1>Heavy dumbell set weights light cruiser brand</h1>

                  <div className="row__price">
                    <h2>$149.99</h2>
                    <h3>$189.99</h3>
                  </div>
                  <p className="p-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni quibusdam
                    non ab doloribus atque eius a molestias eos perferendis aperiam esse dolorem,
                    fugit rem, neque vero deleniti deserunt porro.
                  </p>
                  <div className="row">
                    <button className="btn btn__accent">Add to cart</button>
                    <button className="btn btn__outline-dark">View Product</button>
                  </div>
                  <p className="terms">Offer ends 20/06/2023. All terms & conditions apply</p>
                </div>
              </div>
              <div className="col catalogue__container-parent " style={{ gap: "15px" }}>
                <div
                  className="col catalogue__container-sale"
                  style={{ backgroundImage: `url(${images.catalouge3})` }}
                >
                  <h1>30%</h1>
                  <h2>Off All Selected Protein Powders and Gym Wear if you buy today</h2>
                </div>
                <div className="catalogue__grid">
                  <div className="catalogue__card">
                    <h2>Hand weights</h2>
                    <img src={images.cat_img_1} alt="" />
                  </div>
                  <div className="catalogue__card">
                    <h2>Hand weights</h2>
                    <img src={images.cat_img_1} alt="" />
                  </div>
                  <div className="catalogue__card">
                    <h2>Safety gear</h2>
                    <img src={images.cat_img_2} alt="" />
                  </div>
                  <div className="catalogue__card">
                    <h2>Protein</h2>
                    <img src={images.cat_img_3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app__flex">
        <div className="app__container"></div>
      </div>
    </>
  );
}

export default Home;
