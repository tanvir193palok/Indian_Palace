import Image from "next/image";
import ClickActions from "./ClickActions";

const FoodItem = ({ food, isLast, setModalInfo, showModal }) => {
  const { name, description, price, imageSrc } = food;

  return (
    <div
      className={`flex items-center justify-between pb-4 ${
        isLast ? "" : "border-b-2"
      }`}
    >
      {/* Food Image */}
      <div className="flex-shrink-0 w-40 h-30 mr-4">
        <Image
          src={imageSrc}
          width={100}
          height={100}
          alt={name}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Food Details */}
      <div className="flex-1">
        <p className="text-lg font-medium mb-3">{name}</p>
        <p className="text-sm text-gray-500 mb-1 w-[400px]">{description}</p>
        <p className="text-lg text-heading">${price}</p>
      </div>

      {/* Edit and Delete Buttons */}
      <ClickActions setModalInfo={setModalInfo} food={food} showModal={showModal} />
    </div>
  );
};

export default FoodItem;
