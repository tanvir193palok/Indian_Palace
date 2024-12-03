import ClickActions from "./ClickActions";

const FoodItem = ({ name, description, price, isLast }) => {
  return (
    <div
      className={`flex items-center justify-between pb-4 ${
        isLast ? "" : "border-b-2"
      }`}
    >
      <div>
        <p className="text-lg font-medium mb-3">{name}</p>
        <p className="text-sm text-gray-500 mb-1">{description}</p>
        <p className="text-lg text-heading">${price}</p>
      </div>

      {/* Edit and delete button */}
      <ClickActions />
    </div>
  );
};

export default FoodItem;
