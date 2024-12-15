import OrderList from "@/components/admin/home/OrderList";
import SaleDetails from "@/components/admin/home/SaleDetails";
import { orderDetails } from "@/data";

const AdminPage = () => {
  //Fetch both new order and all recieved order data
  return (
    <div>
      <SaleDetails />
      <OrderList orderData={orderDetails} isNew={true} />
      <OrderList orderData={orderDetails} isNew={false} />
    </div>
  );
};

export default AdminPage;
