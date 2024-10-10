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
  const [activeCategory, setActiveCategory] = useState(null);
  const visibleCount = 5;
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  // Calculate the scrollbar width to prevent jump when scrolling is disabled
  useEffect(() => {
    const calculateScrollbarWidth = () => {
      const scrollDiv = document.createElement("div");
      scrollDiv.style.overflow = "scroll";
      document.body.appendChild(scrollDiv);
      setScrollbarWidth(scrollDiv.offsetWidth - scrollDiv.clientWidth);
      document.body.removeChild(scrollDiv);
    };
    calculateScrollbarWidth();
  }, []);

  // Disable scrolling when activeCategory is open and account for scrollbar width
  useEffect(() => {
    if (activeCategory) {
      document.body.style.overflow = "hidden"; // Disable scrolling
      document.body.style.paddingRight = `${scrollbarWidth}px`; // Prevent layout shift due to scrollbar removal
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
      document.body.style.paddingRight = ""; // Reset padding
    }

    return () => {
      document.body.style.overflow = ""; // Ensure scrolling is re-enabled when unmounting
      document.body.style.paddingRight = ""; // Reset padding
    };
  }, [activeCategory, scrollbarWidth]);

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

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateButtonVisibility);
      updateButtonVisibility();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", updateButtonVisibility);
      }
    };
  }, []);

  return (
    <nav
      className="w-full border-b-2 relative"
      onMouseLeave={() => setActiveCategory(null)}
    >
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
              >
                <Link
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className="relative px-3 py-3 whitespace-nowrap font-primary font-semibold text-md uppercase text-text transition rounded-md hover:bg-gray-200"
                  style={{ boxSizing: "border-box" }}
                >
                  <span className="transition-all pb-1 border-b-2 border-black border-opacity-0 group-hover:border-opacity-100">
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

      {activeCategory && (
        <>
          {/* Dropdown content below the navbar */}
          <div
            className="absolute left-0 w-full bg-white shadow-lg p-6 top-full transition-all duration-300 z-50"
            style={{
              transition: "max-height 0.3s ease-in-out",
              maxHeight: activeCategory ? "500px" : "0",
              overflow: "hidden",
            }}
          >
            <CategoryData
              category={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
