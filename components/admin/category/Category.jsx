"use client";

import Link from "next/link";

const Category = ({ name, isLast, link }) => {
  const handleEdit = () => {
    console.log(`Edit clicked for category: ${name}`);
    // Implement your edit logic here
  };

  const handleDelete = () => {
    console.log(`Delete clicked for category: ${name}`);
    // Implement your delete logic here
  };

  return (
    <div
      className={`flex items-center justify-between pb-2 ${
        isLast ? "" : "border-b-2"
      }`}
    >
      <p className="text-lg w-[200px]">{name}</p>

        <Link href={link} className="w-40 text-lg text-nav hover:underline">
          Explore Foods
        </Link>

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
    </div>
  );
};

export default Category;
