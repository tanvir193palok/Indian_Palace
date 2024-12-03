import Link from "next/link";
import ClickActions from "./ClickActions";

const Category = ({ name, isLast, link }) => {
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

      {/* Edit and delete button */}
      <ClickActions />
    </div>
  );
};

export default Category;
