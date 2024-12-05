
import FoodItems from "@/components/admin/FoodItems";
import { FoodData } from "@/data";

const MidtimeMenuFoods = ({ params: { category } }) => {
  //Fetch foodData by category
  return (
    <>
      <FoodItems items={FoodData} category={category} />
    </>
  );
};

export default MidtimeMenuFoods;
