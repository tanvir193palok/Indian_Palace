import Section from "@/components/home/Section";

const SuggestedFoods = () => {
  const sectionData = {
    name: "Murg Briyani",
    image1: "/food1.jpg",
    image2: "/banner/banner3.jpg",
    image3: "/food1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  return (
    <div className="relative px-3 lg:px-14 grid gap-6 mb-14 lg:mb-32 pt-4">
      <Section content={sectionData} isCombo={true} />
    </div>
  );
};

export default SuggestedFoods;
