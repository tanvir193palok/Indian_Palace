"use client";

import { useState } from "react";
import Category from "./Category";
import MenuModal from "./MenuModal";

const MenuCategories = ({ categories, isMainMenu }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

  const handleAddNewCategory = () => {
    setModalInfo(null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalInfo(null);
  };

  return (
    <div className="p-4">
      <p className="flex justify-center pb-2 text-2xl font-semibold mb-6 text-nav">
        {isMainMenu
          ? "Categories Featured in Main Menu"
          : "Categories Featured in Midtime Menu"}
      </p>
      <div className="space-y-4">
        {categories.map((category, idx) => (
          <Category
            key={idx}
            name={category}
            isLast={idx === categories.length - 1}
            link={`/admin/main_menu/${encodeURIComponent(category)}`}
            setModalInfo={setModalInfo}
            showModal={setShowModal}
          />
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <button
          onClick={handleAddNewCategory}
          className="bg-text w-full border border-text text-white px-8 py-4 font-primary font-medium 
              rounded-md tracking-wide hover:bg-transparent hover:text-text hover:border-nav uppercase"
        >
          Add new category
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
          <MenuModal modalInfo={modalInfo} closeModal={closeModal} />
        </div>
      )}
    </div>
  );
};

export default MenuCategories;
