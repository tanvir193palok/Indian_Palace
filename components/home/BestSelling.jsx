import Image from "next/image";
import Link from "next/link";

const BestSelling = () => {
  return (
    <div className="px-3 lg:px-32 py-10 lg:py-0 lg:pt-28 font-lato">
      <p className="flex justify-center uppercase tracking-widest font-secondary italic text-2xl lg:text-5xl text-nav font-extrabold pb-2 lg:pb-10 border-b-2 border-nav">
        Best Selling
      </p>
      <div className="lg:container h-full relative pt-4">
        {/* text & img wrapper */}
        <div
          className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-20 text-center lg:text-left"
        >
          {/* image (Top on small screens) */}
          <div className="flex-1 max-h-96 lg:max-h-max order-1 lg:order-none overflow-hidden">
            <Image src="/banner/banner2.jpg" alt="Best Selling" width={600} height={500} />
          </div>

          {/* text (Below image on small screens) */}
          <div
            className="flex-1 pt-4 pb-14 lg:pt-2 z-10 flex flex-col justify-center items-center lg:items-start order-2 lg:order-none"
          >
            <h1 className="text-nav font-primary font-bold tracking-widest text-xl uppercase pb-2">
              Murg Briyani
            </h1>
            <p className="font-lato text-[14px] lg:text-[18px] mb-12 max-w-lg text-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
              <b> scelerisque viverra</b> at id aenean scelerisque. Nec eget
              condimentum etiam leo.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              href="#"
              className="bg-text border border-text text-white px-8 py-4 font-primary font-medium 
              rounded-md tracking-wide hover:bg-transparent hover:text-text hover:border-nav uppercase"
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

