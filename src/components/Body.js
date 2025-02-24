import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() =>
            setRestaurantList((res) =>
              res.filter((res) => res.info.avgRating >= 4)
            )
          }
        >
          Top restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
