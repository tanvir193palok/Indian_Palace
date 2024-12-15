import Image from "next/image";

const OrderDetails = ({ order }) => {
  // Helper function to add line breaks after every 40 characters
  const formatText = (text) => {
    return text.match(/.{1,20}/g).join("\n");
  };

  return (
    <tbody>
      {order?.map((item) => (
        <tr key={item.id} className="odd:bg-white even:bg-gray-50">
          <td className="border border-gray-300 px-4 py-2 flex items-center space-x-4">
            <Image
              width={300}
              height={300}
              src={item.image}
              alt={item.name}
              className="w-[150px] h-[150px] rounded object-cover"
            />
            <div>
              <p className=" font-semibold">{item.name}</p>
              <p className="text-heading font-bold">
                Price: ${item.price.toFixed(2)}
              </p>
            </div>
          </td>
          <td
            className="border text-md border-gray-300 px-4 py-2 whitespace-pre-wrap w-[300px]"
            style={{ wordBreak: "break-word" }}
          >
            {item?.specialRequest ? formatText(item.specialRequest) : "None"}
          </td>
          <td className="border text-lg font-bold text-nav border-gray-300 px-4 py-2">
            X {item.quantity}
          </td>
          <td className="border text-heading text-lg border-gray-300 px-4 py-2 font-bold">
            ${item.total.toFixed(2)}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default OrderDetails;
