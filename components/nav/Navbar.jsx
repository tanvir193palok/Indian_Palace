"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import CategoryData from "./CategoryData";

const categories = [
  "Starters",
  "Supplements",
  "Indian Bread",
  "Vegetarian & Vegan",
  "Biryanis",
  "Tandoori Specialties",
  "Chicken",
  "Lamb",
  "Chili Specialties",
  "Fish & Prawns",
  "Duck",
  "Indian Palace Specialties",
  "Dessert",
  "Drinks",
];

const Navbar = () => {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null); // New state for active category
  const visibleCount = 5;

  const handleNext = () => {
    if (scrollRef.current) {
      const scrollAmount = (scrollRef.current.clientWidth / visibleCount) * 3;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handlePrevious = () => {
    if (scrollRef.current) {
      const scrollAmount = (scrollRef.current.clientWidth / visibleCount) * 3;
      scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Update button visibility based on scroll position
  useEffect(() => {
    const updateButtonVisibility = () => {
      if (scrollRef.current) {
        const atStart = scrollRef.current.scrollLeft === 0;
        const atEnd =
          scrollRef.current.scrollWidth - scrollRef.current.scrollLeft <=
          scrollRef.current.clientWidth;

        setShowLeftButton(!atStart);
        setShowRightButton(!atEnd);
      }
    };

    // Add event listener for scroll
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateButtonVisibility);
      updateButtonVisibility();
    }

    // Clean up the event listener on unmount
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", updateButtonVisibility);
      }
    };
  }, []);

  return (
    <nav className="w-full border-b-2 relative">
      <div className="flex justify-center items-center">
        {showLeftButton && (
          <button
            onClick={handlePrevious}
            className="px-[10px] rounded-full bg-white border-2 py-1 mb-1 hover:border-heading"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex w-[800px] overflow-hidden scrollbar-hide pb-2 mx-3"
        >
          <div className="flex space-x-5 py-3">
            {categories.map((category) => (
              <div
                className="relative group"
                key={category}
                onMouseEnter={() => setActiveCategory(category)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <Link
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className="relative px-3 py-3 whitespace-nowrap font-primary font-semibold text-md uppercase text-text transition rounded-md hover:bg-gray-200"
                >
                  <span className="transition pb-1 border-b-2 border-transparent hover:border-black">
                    {category}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {showRightButton && (
          <button
            onClick={handleNext}
            className="px-[10px] py-1 rounded-full bg-white border-2 mb-1 hover:border-heading"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
          </button>
        )}
      </div>

      {/* Dropdown content below the navbar */}
      {activeCategory && (
        <div className="absolute left-0 w-full bg-white shadow-lg p-6 top-full transition-all duration-300 z-50">
          <CategoryData />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
