import Image from "next/image";
import Link from "next/link";
import ClickActions from "../menu/ClickActions";

const Section = ({ content, isCombo }) => {
  return (
    <div className="lg:container mx-auto h-full relative pt-4">
      <div
        className="flex flex-col lg:flex-row h-full
items-center justify-center text-center lg:text-left"
      >
        {/* First Image */}
        <div className="flex-1 max-h-96 lg:max-h-max order-1 lg:order-none overflow-hidden lg:pt-8">
          <Image
            src={content?.image1}
            alt="Delicious food"
            width={750}
            height={800}
            priority
            className="w-full lg:w-[92%] object-cover"
          />
        </div>

        {/* Text and Images */}
        <div
          className="flex-1 order-2 lg:order-none pt-2 lg:pt-0 lg:w-auto z-10 flex flex-col
   justify-center items-center lg:items-start"
        >
          <div className="flex flex-col gap-10">
            {/* Banner Image */}
            <div>
              <Image
                src={content?.image2}
                alt="Banner"
                width={800}
                height={500}
                className="w-full object-cover"
              />
            </div>

            {/* Food Details Section */}
            <div
              className="flex flex-row h-full
       items-center justify-center gap-x-3 text-center lg:text-left"
            >
              {/* Food Image */}
              <div className="flex-1 max-h-96 lg:max-h-max overflow-hidden lg:pt-4">
                <Image
                  src={content?.image3}
                  alt="Food item"
                  width={300}
                  height={400}
                  className="w-[100%] md:w-[90%] h-full md:h-[80%] object-cover"
                />
              </div>

              {/* Food Description */}
              <div
                className="flex-1 lg:pt-6 lg:w-auto z-10 flex flex-col
         justify-center items-start"
              >
                <h1 className="text-nav font-primary font-medium md:font-bold tracking-wide lg:tracking-widest text-sm md:text-base lg:text-lg uppercase pb-2">
                  {content?.name}
                </h1>
                <p className="mb-2 text-left max-w-sm lg:max-w-md text-sm font-lato text-text">
                  {content?.description}
                </p>
                {isCombo ? (
                  <ClickActions isCombo={true} />
                ) : (
                  <>
                    <Link
                      href="/menu?category=New Arrival"
                      className="bg-text border border-text text-white px-4 lg:px-8 py-3 lg:py-4 font-primary font-normal text-sm lg:text-base lg:font-medium 
              rounded-md tracking-normal lg:tracking-wide hover:bg-transparent hover:text-text hover:border-nav uppercase mt-2 lg:mt-6"
                    >
                      Order Now
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
