import React from "react";
import { useGetMenuItemByIdQuery, useGetMenuItemsQuery } from "../../Apis/menuItemApi";
import { MainLoader } from "../Page/Common";
import { useNavigate } from "react-router-dom";
import menuItemModel from "./../../Interfaces/menuItemModel";
import { SliderCard } from "../Layout";

type Props = {
  removeIndex: number;
};

export default function Suggestions({ removeIndex }: Props) {
  const { data, isLoading } = useGetMenuItemsQuery(null);

  // Get random items from our Array but make sure we don't show our current menu item
  const getRandomItems = (array: menuItemModel[], n: number) => {
    const tempArray = [...array];
    tempArray.splice(tempArray.map((x)=> {return x.id}).indexOf(removeIndex),1);
    const shuffled = tempArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  return (
    <div className="suggestions__container">
      {isLoading ? (
        <MainLoader />
      ) : (
        <>
          {getRandomItems(data.result, 3).map(
            (menuItem: menuItemModel, index: number) => {
              return (
                <SliderCard
                  name={menuItem.name}
                  image={menuItem.image}
                  price={menuItem.price}
                  id={menuItem.id}
                  description={menuItem.description}
                  specialTag={menuItem.specialTag}
                  category={menuItem.category}
                  key={index}
                />
              );
            }
          )}
        </>
      )}
    </div>
  );
}
