import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log(restaurantList)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(SWIGGY_API);
    const data = await response.json();

    setFilteredRestaurant(
      data?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurantList(
      data?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (restaurantList.length === 0) {
    return <Shimmer />;
  }
  if (filteredRestaurant.length === 0) {
    return (
      <div className="not-found">
        <p>No results found for "{searchText}"</p>
        <Link to={"/"}>Go back</Link>
      </div>
    );
  }
  return (
    <div className="">
      <div className="flex">
        <div className="search">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            className="p-3 m-4 my-2 border border-black rounded-lg"
          />
          <button
            className="bg-yellow-600 text-white hover:bg-slate-800 p-3 m-4 my-2 border rounded-lg"
            onClick={() => {
              const filteredRestaurant = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <button
          className="p-2 m-4 my-2 border border-black rounded-lg bg-red-700 text-white"
          onClick={() => {
            const filteredRestaurant = resList.filter(
              (res) => res.info.avgRating > 4.0
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="flex flex-wrap  sm:w-[100%] ">
        {filteredRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
