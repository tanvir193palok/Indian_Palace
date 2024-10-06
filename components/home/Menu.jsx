import { menuData } from "@/data";
import MenuGallery from "./MenuGallery";

const Menu = () => {
  const { title, description, menuItems, btnText } = menuData;

  return (
    <section className="min-h-[780px] pt-28">
      {/* background */}
      <div
        className="h-[780px] bg-[url('/menu/bg.png')] 
    absolute w-full max-w-[1800px]"
      ></div>

      {/* text */}
      <div className="relative container z-10 top-72 lg:top-52">
        <div className="mx-auto px-32 flex flex-col items-center text-center">
          <h2 className="capitalize text-white max-w-[400px] text-center text-[36px] font-secondary font-bold pb-6">
            {title}
          </h2>
          <p className="text-white/70 capitalize mb-8 font-lato text-[18px]">
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
