import OrderActions from "@/components/admin/home/OrderActions";
import OrderDetails from "@/components/admin/home/OrderDetails";
import { orderDetails } from "@/data";

const OrderDetailsPage = ({ searchParams: { orderId } }) => {
  const orderIdAsInt = parseInt(orderId, 10); 
  
  return (
    <div className="p-6">
      <h1 className="flex justify-center text-2xl font-semibold mb-8">
        Order Details
      </h1>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-nav text-white text-lg tracking-wider">
          <tr>
            <th className="border border-gray-300 px-4 py-4 text-left">
              Food Details
            </th>
            <th className="border border-gray-300 px-4 py-4 text-left">
              Special Request
            </th>
            <th className="border border-gray-300 px-4 py-4 text-left">
              Quantity
            </th>
            <th className="border border-gray-300 px-4 py-4 text-left">
              Total Price
            </th>
          </tr>
        </thead>

        <OrderDetails order={orderDetails[orderIdAsInt]?.items} />
      </table>

      <div className="flex justify-end p-6">
        <OrderActions
          pickup={orderDetails[orderId]?.pickup}
          homeDelivery={orderDetails[orderId]?.homeDelivery}
        />
      </div>
    </div>
  );
};

export default OrderDetailsPage;
