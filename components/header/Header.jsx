import LeftCornerLinks from "./LeftCornerLinks";
import RightCornerLinks from "./RightCornerLinks";

const Header = () => {
  return (
    <header className="bg-white pb-2">
      <div className="container flex items-center justify-between">
        <LeftCornerLinks />
        <div className="w-full text-nav relative flex justify-center font-primary font-extrabold text-center text-7xl tracking-[15px]">
          Indian Palace
        </div>
        <RightCornerLinks />
      </div>
    </header>
  );
};

export default Header;
