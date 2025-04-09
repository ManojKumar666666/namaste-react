import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex, setCount }) => {
  const handleAccordian = () => {
    setShowIndex();
    setCount((c) => c++);
  };

  return (
    <div>
      <div className="w-6/12 bg-gray-50  mx-auto my-3 p-3  shadow-lg">
        <div className="flex justify-between" onClick={handleAccordian}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          {showItems ? <span>⬆️</span> : <span>⬇️</span>}
        </div>
        {showItems && <ItemsList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
