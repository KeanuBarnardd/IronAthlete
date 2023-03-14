import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SliderCard } from "../index";
import "./ItemSlider.scss";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface Props {
  headText: string;
}

export default function ItemSlider(props: Props) {
  return (
    <div>
      <h3 className="item__slider-head">{props.headText}</h3>
      <Carousel
        containerClass="itemSlider__container"
        sliderClass="itemSlider__content"
        itemClass="card__item"
        responsive={responsive}
        infinite={true}
        slidesToSlide={1}
        autoPlay={true}
        autoPlaySpeed={9000}
        rewindWithAnimation={true}
      >
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </Carousel>
    </div>
  );
}
