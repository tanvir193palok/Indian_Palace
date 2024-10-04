import Image from "next/image";

const FoodCard = ({ updateModal, updateModalInfo }) => {
  return (
    <div className="font-lato">
      <div className="mx-auto h-full relative border border-nav shadow-md rounded-xl overflow-hidden">
        {/* text & img wrapper */}
        <div
          className="flex flex-col lg:flex-row h-full
            items-stretch justify-center gap-x-4 text-center lg:text-left"
        >
          {/* text */}
          <div className="flex-[65%] flex flex-col items-center lg:items-start pt-3 pl-3">
            <h1 className="text-black font-primary font-bold tracking-wide text-lg uppercase pb-1">
              Murg Briyani
            </h1>
            <p className="pb-3 text-red-600 font-primary">6,50 €</p>
            <p className="font-lato text-text text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
              scelerisque viverra at id aenean scelerisque.
            </p>
          </div>

          {/* image */}
          <div className="flex flex-[35%] h-full justify-center p-2">
            <Image
              src="/menu/food3.jpg"
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
