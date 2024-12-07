import Section from "./Section";

const NewArrival = () => {
  const sectionData = {
    name: "Murg Briyani",
    image1: "/food1.jpg",
    image2: "/banner/banner3.jpg",
    image3: "/food1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  return (
    <div className="px-3 md:px-8 md:py-16 py-10 lg:py-0 lg:px-32 lg:pt-28">
      <p className="flex justify-center uppercase tracking-widest font-secondary italic text-2xl lg:text-5xl text-nav font-extrabold pb-2 lg:pb-10 border-b-2 border-nav">
        New Arrival
      </p>

      <Section content={sectionData} isCombo={false} />
    </div>
  );
};

export default NewArrival;
