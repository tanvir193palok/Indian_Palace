import CheckoutSummary from "@/components/checkout/CheckoutSummary";
import FoodCategory from "@/components/menu/FoodCategory";
import Overlay from "@/components/Overlay";
import { categoriesData } from "@/data";

const MidtimeMenuPage = () => {
  console.log(categoriesData);
  // Fetch food items based on the categories
  const foodItems = {};
  
  return (
    <div className="relative px-3 lg:px-14 grid gap-6 mb-14 lg:mb-32 pt-4">
      <Overlay />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="col-span-1 lg:col-span-4 lg:order-2 lg:sticky lg:top-4 order-1">
          <CheckoutSummary />
        </div>

        <div className="col-span-1 lg:col-span-8 lg:order-1 lg:h-[75vh] lg:overflow-y-auto hiddenScrollbar order-2">
          {categoriesData.map((category, idx) => (
            <FoodCategory
              key={idx}
              category={category}
              foodItems={foodItems[category]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MidtimeMenuPage;
