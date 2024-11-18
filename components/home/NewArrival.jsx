import Image from "next/image";
import Link from "next/link";

const NewArrival = () => {
  return (
    <div className="px-3 md:px-8 md:py-16 py-10 lg:py-0 lg:px-32 lg:pt-28">
      <p className="flex justify-center uppercase tracking-widest font-secondary italic text-2xl lg:text-5xl text-nav font-extrabold pb-2 lg:pb-10 border-b-2 border-nav">
        New Arrival
      </p>
      <div className="lg:container mx-auto h-full relative pt-4">
        <div
          className="flex flex-col lg:flex-row h-full
   items-center justify-center text-center lg:text-left"
        >
          {/* First Image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-1 lg:order-none overflow-hidden lg:pt-12">
            <Image
              src="/food1.jpg"
              alt="Delicious food"
              width={750}
              height={700}
              className="w-full  object-fill"
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
                  src="/banner/banner3.jpg"
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
                <div className="flex-1 max-h-96 lg:max-h-max overflow-hidden">
                  <Image
                    src="/food1.jpg"
                    alt="Food item"
                    width={280}
                    height={280}
                    className="w-[90%] h-full md:h-[80%] object-cover"
                  />
                </div>

                {/* Food Description */}
                <div
                  className="flex-1 lg:pt-6 lg:w-auto z-10 flex flex-col
             justify-center items-start"
                >
                  <h1 className="text-nav font-primary font-medium md:font-bold tracking-wide lg:tracking-widest text-sm md:text-base lg:text-lg uppercase pb-2">
                    Murg Briyani
                  </h1>
                  <p className="mb-2 text-left max-w-sm lg:max-w-md text-sm font-lato text-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Senectus
                    <b> scelerisque viverra</b> at id aenean scelerisque. Nec
                    eget condimentum eitam leo
                  </p>
                  <Link
                    href="#"
                    className="bg-text border border-text text-white px-4 lg:px-8 py-3 lg:py-4 font-primary font-normal text-sm lg:text-base lg:font-medium 
                    rounded-md tracking-normal lg:tracking-wide hover:bg-transparent hover:text-text hover:border-nav uppercase mt-2 lg:mt-6"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
