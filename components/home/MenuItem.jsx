import Image from "next/image";

const MenuItem = ({ item, idx }) => {
  const { image, name, price, description } = item;

  return (
    <div>
      <div className="flex flex-row lg:flex-col h-full ">
        {/* Image Container */}
        <div
          className={`w-[150px] md:w-[350px] lg:w-full h-[150px] lg:h-[294px] ${
            idx === 1 || idx === 3 ? "lg:order-1" : ""
          }`}
        >
          {/* Image */}
          <Image
            src={image}
            alt={name}
            width={700}
            height={600}
            objectFit="cover"
            className="h-[150px] md:h-[250px] lg:h-[294px] object-fill"
          />
        </div>

        {/* Text */}
        <div className="bg-[#fff3e4] flex-1 flex flex-col justify-center px-6 lg:px-0 lg:p-[50px] md:h-[250px] lg:h-[300px] xl:max-h-max">
          <div className="text-center">
            <div className="text-lg md:text-xl font-medium lg:font-semibold text-dark xl:text-2xl">
              {name}
            </div>
            <div className="my-1 text-[20px] md:text-[30px] lg:text-[40px] md:my-3 lg:my-6 font-semibold">
              {price}
            </div>
            <div className="text-[14px] lg:text-[18px]">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
