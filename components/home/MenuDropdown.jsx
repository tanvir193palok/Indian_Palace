"use client";

import { useDropdownMenu } from "@/app/(home)/hooks/useDropdownMenu";
import Dropdown from "../nav/Dropdown";

const MenuDropdown = () => {
  const { dropdownMenu } = useDropdownMenu();
  return (
    <div >
      {/* Dropdown positioned on top left corner */}
      {dropdownMenu && (
        <div className="absolute top-[138.5px] left-0 z-50">
          <Dropdown />
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
