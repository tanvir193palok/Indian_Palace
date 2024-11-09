const AddressInfo = () => {
  return (
    <div className="bg-white/80 bg-opacity-90 border border-gray-200 px-10 lg:px-20 py-10 pt-10 rounded shadow-xl">
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-semibold">Restaurant Indian Palace</h4>
          <p className="text-text">Owner: Md HA Touhid</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Address</h4>
          <p className="text-text">Riemekestraße 8-10</p>
          <p className="text-text">33102 Paderborn</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Contact</h4>
          <p className="text-text">Tel: +49(0)5251-18444 85</p>
          <p className="text-text">Tel: +49(0)5251-18444 86</p>
          <p className="text-text">Fax: +49(0)5251-18444 87</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Online</h4>
          <p className="text-text">
            Website:{" "}
            <a
              href="http://www.indianpalace.de"
              className="text-primary underline"
            >
              www.indianpalace.de
            </a>
          </p>
          <p className="text-text">
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
          <p className="text-text">DE369663975</p>
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;