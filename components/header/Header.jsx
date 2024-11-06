import LeftCornerLinks from "./LeftCornerLinks";
import RightCornerLinks from "./RightCornerLinks";

const Header = () => {
  return (
    <header className="bg-white py-2 lg:py-0">
      <div className="px-3 md:container flex items-center md:justify-between">
        <LeftCornerLinks />
        <div className="w-full flex text-nav relative justify-center font-primary font-extrabold text-center text-xl lg:text-7xl tracking-wide lg:tracking-[15px]">
          Indian Palace
        </div>
        <RightCornerLinks />
      </div>
    </header>
  );
};

export default Header;
