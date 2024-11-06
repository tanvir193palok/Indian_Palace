import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const RightCornerLinks = () => {
  return (
    <div className="flex font-primary items-center space-x-4 lg:pr-6">
      <Link
        href="/checkout"
        className="flex text-center text-gray-700 hover:text-primary transition relative"
      >
        <div className="text-2xl text-text hover:text-nav">
          <FontAwesomeIcon icon={faShoppingBag} />
        </div>
        <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-heading font-primary font-bold text-md lg:text-xl">
          2
        </div>
      </Link>
      <Link
        href="/login"
        className="hidden lg:flex text-center hover:text-white transition relative"
      >
        <div className="font-primary font-semibold text-md text-text hover:text-nav leading-3 uppercase">
          Admin?
        </div>
      </Link>
    </div>
  );
};

export default RightCornerLinks;
