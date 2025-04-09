import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  // const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9825102&lng=77.7379943&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurantList(
      () =>
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    setFilteredRestaurantList(
      () =>
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
  };
  const { loggedInUser, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>You are Offline, Please check your internet connection!!!!</h1>;
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="p-4 m-4">
          <input
            type="text"
            placeholder="enter"
            className="border mr-2 px-2 "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-300 px-2 cursor-pointer rounded mr-2"
            onClick={() => {
              const filteredList = filteredRestaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setRestaurantList(() => filteredList);
            }}
          >
            search
          </button>
          <button
            className="bg-blue-300 px-2 cursor-pointer rounded  "
            onClick={() =>
              setRestaurantList((res) =>
                res.filter((res) => res.info.avgRating >= 4.3)
              )
            }
          >
            Top restaurants
          </button>

          <label className="ml-6">User : </label>
          <input
            className=" px-2 border border-black  "
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap px-2 ">
        {restaurantList.map((restaurant) => (
          <Link
            to={"restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
