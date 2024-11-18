import Image from "next/image";
import { useRouter } from "next/navigation";
import { menuData } from "@/data";

const CategoryData = ({ category, setActiveCategory }) => {
  const { menuItems } = menuData;
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/menu?category=${encodeURIComponent(category)}`);
    setActiveCategory(null);
  };

  return (
    <div
      className="px-[0px] lg:container lg:px-[100px]"
      onMouseLeave={() => setActiveCategory(null)}
    >
      <h3 className="flex justify-center uppercase tracking-widest font-secondary italic text-xl lg:text-2xl text-nav font-semibold lg:font-extrabold lg:pb-6">
        {category}
      </h3>

      <div className="flex lg:grid lg:grid-cols-4 gap-0 lg:gap-4 overflow-x-auto scrollbar-hide">
        {menuItems.map((item, index) => (
          <div key={index} className="min-w-[300px] p-2 lg:p-4 flex flex-col items-center">
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={500}
              className="w-50 h-60 object-cover mb-4 rounded-md"
            />
            <h4 className="text-heading font-primary font-medium lg:font-semibold tracking-wide text-sm lg:text-base uppercase pb-2">
              {item.name}
            </h4>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleRedirect}
          className="font-primary text-sm lg:text-base font-medium 
          tracking-wide hover:text-nav border-b border-transparent hover:border-b hover:border-nav uppercase mb-5 lg:mb-10"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default CategoryData;
