import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { SWIGGY_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const response = await fetch(SWIGGY_API+resId);
    const data = await response.json();
    // console.log(data);
    setResInfo(data);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const filterItems =
    resInfo?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards.filter(
      (itemCard) => {
        return (
          itemCard?.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  // console.log(filterItems);
  // console.log(menuItem);
  return (
    <div className="res-menu">
    
      <div className="text-center">
        <h1 className="font-bold my-5 text-center text-lg">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(" , ")} - {costForTwoMessage}
        </p>

        {filterItems.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
