import DeliveryTimes from "./DeliveryTimes";
import OpeningHours from "./OpeningHours";

const Timing = () => {
  return (
    <div className="container px-32 pt-28">
      <p className="flex justify-center uppercase tracking-widest font-secondary italic text-3xl text-text font-extrabold">
        Our Timings
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
        <OpeningHours />
        <DeliveryTimes />
      </div>
    </div>
  );
};

export default Timing;
