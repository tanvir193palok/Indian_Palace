"use client";

import { useState } from "react";
import FoodCard from "./FoodCard";
import FoodModal from "./FoodModal";

const FoodCategory = ({ category }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

  //Dummy data
  const foodData = {
    name: "Murg Briyani",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus scelerisque viverra at id aenean scelerisque.",
    price: "6,50 €",
    imageSrc: "/menu/food3.jpg",
  };

  //Add method to fetch data based on category

  return (
    <div className="col-span-9 pb-20">
      <div className="flex flex-col justify-center items-center mb-8">
        <p className="mb-2 uppercase tracking-widest font-secondary italic text-3xl text-nav font-extrabold pb-2 border-b-2 border-nav">
          {category}
        </p>
        <p className="font-lato text-lg">Description / quote</p>
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
          <div className="hidden md:flex fixed top-0 left-0 w-full h-full items-center justify-center z-50 bg-black bg-opacity-70">
            <FoodModal modalInfo={modalInfo} showModal={setShowModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodCategory;
