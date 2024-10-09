import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white pb-2">
      <div className="container flex items-center justify-between">
        <div className="w-full text-nav relative flex justify-center font-primary font-extrabold text-center text-7xl tracking-[15px]">
          Indian Palace
        </div>
        <div className="flex font-primary items-center space-x-4 pr-6">
          <Link
            href="/checkout"
            className="flex text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faShoppingBag} color="rgb(79, 97, 79)" />
            </div>
            <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-heading font-primary font-bold text-xl">
              2
            </div>
          </Link>
          <Link
            href="#"
            className="text-center hover:text-white transition relative"
          >
            <div className="text-2xl">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="font-primary font-semibold text-lg text-text hover:text-nav leading-3">
              Admin?
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
