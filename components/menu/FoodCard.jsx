import Image from "next/image";

const FoodCard = ({ foodData, updateModal, updateModalInfo }) => {
  const handleClick = () => {
    updateModal(true);
    updateModalInfo(foodData);
  };

  return (
    <div className="font-lato" onClick={handleClick}>
      <div className="mx-auto h-full relative border border-nav shadow-md rounded-xl overflow-hidden">
        {/* text & img wrapper */}
        <div
          className="flex flex-col lg:flex-row h-full
            items-stretch justify-center gap-x-4 text-center lg:text-left"
        >
          {/* text */}
          <div className="flex-[65%] flex flex-col items-center lg:items-start pt-3 pl-3">
            <h1 className="text-black font-primary font-bold tracking-wide text-lg uppercase pb-1">
              {foodData?.name}
            </h1>
            <p className="pb-3 text-red-600 font-primary">{foodData?.price}</p>
            <p className="font-lato text-text text-sm">
              {foodData?.description}
            </p>
          </div>

          {/* image */}
          <div className="flex flex-[35%] h-full justify-center p-2">
            <Image
              src={foodData?.imageSrc}
              alt="Murg Briyani"
              layout="responsive"
              width={600}
              height={700}
              className="object-cover h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
