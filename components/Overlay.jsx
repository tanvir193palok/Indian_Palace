"use client";

import { useEffect } from "react";
import { useDropdownMenu } from "@/app/hooks/useDropdownMenu";

const Overlay = () => {
  const { dropdownMenu } = useDropdownMenu();

  useEffect(() => {
    if (dropdownMenu) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    };
  }, [dropdownMenu]);

  return (
    <>
      {dropdownMenu && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-20"></div>
      )}
    </>
  );
};

export default Overlay;
