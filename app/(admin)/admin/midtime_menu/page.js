import Category from "@/components/admin/category/Category";
import { categoriesData } from "@/data";

const MidmenuPage = () => {
  return (
    <div className="p-4">
      <p className="flex justify-center pb-2 text-2xl font-semibold mb-6 text-nav border border-b-text">
        Categories Featured in Midtime Menu
      </p>

      <div className="space-y-4">
        {categoriesData.map((category, idx) => (
          <Category
            key={idx}
            name={category}
            isLast={idx === categoriesData.length - 1}
            link={`/admin/midtime_menu/${encodeURIComponent(category)}`}
          />
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <button
          className="bg-text w-full border border-text text-white px-8 py-4 font-primary font-medium 
              rounded-md tracking-wide hover:bg-transparent hover:text-text hover:border-nav uppercase"
        >
          Add new category
        </button>
      </div>
    </div>
  );
};

export default MidmenuPage;
