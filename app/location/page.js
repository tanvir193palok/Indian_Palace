import AddressInfo from "@/components/about/AddressInfo";

const LocationPage = () => {
  return (
    <div
      className="relative h-[800px] bg-cover bg-center"
      style={{ backgroundImage: `url('/about/location.jpg')` }}
    >
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 flex text-white justify-center font-primary font-semibold text-2xl mb-10 pt-10">
        Find us at our location below, and come enjoy a meal with us!
      </div>

      {/* Flex container to position AddressInfo and Map side by side */}
      <div className="relative z-10 flex items-center justify-between px-10">
        {/* Address Info Section (Left) */}
        <div className="w-full md:w-[30%]">
          <AddressInfo />
        </div>

        {/* Google Map Section (Right) */}
        <div className="w-full md:w-[60%] flex justify-center pt-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.9323234016!2d8.742251376483113!3d51.715980671861466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba4ca25dca725f%3A0x6834f6e00b91bec9!2sIndian%20Palace!5e0!3m2!1sen!2sbd!4v1728947330488!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
