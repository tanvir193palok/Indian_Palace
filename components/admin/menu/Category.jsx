import Link from "next/link";
import ClickActions from "../ClickActions";

const Category = ({ name, isLast, link, setModalInfo, showModal }) => {
  return (
    <div
      className={`flex items-center justify-between pb-2 ${
        isLast ? "" : "border-b-2"
      }`}
    >
      <p className="text-lg font-semibold text-gray-800 w-[200px] tracking-wider">{name}</p>

      <Link href={link} className="w-40 text-lg text-nav hover:underline">
        Explore Foods
      </Link>

      <ClickActions
        setModalInfo={setModalInfo}
        content={{name: name}}
        showModal={showModal}
      />
    </div>
  );
};

export default Category;
