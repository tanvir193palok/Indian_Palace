const OrderActions = ({ pickup, homeDelivery }) => {
  return (
    <div className="w-[430px] h-auto flex justify-between">
      <div>
        <p className="font-bold text-lg pb-4 tracking-wide flex justify-center text-gray-800">
          Pickup
        </p>
        {pickup ? (
          <div className="flex space-x-2">
            <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Accept
            </button>
            <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
              Reject
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

        {homeDelivery ? (
          <div className="flex space-x-2">
            <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Accept
            </button>
            <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
              Reject
            </button>
          </div>
        ) : (
          <p className="text-sm text-red-500">User want to Pickup</p>
        )}
      </div>
    </div>
  );
};

export default OrderActions;
