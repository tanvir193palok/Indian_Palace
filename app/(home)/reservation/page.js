const ReservationsPage = () => {
  return (
    <div
      className="relative h-[800px] lg:h-[1000px] bg-cover bg-center"
      style={{ backgroundImage: `url('/about/reservation.jpg')` }}
    >
      <div className="absolute px-3 lg:px-0 inset-0 bg-black bg-opacity-40 flex justify-center items-center">
        <div className="bg-white bg-opacity-90 px-4 lg:px-8 py-10 rounded shadow-lg max-w-lg w-full text-center">
          <h1 className="text-xl lg:text-3xl font-semibold lg:font-bold mb-4 lg:mb-6 text-gray-800">
            Make a Reservation
          </h1>

          <form className="space-y-3 lg:space-y-4">
            <div>
              <label className="block text-gray-700 pb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-primary"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-700 pb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-primary"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block text-gray-700 pb-1">Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-gray-700 pb-1">Time</label>
              <input
                type="time"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-gray-700 pb-1">
                Number of Guests
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-primary mb-4"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Number of Guests
                </option>
                {[...Array(7)].map((_, index) => (
                  <option key={index + 2} value={index + 2}>
                    {index + 2}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="block w-full py-3 px-4 text-white text-center bg-nav border border-text rounded-md hover:bg-transparent hover:text-nav transition font-medium uppercase tracking-wide"
            >
              Reserve Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationsPage;
