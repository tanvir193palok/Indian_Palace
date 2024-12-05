"use client";

const ClickActions = ({ setModalInfo, food, showModal }) => {
  const handleEdit = () => {
    console.log(`Edit clicked for category: ${name}`);
    showModal(true);
    setModalInfo(food);
    
    // Implement your edit logic here
  };

  const handleDelete = () => {
    console.log(`Delete clicked for category: ${name}`);
    // Implement your delete logic here
  };

  return (
    <div className="space-x-2">
      <button
        onClick={handleEdit}
        className="bg-blue-500 w-28 text-white px-3 py-2 rounded hover:bg-blue-600"
      >
        EDIT
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-500 w-28 text-white px-3 py-2 rounded hover:bg-red-600"
      >
        DELETE
      </button>
    </div>
  );
};

export default ClickActions;
