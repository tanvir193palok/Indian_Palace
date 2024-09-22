import Image from "next/image";
import Link from "next/link";

const BestSelling = () => {
  return (
    <div className="px-32 py-10 font-lato">
      <p className="flex justify-center uppercase tracking-widest font-primary text-4xl text-heading font-extrabold pb-10 border-b-2">
        Best Selling
      </p>
      <div className="container mx-auto h-full relative pt-2">
        {/* text & img wrapper */}
        <div
          className="flex flex-col lg:flex-row h-full
       items-center justify-center gap-x-20 text-center lg:text-left"
        >
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <Image src="/banner/banner2.jpg" alt="" width={500} height={500} />
          </div>

          {/* text */}
          <div
            className="flex-1 pt-36 pb-14 lg:pt-2 lg:w-auto z-10 flex flex-col
         justify-center items-center lg:items-start"
          >
            <h1 className="h1 text-heading font-secondary font-extrabold tracking-widest text-xl uppercase pb-2">
              Murg Briyani
            </h1>
            <p className="mb-12 pt-4 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
              <b> scelerisque viverra</b> at id aenean scelerisque. Nec eget
              condimentum eitam leo
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              href="#"
              className="bg-heading border border-primary text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-primary"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
