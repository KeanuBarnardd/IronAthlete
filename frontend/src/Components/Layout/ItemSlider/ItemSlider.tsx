import React, { useState } from "react";
import { useGetMenuItemsQuery } from "../../../Apis/menuItemApi";
import { MainLoader } from "../../Page/Common";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SliderCard } from "../index";
import { menuItemModel } from "../../../Interfaces";
import "./ItemSlider.scss";

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

interface Props {
  headText: string;
  pText:string;
}

export default function ItemSlider(props: Props) {
  const { data, isLoading } = useGetMenuItemsQuery(null);

  return (
    <div>
      <h3 className="item__slider-head">{props.headText}</h3>
      <p className="p-text">{props.pText}</p>
      {isLoading && <MainLoader />}
      {!isLoading && (
        <Carousel
          containerClass="itemSlider__container"
          sliderClass="itemSlider__content"
          itemClass="card__item"
          responsive={responsive}
          infinite={true}
          slidesToSlide={1}
          autoPlay={true}
          autoPlaySpeed={3000}
          rewindWithAnimation={true}
        >
          {data.result.map((menuItem: menuItemModel) => {
            return (
              <SliderCard
                name={menuItem.name}
                image={menuItem.image}
                price={menuItem.price}
                id={menuItem.id}
                description={menuItem.description}
                specialTag={menuItem.specialTag}
                category={menuItem.category}
              />
            );
          })}
        </Carousel>
      )}
    </div>
  );
}
