import Link from "next/link";
import MenuItem from "./MenuItem";

const MenuGallery = ({ menuItems, btnText }) => {
  return (
    <div className="relative top-32 lg:top-96 pb-[200px] lg:pb-[500px] px-6 lg:px-32">
      <div className="lg:container">
        <div className="lg:-mt-24 min-h-[590px] z-30 mb-8 md:mb-4 xl:mb-16">
          {/* Grid of Menu Items */}
          <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[590px]">
            {menuItems.map((item, idx) => (
              <MenuItem key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-center">
          <Link href={"/menu"}>
            <button
              className="bg-text border border-text text-white px-8 py-4 font-primary font-medium 
              rounded-md tracking-wide hover:bg-transparent hover:text-text hover:border-nav uppercase"
            >
              {btnText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuGallery;
