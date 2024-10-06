import Image from "next/image";

const MenuItem = ({ item, idx }) => {
  const { image, name, price, description } = item;

  return (
    <div>
      <div className="flex flex-row lg:flex-col h-full">
        {/* Image Container */}
        <div
          className={`w-full h-[250px] lg:h-[295px] md:w-auto ${
            idx === 1 || idx === 3 ? "lg:order-1" : ""
          }`}
        >
          {/* Image */}
          <Image
            src={image}
            alt={name}
            width={700}
            height={700}
            objectFit="cover"
            className="h-[296px] object-fill"
          />
        </div>

        {/* Text */}
        <div className="bg-[#fff3e4] flex-1 flex flex-col justify-center px-6 lg:p-[53px] lg:h-[300px] xl:max-h-max">
          <div className="text-center">
            <div className="text-xl font-semibold text-dark xl:text-2xl">
              {name}
            </div>
            <div className="my-1 text-[20px] lg:text-[40px] lg:my-6 text-accent font-semibold">
              {price}
            </div>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
