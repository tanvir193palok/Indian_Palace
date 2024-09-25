const AddressInfo = () => {
  return (
    <div className="container px-32 pt-28">
      <p className="flex justify-center uppercase tracking-widest font-secondary italic text-3xl text-text font-extrabold pb-8">
        Contact Information
      </p>
      <div className="max-w-xl mx-auto bg-white border border-gray-200 p-6 rounded shadow-md">
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold">Restaurant Indian Palace</h4>
            <p className="text-gray-700">Owner: Md HA Touhid</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Address</h4>
            <p className="text-gray-700">Riemekestraße 8-10</p>
            <p className="text-gray-700">33102 Paderborn</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Contact</h4>
            <p className="text-gray-700">Tel: +49(0)5251-18444 85</p>
            <p className="text-gray-700">Tel: +49(0)5251-18444 86</p>
            <p className="text-gray-700">Fax: +49(0)5251-18444 87</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Online</h4>
            <p className="text-gray-700">
              Website:{" "}
              <a
                href="http://www.indianpalace.de"
                className="text-primary underline"
              >
                www.indianpalace.de
              </a>
            </p>
            <p className="text-gray-700">
              Email:{" "}
              <a
                href="mailto:info@indianpalace.de"
                className="text-primary underline"
              >
                info@indianpalace.de
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">VAT ID</h4>
            <p className="text-gray-700">DE369663975</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
