"use client";

import Link from "next/link";

const Order = ({ order }) => {
  return (
    <div className="bg-white flex justify-between shadow-md rounded-lg p-6 border border-gray-200">
      {/* User Info */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 tracking-wide">
          {order.name}
        </h3>
        <p className="text-gray-600">
          <strong>Location:</strong> {order.location}
        </p>
        <p className="text-gray-600">
          <strong>Phone:</strong> {order.phone}
        </p>
        <p className="text-gray-600">
          <strong>Email:</strong> {order.email}
        </p>
      </div>

      {/* Delivery Type */}
      <div className="flex justify-between items-center mb-4">
        <Link
          href={`/admin/order?orderId=${order?.id}`}
          className="w-40 text-lg text-nav hover:underline"
        >
          View Order
        </Link>
      </div>

      {/* Accept/Reject Buttons => On accepting or rejecting any request send email to users */}
      <div className="w-[430px] h-auto flex justify-between">
        <div>
          <p className="font-bold text-lg pb-4 tracking-wide flex justify-center text-gray-800">
            Pickup
          </p>
          {order?.pickup ? (
            <div className="flex space-x-2">
              <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Reject
              </button>
              <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                Accept
              </button>
            </div>
          ) : (
            <p className="text-sm text-red-500">User want Home Delivery</p>
          )}
        </div>

        <div>
          <p className="font-bold text-lg pb-4 tracking-wide flex justify-center text-gray-800">
            Home Delivery
          </p>

          {order?.homeDelivery ? (
            <div className="flex space-x-2">
              <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Reject
              </button>
              <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                Accept
              </button>
            </div>
          ) : (
            <p className="text-sm text-red-500">User want to Pickup</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
