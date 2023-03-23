import React from "react";

import "./Header.scss";
import Carousel from "react-multi-carousel";

export default function Header() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      containerClass="app__container-width"
      sliderClass="itemSlider__content"
      itemClass="card__item"
      responsive={responsive}
      infinite={true}
      slidesToSlide={1}
      autoPlay={true}
      autoPlaySpeed={7000}
      rewindWithAnimation={true}
    >
      <div>
        <div className="row">
          <div className="col">
            <h1 className="head-text">Fuel Your Fitness Journey with Our Store</h1>
            <p className="p-text">Whether you're a seasoned athlete or just starting out, our fitness store offers a wide range of products to help you perform at your best, including protein powders, energy bars, and sports drinks.</p>
            <button className="btn btn__accent">Shop now</button>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
