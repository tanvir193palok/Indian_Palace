import Image from "next/image";
import Link from "next/link";

const MidMenu = () => {
  return (
    <div className="px-3 md:px-8 lg:px-32 py-10  font-lato">
      <div className="lg:container h-full relative py-8 shadow-xl shadow-heading">
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-14 text-center lg:text-left">
          {/* image (Top on small screens) */}
          <div className="flex-1 max-h-96 lg:max-h-max order-1 lg:order-none overflow-hidden">
            <Image
              src="/mid.jpg"
              alt="Best Selling"
              width={700}
              height={600}
              className="w-full h-auto object-fill"
            />
          </div>

          {/* text (Below image on small screens) */}
          <div className="flex-1 pt-4 pb-14 lg:pt-2 z-10 flex flex-col justify-center items-center lg:items-start order-2 lg:order-none">
            <h1 className="text-nav font-primary font-bold tracking-widest text-2xl uppercase pb-4">
              Menu Name
            </h1>
            <p className="font-lato text-[14px] lg:text-[18px] mb-12 max-w-lg text-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
              <b> scelerisque viverra</b> at id aenean scelerisque. Nec eget
              condimentum etiam leo. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Senectus
              <b> scelerisque viverra</b> at id aenean scelerisque. Nec eget
              condimentum etiam leo.
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

export default MidMenu;
