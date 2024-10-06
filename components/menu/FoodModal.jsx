import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ClickActions from "./ClickActions";

const FoodModal = ({ modalInfo, showModal }) => {
  return (
    <div className="relative w-[35%] h-[90%] p-4 rounded-xl bg-white">
      {/* Close Button */}
      <button
        onClick={() => showModal(false)}
        className="absolute top-5 right-6 flex items-center justify-center text-[30px] border-2 px-2 py-1 rounded-full bg-text text-white hover:bg-transparent hover:text-text"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>

      {/* Image */}
      <div className="w-full h-[350px] bg-white overflow-hidden">
        <Image
          src={modalInfo?.imageSrc}
          alt={modalInfo?.name}
          height={300}
          width={300}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Text (Below the Image) */}
      <div className="font-lato w-full mt-4 flex flex-col text-text justify-center items-center mb-2">
        <h1 className="text-xl font-extrabold tracking-widest font-primary text-nav uppercase">
          {modalInfo?.name}
        </h1>
        <p className="text-text text-sm pt-2 pb-2">{modalInfo?.description}</p>
      </div>
      <p className="uppercase text-sm font-primary">Special Requests</p>
      <textarea
        rows="2"
        className="w-full text-start mt-1 mb-4 py-3 px-2 rounded-lg border border-gray-300 text-gray-600 text-sm placeholder-gray-400 focus:border-nav focus:ring-0 appearance-none focus:outline-none resize-none"
        placeholder="List your special things here. We will try our best to make it happen."
      />

      {/* Quantity and Add to Cart Section */}
      <ClickActions />
    </div>
  );
};

export default FoodModal;
