import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "./Dropdown";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-text">
      <div className="flex">
        <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group">
          <span className="text-white">
            <FontAwesomeIcon icon={faBars} />
          </span>
          <span className="font-primary font-semibold text-md ml-6 text-white uppercase tracking-wide">
            All Categories
          </span>

          <Dropdown />
        </div>

        <div className="flex justify-center md:justify-start md:pl-32 flex-grow py-5">
          <div className="flex items-center font-primary font-medium text-md space-x-10 uppercase tracking-wide">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link
              href="/menu"
              className="hover:text-white transition"
            >
              Menu
            </Link>
            <Link
              href="/desert"
              className="hover:text-white transition"
            >
              Desert
            </Link>
            <Link
              href="/new-arrival"
              className="hover:text-white transition"
            >
              New Arrival
            </Link>
            <Link href="/discount" className="hover:text-white transition">
              Discount
            </Link>
            <Link href="/location" className="hover:text-white transition">
              Location
            </Link>
            <Link href="/about" className="hover:text-white transition">
              About us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
