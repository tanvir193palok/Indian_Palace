import Image from "next/image";
import { menuData } from "@/data";

const Menu = () => {
  const { title, description, menuItems, btnText } = menuData;
  return (
    <section className="min-h-[780px] my-20">
      {/* background */}
      <div
        className="h-[780px] bg-[url('/menu/bg.png')] 
    absolute w-full max-w-[1800px]"
      ></div>

      {/* text */}
      <div className="relative container z-10 top-72 lg:top-52">
        <div className="mx-auto px-32 flex flex-col items-center text-center">
          <h2 className="capitalize text-white max-w-[400px] text-center text-[36px] font-secondary font-bold pb-6">
            {title}
          </h2>
          <p className="text-white/70 capitalize mb-8 font-lato text-[18px]">{description}</p>
        </div>
      </div>

      {/* menu gallery */}
      <div className="relative top-80 lg:top-96 pb-[500px] px-32">
        <div className="container mx-auto">
          <div className="lg:-mt-24 min-h-[590px] z-30 mb-8 md:mb-4 xl:mb-16">
            {/* grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[590px]">
              {menuItems.map((item, idx) => {
                // Destructuring item
                const { image, name, price, description } = item;
                return (
                  <div key={idx}>
                    <div className="flex flex-row lg:flex-col h-full">
                      {/* Image Container */}
                      <div
                        className={`w-full h-[250px] lg:h-[300px] md:w-auto ${
                          idx === 1 || idx === 3 ? "lg:order-1" : ""
                        }`}
                      >
                        {/* Image */}
                        <Image
                          src={image}
                          alt={name}
                          width={500}
                          height={500}
                          objectFit="cover"
                        />
                      </div>

                      {/* Text */}
                      <div
                        className="bg-[#fff3e4] flex-1 flex flex-col justify-center
                        px-6 lg:p-12 lg:max-h-[250px] xl:max-h-max"
                      >
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
              })}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-heading border border-primary text-white px-8 py-4 font-medium 
          rounded-md hover:bg-transparent hover:text-black hover:border-heading"
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
