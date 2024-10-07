import Image from "next/image";
import Link from "next/link";

const NewArrival = () => {
  return (
    <div className="px-32 pt-28">
      <p className="flex justify-center uppercase tracking-widest font-secondary italic text-5xl text-nav font-extrabold pb-10 border-b-2 border-nav">
        New Arrival
      </p>
      <div className="container mx-auto h-full relative pt-2">
        <div
          className="flex flex-col lg:flex-row h-full
   items-center justify-center  text-center lg:text-left"
        >
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden pt-2">
            <Image src="/food1.jpg" alt="" width={550} height={700} />
          </div>

          <div
            className="flex-1 pt-36 pb-14 lg:pt-2 lg:w-auto z-10 flex flex-col
       justify-center items-center lg:items-start"
          >
            <div className="flex flex-col gap-10">
              <div>
                <Image
                  src="/banner/banner3.jpg"
                  alt=""
                  width={800}
                  height={500}
                />
              </div>

              <div
                className="flex flex-col lg:flex-row h-full
           items-center justify-center gap-x-5 text-center lg:text-left"
              >
                {/* image */}
                <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
                  <Image src="/food1.jpg" alt="" width={500} height={500} />
                </div>

                {/* text */}
                <div
                  className="flex-1 pt-36 pb-14 lg:pt-6 lg:w-auto z-10 flex flex-col
             justify-center items-center lg:items-start"
                >
                  <h1 className="text-nav font-primary font-bold tracking-widest text-lg uppercase pb-2">
                    Murg Briyani
                  </h1>
                  <p className="mb-2 max-w-md text-sm font-lato text-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Senectus
                    <b> scelerisque viverra</b> at id aenean scelerisque. Nec
                    eget condimentum eitam leo
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link
                    href="#"
                    className="bg-text border border-text text-white px-8 py-4 font-primary font-medium 
                    rounded-md tracking-wide hover:bg-transparent hover:text-text hover:border-nav uppercase mt-6"
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
