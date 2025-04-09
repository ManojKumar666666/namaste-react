import { ITEMS_IMAGES_URL } from "../utils/constants";
const ItemsList = ({ items }) => {
  return (
    <div className="p-3">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 border-gray-200 flex justify-between p-2 m-2 text-left"
        >
          <div className=" w-9/12">
            <h3 className="font-bold text-lg py-2">{item.card.info.name}</h3>
            <h4>
              ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </h4>
            <p className="text-s">{item.card.info.description}</p>
          </div>
          <div className=" w-3/12 relative  h-32">
            <button className="absolute bg-black text-white bottom-2 right-15 rounded-lg px-2">
              Add +
            </button>
            <img
              className="h-32 w-[177px]"
              src={ITEMS_IMAGES_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemsList;
