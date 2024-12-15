"use client";

import { useState } from "react";
import Order from "./Order";

const OrderList = ({ orderData, isNew }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedOrders = showAll ? orderData : orderData.slice(0, 2);

  return (
    <div className="py-10">
      <p className="flex justify-center text-2xl font-semibold text-nav font-secondary tracking-widest pb-2 uppercase">
        {isNew ? "New Orders" : "Received Orders"}
      </p>

      <div className="p-4 space-y-2">
        {displayedOrders.map((ord) => (
          <Order order={ord} key={ord?.id} isNew={isNew} />
        ))}
      </div>

      {orderData.length > 2 && (
        <div className="flex justify-center mt-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-blue-600 text-white uppercase tracking-wide rounded-lg hover:bg-blue-700"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderList;
