import FoodItem from "@/components/admin/category/FoodItem";
import { FoodData } from "@/data";

const MainMenuFoods = ({ params: { category } }) => {
  return (
    <div className="p-4">
      <p className="flex justify-center pb-2 text-2xl font-semibold mb-6 text-nav border border-b-text">
        Appetizers in {decodeURIComponent(category)} Category
      </p>

      <div className="space-y-4">
        {FoodData.map((food, idx) => (
          <FoodItem
            key={idx}
            name={food.name}
            description={food.description}
            price={food.price}
            isLast={idx === FoodData.length - 1}
          />
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <button
          className="bg-text w-full border border-text text-white px-8 py-4 font-primary font-medium 
              rounded-md tracking-wide hover:bg-transparent hover:text-text hover:border-nav uppercase"
        >
          Add New Food Item
        </button>
      </div>
    </div>
  );
};

export default MainMenuFoods;
