import Link from "next/link";
import OrderActions from "./OrderActions";

const Order = ({ order, isNew }) => {
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
      {isNew && (
        <OrderActions
          pickup={order?.pickup}
          homeDelivery={order?.homeDelivery}
        />
      )}
    </div>
  );
};

export default Order;
