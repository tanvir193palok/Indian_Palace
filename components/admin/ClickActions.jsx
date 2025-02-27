"use client";

const ClickActions = ({ setModalInfo, content, showModal }) => {
  const handleEdit = () => {
    showModal(true);
    setModalInfo(content);

    // Implement your edit logic here
  };

  const handleDelete = () => {
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
