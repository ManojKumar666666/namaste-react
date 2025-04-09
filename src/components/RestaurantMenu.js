import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  const [count, setCount] = useState(0);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="text-center ">
      <h1 className="font-bold text-3xl my-3">{name}</h1>
      <h3 className="font-bold text-xl mb-2">
        {cuisines.join(",")}- {costForTwoMessage}
      </h3>
      {categories.map((cat, index) => (
        <RestaurantCategory
          data={cat.card?.card}
          key={cat.card?.card.title}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          setCount={setCount}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
