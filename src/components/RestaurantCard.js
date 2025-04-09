import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, areaName, cloudinaryImageId } =
    resData.info;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className=" w-[280px] m-4 p-4 bg-gray-200 ">
      <img
        className="rounded-2xl w-[250] h-[190]  "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}⭐</h4>
      <h4>{sla.deliveryTime} min</h4>
      <h3>{areaName}</h3>
      <h4>{loggedInUser}</h4>
    </div>
  );
};
export default RestaurantCard;
