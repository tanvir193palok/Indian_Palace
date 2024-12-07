"use client";

import { useState } from "react";

const MenuModal = ({ modalInfo, closeModal }) => {
  const [name, setName] = useState(modalInfo ? modalInfo.name : null);
  const [errors, setErrors] = useState("");

  const handleSave = () => {
    if (!name) {
      setErrors("Name is required.");
      return;
    }

    closeModal();
  };

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center pb-4 border-b">
        <h2 className="text-xl font-semibold text-nav">
          {modalInfo ? "Edit Category" : "Add New Category"}
        </h2>
        <button
          className="text-lg border-2 border-text px-[10px] py-[3px] rounded-full hover:bg-text text-text hover:text-white"
          onClick={closeModal}
        >
          X
        </button>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">
          Category Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-2 py-1 mt-2"
        />
        {errors && <p className="text-red-500 text-sm">{errors}</p>}
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleSave}
          className="bg-nav text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-nav font-medium"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default MenuModal;
