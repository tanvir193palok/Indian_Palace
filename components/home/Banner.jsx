"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { bannersData } from "@/data";

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  // Function to navigate between banners
  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % bannersData.length);
  };

  const prevBanner = () => {
    setCurrentBanner(
      (prev) => (prev - 1 + bannersData.length) % bannersData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextBanner();
    }, 10000); 
  
    return () => clearInterval(interval); 
  }, [currentBanner]);
  
  const { image, title, description } = bannersData[currentBanner];

  return (
    <div className="flex relative">
      {/* Left Text Section */}
      <div className="flex flex-col justify-center bg-gray-50 w-[40%] p-12 pl-20 relative z-10">
        <h1
          className="text-3xl font-secondary tracking-widest mb-6 uppercase"
          style={{ wordSpacing: "4px" }}
        >
          {title}
        </h1>
        <p className="font-lato text-lg mb-6 text-text1">{description}</p>
        <div className="mt-10 mb-10">
          <Link
            href="/menu"
            className="border border-text text-black font-primary tracking-wide px-8 py-4 font-medium rounded-md hover:bg-text hover:text-white uppercase"
          >
            View our menu
          </Link>
        </div>
      </div>

      {/* Right Image Section */}
      <div
        className="w-[60%] h-[510px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay for the background image */}

      </div>

      <div className="absolute top-1/2 left-2 z-30 transform -translate-y-1/2  hover:border-2 hover:border-heading px-2">
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="text-heading text-4xl cursor-pointer hover:text-nav"
          onClick={prevBanner}
        />
      </div>

      <div className="absolute top-1/2 right-2 z-30 transform -translate-y-1/2 hover:border-2 hover:border-heading px-2">
        <FontAwesomeIcon
          icon={faCaretRight}
          className="text-heading text-4xl cursor-pointer hover:text-nav"
          onClick={nextBanner}
        />
      </div>
    </div>
  );
};

export default Banner;
