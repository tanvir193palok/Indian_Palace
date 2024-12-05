"use client";

import { useState } from "react";
import FoodCard from "./FoodCard";
import FoodModal from "./FoodModal";

const FoodCategory = ({ category, foodItems }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

  //Dummy data
  const foodData = foodItems ? foodItems : {
    name: "Murg Briyani",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus scelerisque viverra at id aenean scelerisque.",
    price: "6,50 €",
    imageSrc: "/menu/food3.jpg",
  };


  return (
    <div className="col-span-9 pb-10 lg:pb-20">
      <div className="flex flex-col justify-center items-center mb-4 lg:mb-8">
        <p className="mb-2 uppercase tracking-wide lg:tracking-widest font-secondary italic text-xl lg:text-3xl text-nav font-medium lg:font-extrabold pb-1 lg:pb-2 border-b-2 border-nav">
          {category}
        </p>
        <p className="font-lato text-sm lg:text-lg">Description / quote</p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        <FoodCard
          foodData={foodData}
          updateModal={setShowModal}
          updateModalInfo={setModalInfo}
        />
        <FoodCard
          foodData={foodData}
          updateModal={setShowModal}
          updateModalInfo={setModalInfo}
        />
        <FoodCard
          foodData={foodData}
          updateModal={setShowModal}
          updateModalInfo={setModalInfo}
        />
        <FoodCard
          foodData={foodData}
          updateModal={setShowModal}
          updateModalInfo={setModalInfo}
        />

        {showModal && (
          <div className="flex fixed top-0 left-0 w-full h-full items-center justify-center z-50 bg-black bg-opacity-70">
            <FoodModal modalInfo={modalInfo} showModal={setShowModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodCategory;
