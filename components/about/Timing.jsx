import DeliveryTimes from "./DeliveryTimes";
import OpeningHours from "./OpeningHours";

const Timing = () => {
  return (
    <div className="container px-3 lg:px-32 pt-10 lg:pt-28">
      <p className="flex justify-center uppercase tracking-widest font-secondary italic text-xl lg:text-3xl text-text font-bold lg:font-extrabold">
        Our Timings
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 lg:pt-8">
        <OpeningHours />
        <DeliveryTimes />
      </div>
    </div>
  );
};

export default Timing;
