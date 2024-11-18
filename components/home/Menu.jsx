import { menuData } from "@/data";
import MenuGallery from "./MenuGallery";

const Menu = () => {
  const { title, description, menuItems, btnText } = menuData;

  return (
    <section className="min-h-[780px] md:pt-16 lg:pt-28">
      {/* background */}
      <div
        className="h-[600px] lg:h-[780px] bg-[url('/menu/bg.png')] 
    absolute w-full max-w-[1800px]"
      ></div>

      {/* text */}
      <div className="relative px-3 md:px-8 lg:container z-10 top-28 md:top-40 lg:top-52">
        <div className="flex flex-col lg:px-32 items-center text-center">
          <h2 className="capitalize text-white max-w-[400px] text-center text-[24px] lg:text-[36px] font-secondary font-bold pb-3 lg:pb-6">
            {title}
          </h2>
          <p className="text-white/70 capitalize mb-8 font-lato text-[14px] lg:text-[18px]">
            {description}
          </p>
        </div>
      </div>

      {/* menu gallery */}
      <MenuGallery menuItems={menuItems} btnText={btnText} />
    </section>
  );
};

export default Menu;
