"use client";

import { useState } from "react";

const ClickActions = () => {
  const [quantity, setQuantity] = useState(1);

  // Fucntion for increment and decrement of quantity
  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  //Function for add to cart functionality
  const handleCart = () => {
    console.log("Food added to cart");
  };

  return (
    <div className="w-full pb-3 flex flex-row justify-between items-center gap-6">
      {/* Quantity Selector */}
      <div className="flex  items-center border border-gray-300 rounded-md overflow-hidden">
        <button
          onClick={() => handleQuantityChange("decrement")}
          className="px-4 py-2 bg-gray-200 text-lg font-bold hover:bg-gray-300"
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          readOnly
          className="w-12 text-center py-2 outline-none border-l border-r border-gray-300"
        />
        <button
          onClick={() => handleQuantityChange("increment")}
          className="px-4 py-2 bg-gray-200 text-lg font-bold hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleCart}
        className="bg-text border w-[70%] border-text text-white py-3 font-primary font-medium 
              rounded-md tracking-wide hover:bg-transparent hover:text-text hover:border-nav uppercase"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ClickActions;
