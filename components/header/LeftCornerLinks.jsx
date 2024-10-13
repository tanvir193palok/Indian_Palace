"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDropdownMenu } from "@/app/hooks/useDropdownMenu";


const LeftCornerLinks = () => {
  const { dropdownMenu, setDropdownMenu } = useDropdownMenu();

  const toggleDropdownMenu = () => {
    setDropdownMenu((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <div
        className="px-8 w-40 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden"
        onClick={toggleDropdownMenu}
      >
        <div className="flex items-center text-text hover:text-nav">
          <FontAwesomeIcon icon={dropdownMenu ? faXmark : faBars} />
          <span className="w-full uppercase ml-2 font-primary font-semibold text-md text-text hover:text-nav">
            {dropdownMenu ? "Close" : "Menu"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftCornerLinks;
