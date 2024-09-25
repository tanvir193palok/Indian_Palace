const DeliveryTimes = () => {
  return (
    <div className="border border-nav p-4 rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">Delivery Times</h3>
      <table className="w-full text-left border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Day</th>
            <th className="border border-gray-300 px-4 py-2">Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Monday</td>
            <td className="border border-gray-300 px-4 py-2">
              11.30am-1.30pm and 5.00pm-9.30pm
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">Tuesday</td>
            <td className="border border-gray-300 px-4 py-2">Closed</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Wednesday</td>
            <td className="border border-gray-300 px-4 py-2">
              11.30am-1.30pm and 5.30pm-9.30pm
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">Thursday</td>
            <td className="border border-gray-300 px-4 py-2">
              11.30am-1.30pm and 5.30pm-9.30pm
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Friday</td>
            <td className="border border-gray-300 px-4 py-2">
              11.30am-1.30pm and 5.30pm-9.30pm
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">Saturday</td>
            <td className="border border-gray-300 px-4 py-2">
              11.30am-1.30pm and 5.30pm-9.30pm
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Sunday</td>
            <td className="border border-gray-300 px-4 py-2">
              11.30am-1.30pm and 5.30pm-9.30pm
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryTimes;
