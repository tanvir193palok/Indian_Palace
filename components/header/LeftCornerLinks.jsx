"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDropdownMenu } from "@/app/(home)/hooks/useDropdownMenu";

const LeftCornerLinks = () => {
  const { dropdownMenu, setDropdownMenu } = useDropdownMenu();

  const toggleDropdownMenu = () => {
    setDropdownMenu((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <div
        className="lg:px-8 lg:w-40 lg:py-4 bg-primary flex items-center cursor-pointer relative group"
        onClick={toggleDropdownMenu}
      >
        <div className="flex text-2xl lg:text-base items-center text-text hover:text-nav">
          <FontAwesomeIcon icon={dropdownMenu ? faXmark : faBars} />
          <span className="w-full hidden lg:block uppercase ml-2 font-primary font-semibold text-md text-text hover:text-nav">
            {dropdownMenu ? "Close" : "Menu"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftCornerLinks;
