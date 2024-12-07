import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ClickActions from "./ClickActions";

const FoodModal = ({ modalInfo, showModal }) => {
  return (
    <div className="relative w-full max-w-[90%] md:max-w-[70%] lg:max-w-[35%] lg:h-[90%] h-auto px-2 lg:px-6 pt-2 lg:pt-4 pb-3 lg:pb-6 rounded-lg lg:rounded-xl bg-white overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={() => showModal(false)}
        className="absolute top-1 lg:top-2 right-0 lg:right-2 flex items-center justify-center text-[24px] lg:text-[30px] border-2 px-2 py-1 rounded-full bg-text text-white hover:bg-transparent hover:text-text"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>

      {/* Image */}
      <div className="w-full h-[250px] md:h-[350px] bg-white overflow-hidden rounded-xl">
        <Image
          src={modalInfo?.imageSrc}
          alt={modalInfo?.name}
          layout="responsive"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg lg:rounded-xl"
        />
      </div>

      {/* Text (Below the Image) */}
      <div className="font-lato w-full mt-2 flex flex-col text-text justify-center items-center mb-2">
        <h1 className="text-base lg:text-xl font-semibold lg:font-extrabold tracking-widest font-primary text-nav uppercase">
          {modalInfo?.name}
        </h1>
        <p className="text-text text-sm pt-1 lg:pt-2 pb-2">{modalInfo?.description}</p>
      </div>
      
      <p className="uppercase text-sm font-primary">Special Requests</p>
      <textarea
        rows="2"
        className="w-full text-start mt-1 mb-2 py-3 px-2 rounded-lg border border-gray-300 text-gray-600 text-xs lg:text-sm placeholder-gray-400 focus:border-nav focus:ring-0 appearance-none focus:outline-none resize-none"
        placeholder="List your special things here. We will try our best to make it happen."
      />

      {/* Quantity and Add to Cart Section */}
      <ClickActions isCombo={false} />
    </div>
  );
};

export default FoodModal;

