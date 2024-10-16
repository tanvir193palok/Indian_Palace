import CheckoutSummary from "@/components/checkout/CheckoutSummary";
import FoodCategory from "@/components/menu/FoodCategory";
import Overlay from "@/components/Overlay";
import { categoriesData } from "@/data";

const MenuPage = ({ searchParams: { category } }) => {
  const categories = category ? [category] : categoriesData;

  return (
    <div className="relative container grid grid-cols-12 items-start pb-16 pt-4 gap-6 mb-32">
      <Overlay />
      <div className="col-span-8 grid grid-cols-3 gap-4 h-[75vh] overflow-y-auto hiddenScrollbar">
        {categories.map((category, idx) => (
          <FoodCategory key={idx} category={category} />
        ))}
      </div>

      <div className="col-span-4 sticky top-4">
        <CheckoutSummary />
      </div>
    </div>
  );
};

export default MenuPage;
