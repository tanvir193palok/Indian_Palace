import FoodItems from "@/components/admin/foods/FoodItems";
import { FoodData } from "@/data";

const MainMenuFoods = ({ params: { category } }) => {
  //Fetch foodData by category
  return (
    <>
      <FoodItems items={FoodData} category={category} />
    </>
  );
};

export default MainMenuFoods;
