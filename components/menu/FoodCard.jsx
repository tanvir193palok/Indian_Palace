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
          className="flex flex-row h-full
            items-stretch justify-center gap-x-2 lg:gap-x-4 text-left"
        >
          {/* text */}
          <div className="flex-[50%] lg:flex-[65%] flex flex-col items-start py-2 lg:py-3 pl-2 lg:pl-3">
            <h1 className="text-black font-primary font-medium lg:font-bold tracking-normal lg:tracking-wide text-base lg:text-lg uppercase pb-1">
              {foodData?.name}
            </h1>
            <p className="pb-1 lg:pb-2 text-heading font-primary text-base lg:text-lg font-semibold">
              {foodData?.price}
            </p>
            <p className="font-lato text-text text-xs lg:text-sm">
              {foodData?.description}
            </p>
          </div>

          {/* image */}
          <div className="flex flex-[50%] h-full justify-center p-2">
            <Image
              src={foodData?.imageSrc}
              alt="Murg Briyani"
              layout="responsive"
              width={600}
              height={700}
              className="object-cover h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
