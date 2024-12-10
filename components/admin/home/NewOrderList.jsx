import Order from "./Order";

const NewOrderList = () => {
  const orders = [
    {
      id: 1,
      name: "John Doe",
      location: "New York, USA",
      phone: "+1 123 456 7890",
      email: "johndoe@example.com",
      pickup: false,
      homeDelivery: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      location: "Los Angeles, USA",
      phone: "+1 987 654 3210",
      email: "janesmith@example.com",
      pickup: true,
      homeDelivery: true,
    },
    {
      id: 3,
      name: "Sjsj Smith",
      location: "Los Angeles, USA",
      phone: "+1 987 654 3210",
      email: "janesmith@example.com",
      pickup: true,
      homeDelivery: false,
    },
  ];

  return (
    <div className="p-4 space-y-6">
      {orders.map((ord) => (
        <Order order={ord} key={ord?.id} />
      ))}
    </div>
  );
};

export default NewOrderList;
