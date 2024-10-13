import Image from "next/image";
import { menuData } from "@/data";
import Link from "next/link";

const CategoryData = ({ category, setActiveCategory }) => {
  const { menuItems } = menuData;

  return (
    <div
      className="container px-[100px]"
      onMouseLeave={() => setActiveCategory(null)}
    >
      <h3 className="flex justify-center uppercase tracking-widest font-secondary italic text-2xl text-nav font-extrabold pb-6">
        {category}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {menuItems.map((item, index) => (
          <div key={index} className="p-4 flex flex-col items-center">
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={500}
              className="w-50 h-60 object-cover mb-4 rounded-md"
            />
            <h4 className="text-heading font-primary font-semibold tracking-wide text-md uppercase pb-2">
              {item.name}
            </h4>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          href="#"
          className="font-primary font-medium 
      tracking-wide hover:text-nav border-b border-transparent hover:border-b hover:border-nav uppercase mb-10"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default CategoryData;
