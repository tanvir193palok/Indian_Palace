import AddressInfo from "@/components/about/AddressInfo";
import Intro from "@/components/about/Intro";
import Timing from "@/components/about/Timing";

const AboutPage = () => {
  return (
    <div className="py-20">
      <Intro />
      <AddressInfo />
      <Timing />
    </div>
  );
};

export default AboutPage;
