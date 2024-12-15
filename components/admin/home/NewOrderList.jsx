import Order from "./Order";
import { orderDetails } from "@/data";

const NewOrderList = () => {
  return (
    <div className="p-4 space-y-6">
      {orderDetails.map((ord) => (
        <Order order={ord} key={ord?.id} />
      ))}
    </div>
  );
};

export default NewOrderList;
