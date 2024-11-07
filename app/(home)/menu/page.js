import CheckoutSummary from "@/components/checkout/CheckoutSummary";
import FoodCategory from "@/components/menu/FoodCategory";
import Overlay from "@/components/Overlay";
import { categoriesData } from "@/data";

const MenuPage = ({ searchParams: { category } }) => {
  const categories = category ? [category] : categoriesData;

  return (
    <div className="relative px-3 lg:px-0 lg:container grid gap-6 mb-14 lg:mb-32 pt-4">
      <Overlay />

      {/* Responsive layout for CheckoutSummary on top on small screens */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Checkout Summary: on top for small devices, right column on large */}
        <div className="col-span-1 lg:col-span-4 lg:order-2 lg:sticky lg:top-4 order-1">
          <CheckoutSummary />
        </div>

        {/* Food Category section: full width on small screens, left column on large */}
        <div className="col-span-1 lg:col-span-8 lg:order-1 lg:h-[75vh] lg:overflow-y-auto hiddenScrollbar order-2">
          {categories.map((category, idx) => (
            <FoodCategory key={idx} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
