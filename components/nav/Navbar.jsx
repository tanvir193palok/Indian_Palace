import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "./Dropdown";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-text font-title">
      <div className="c flex">
        <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group">
          <span className="text-white">
            <FontAwesomeIcon icon={faBars} />
          </span>
          <span className="capitalize font-primary font-semibold ml-6 text-white">All Categories</span>

          {/* Dropdown */}
          <Dropdown />
        </div>

        <div className="flex justify-center md:justify-start md:pl-32 flex-grow py-5">
          <div className="flex items-center font-primary font-semibold space-x-10 capitalize">
            <a
              href="index.html"
              className="hover:text-white transition"
            >
              Home
            </a>
            <a
              href="pages/shop.html"
              className="hover:text-white transition"
            >
              Menu
            </a>
            <a
              href="pages/shop.html"
              className="hover:text-white transition"
            >
              Discount
            </a>
            <a
              href="pages/shop.html"
              className="hover:text-white transition"
            >
              New Arrival
            </a>
            <a href="#" className="hover:text-white transition">
              Discount
            </a>
            <a href="#" className="hover:text-white transition">
              Location
            </a>
            <a href="#" className="hover:text-white transition">
              About us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
