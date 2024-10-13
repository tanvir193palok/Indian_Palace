"use client";

import { useEffect } from "react";
import { useDropdownMenu } from "@/app/hooks/useDropdownMenu";

const Overlay = () => {
  const { dropdownMenu } = useDropdownMenu();

  useEffect(() => {
    if (dropdownMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [dropdownMenu]);

  return (
    <>
      {dropdownMenu && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20"></div>
      )}
    </>
  );
};

export default Overlay;
