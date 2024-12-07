"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const FoodModal = ({ modalInfo, closeModal }) => {
  const [name, setName] = useState(modalInfo ? modalInfo.name : null);
  const [description, setDescription] = useState(
    modalInfo ? modalInfo.description : null
  );
  const [price, setPrice] = useState(modalInfo ? modalInfo.price : null);
  const [imageSrc, setImageSrc] = useState(
    modalInfo ? modalInfo.imageSrc : "/noImage.jpg"
  );

  const [errors, setErrors] = useState({});

  const handleSave = () => {
    const newErrors = {};

    if (!name) newErrors.name = "Name is required.";
    if (!description) newErrors.description = "Description is required.";
    if (!price) newErrors.price = "Price is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); 

    // Apply logic to save the data on the backend
    console.log({
      name,
      description,
      price,
      imageSrc,
    });

    closeModal();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageSrc(imageURL);
    }
  };

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center pb-4 border-b">
        <h2 className="text-xl font-semibold text-nav uppercase">
          {modalInfo ? "Edit Food Item" : "Add new Food item"}
        </h2>
        <button
          className="text-lg border-2 border-text px-[10px] py-[3px] rounded-full hover:bg-text text-text  hover:text-white"
          onClick={closeModal}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row mt-6 space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="flex-shrink-0">
          <Image
            src={imageSrc}
            alt="image"
            width={300}
            height={200}
            className="w-[300px] h-[300px] object-cover rounded-md mb-2"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2 w-full border border-gray-300 rounded-md px-2 py-1"
          />
        </div>

        {/* Right Side: Editable Text Fields */}
        <div className="flex-grow">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-2 py-1"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-2 py-1"
              rows="4"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-2 py-1"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price}</p>
            )}
          </div>
        </div>
      </div>

      {/* Save Button */}
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

export default FoodModal;
