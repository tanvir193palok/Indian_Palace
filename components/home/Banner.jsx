import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('/banner/banner1.jpg')] bg-cover bg-no-repeat bg-center py-36">
      <div className="container">
        <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
          Best Taste and <br />
          Flavour in town
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam{" "}
          <br />
          accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
          odio
        </p>
        <div className="mt-12">
          <Link
            href="/menu"
            className="border border-text text-white font-primary tracking-wide px-8 py-4 font-medium 
                  rounded-md hover:bg-text hover:text-white uppercase"
          >
            View our menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
