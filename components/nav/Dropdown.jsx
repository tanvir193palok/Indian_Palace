"use client";

import { useDropdownMenu } from "@/app/hooks/useDropdownMenu";
import Link from "next/link";

const Dropdown = () => {
  const { setDropdownMenu } = useDropdownMenu();

  return (
    <div
      className="absolute container font-primary font-medium text-md left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-100
   transition duration-300 visible w-[400px] uppercase"
      style={{ top: "100%" }}
    >
      <Link
        href="/"
        onClick={(prev) => setDropdownMenu(!prev)}
        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
      >
        <span className="ml-6 text-text">Home</span>
      </Link>

      <Link
        href="/menu"
        onClick={(prev) => setDropdownMenu(!prev)}
        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
      >
        <span className="ml-6 text-text">menu</span>
      </Link>

      <Link
        href="/menu?category=New Arrival"
        onClick={(prev) => setDropdownMenu(!prev)}
        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
      >
        <span className="ml-6 text-gray-600">New Arrival</span>
      </Link>

      <Link
        href="/menu?category=Discover Discount"
        onClick={(prev) => setDropdownMenu(!prev)}
        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
      >
        <span className="ml-6 text-gray-600">Discover Discount</span>
      </Link>

      <Link
      href="/reservation"
      onClick={(prev) => setDropdownMenu(!prev)}
      className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
    >
      <span className="ml-6 text-gray-600">Reservations</span>
    </Link>

      <Link
        href="/location"
        onClick={(prev) => setDropdownMenu(!prev)}
        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
      >
        <span className="ml-6 text-gray-600">Find us</span>
      </Link>

      <Link
        href="/about"
        onClick={(prev) => setDropdownMenu(!prev)}
        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
      >
        <span className="ml-6 text-gray-600">About us</span>
      </Link>
    </div>
  );
};

export default Dropdown;
