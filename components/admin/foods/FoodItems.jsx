"use client";

import { useState } from "react";
import FoodItem from "./FoodItem";
import FoodModal from "./FoodModal";

const FoodItems = ({ items, category }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

  const closeModal = () => {
    setShowModal(false);
    setModalInfo(null);
  };

  const addItem = () => {
    setShowModal(true);
  };

  return (
    <div className="p-4">
      <p className="flex justify-center pb-2 text-2xl font-semibold mb-6 text-nav">
        Appetizers in {decodeURIComponent(category)} Category
      </p>

      <div className="space-y-4">
        {items.map((food, idx) => (
          <FoodItem
            key={idx}
            food={food}
            isLast={idx === items.length - 1}
            setModalInfo={setModalInfo}
            showModal={setShowModal}
          />
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <button
          onClick={addItem}
          className="bg-text w-full border border-text text-white px-8 py-4 font-primary font-medium 
              rounded-md tracking-wide hover:bg-transparent hover:text-text hover:border-nav uppercase"
        >
          Add New Food Item
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
          onClick={closeModal}
        >
          <FoodModal modalInfo={modalInfo} closeModal={closeModal} />
        </div>
      )}
    </div>
  );
};

export default FoodItems;
