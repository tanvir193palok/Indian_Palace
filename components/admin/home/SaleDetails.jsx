const SaleDetails = () => {
    const salesData = [
      {
        text: "Total Sessions",
        count: "888",
      },
      {
        text: "Total Orders",
        count: "100",
      },
      {
        text: "Total Sales",
        count: "9989",
      },
      {
        text: "Unique Visitors",
        count: "343",
      },
      {
        text: "Total Orders Today",
        count: "23",
      },
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 p-4">
        {salesData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-4 h-40 w-[220px]"
          >
            <h3 className="text-text text-center text-lg font-semibold">
              {item.text}
            </h3>
            <p className="text-nav text-2xl font-bold tracking-wider">{item.count}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default SaleDetails;
  