import Image from "next/image";

const Intro = () => {
  return (
    <div className="px-32 pb-10">
      <p className="flex justify-center uppercase tracking-widest font-secondary italic text-5xl text-text font-extrabold">
        Greetings
      </p>
      <div className="mx-auto h-full relative pt-10">
        <div
          className="flex flex-col lg:flex-row h-full
   items-center justify-center  text-center lg:text-left"
        >
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <Image
              src="/about/intro1.jpg"
              alt=""
              width={550}
              height={700}
            />
          </div>

          <div
            className="flex-1 pt-36 pb-14 lg:pt-2 lg:w-auto z-10 flex flex-col
       justify-center items-center lg:items-start"
          >
            <div className="flex flex-col gap-10">
              <div>
                <Image
                  src="/about/intro2.jpg"
                  alt=""
                  width={800}
                  height={500}
                />
              </div>

              <div
                className="flex flex-col lg:flex-row h-full
           items-center justify-center gap-x-5 text-center lg:text-left"
              >
                <div
                  className="flex-1 pt-36 pb-14 lg:pt-2 lg:w-auto z-10 flex flex-col
             justify-center items-center lg:items-start font-lato"
                >
                  <h1 className="text-text font-secondary font-bold tracking-widest text-xl uppercase pb-4">
                    Indian Palace
                  </h1>
                  <p className="mb-2 max-w-2xl text-sm md:text-lg">
                    Where we celebrate the art of fine dining with a modern
                    twist.
                    <br /> Located in the heart of <b>Germany</b>, we offer a
                    diverse menu inspired by both local and global flavors. Our
                    talented chefs use fresh, locally sourced ingredients to
                    craft delicious, seasonal dishes that cater to all palates.
                    <br />
                    <br />
                    Whether you’re here for a casual meal or a special occasion,
                    our inviting ambiance, exceptional service, and passion for
                    food create an unforgettable dining experience. We pride
                    ourselves on creating not just meals, but moments worth
                    savoring.
                    <br />
                    Come join us for a taste of Indian Cuisine in a setting that feels like home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
