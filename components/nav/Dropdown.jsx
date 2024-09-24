import Image from "next/image";
import Link from "next/link";

const Dropdown = () => {
  return (
    <div
      className="absolute font-primary font-medium text-md left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0
   group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px] uppercase"
    >
      <Link
        href="/shop?category=Home Furniture"
        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
      >
        <Image
          src="/assets/images/icons/sofa.svg"
          width={40}
          height={40}
          alt="sofa"
          className="w-5 h-5 object-contain"
        />
        <span className="ml-6 text-gray-600">Home Furniture</span>
      </Link>
      <Link
        href="/shop?category=Gym Accessories"
        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
      >
        <Image
          src="/assets/images/icons/terrace.svg"
          width={40}
          height={40}
          alt="terrace"
          className="w-5 h-5 object-contain"
        />
        <span className="ml-6 text-gray-600">Gym Accessories</span>
      </Link>
      <Link
        href="/shop?category=Office Furniture"
        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
      >
        <Image
          src="/assets/images/icons/bed.svg"
          width={40}
          height={40}
          alt="bed"
          className="w-5 h-5 object-contain"
        />
        <span className="ml-6 text-gray-600">Office Furniture</span>
      </Link>
      <Link
        href="/shop?category=Music Accessories"
        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
      >
        <Image
          src="/assets/images/icons/office.svg"
          width={40}
          height={40}
          alt="Outdoor"
          className="w-5 h-5 object-contain"
        />
        <span className="ml-6 text-gray-600">Music Accessories</span>
      </Link>
      <Link
        href="/shop?category=Laptop Accessories"
        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
      >
        <Image
          src="/assets/images/icons/outdoor-cafe.svg"
          width={40}
          height={40}
          alt="outdoor"
          className="w-5 h-5 object-contain"
        />
        <span className="ml-6 text-gray-600">Laptop Accessories</span>
      </Link>
      <Link
        href="/shop?category=Fashion"
        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
      >
        <Image
          src="/assets/images/icons/bed-2.svg"
          width={40}
          height={40}
          alt="Mattress"
          className="w-5 h-5 object-contain"
        />
        <span className="ml-6 text-gray-600">Fashion</span>
      </Link>
    </div>
  );
};

export default Dropdown;
