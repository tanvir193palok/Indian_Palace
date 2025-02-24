"use client";

import Link from "next/link";
import { useState } from "react";
import { LoadScript } from "@react-google-maps/api";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const CheckoutForm = () => {
  const [value, setValue] = useState(null);
  const [error, setError] = useState("");

  //Form submit logic
  const onSubmit = async (e) => {
    e.preventDeafult();
  };

  //getting longitude and latitude of selected place
  const getLatAndLong = (place, type) => {
    console.log(place, type);
  };

  return (
    <div className="col-span-5 border border-gray-200 p-4 rounded font-lato">
      <h3 className="text-lg font-medium font-primary uppercase mb-4 tracking-widest">
        Checkout
      </h3>
      <div className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="text-text">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="input-box"
                required
              />
            </div>
            <div>
              <label htmlFor="last-name" className="text-text">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                className="input-box"
                required
              />
            </div>
          </div>
          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            libraries={["places"]}
          >
            <div>
              <label htmlFor="address" className="text-text">
                Address
              </label>
              {/*     <input
              type="text"
              name="address"
              id="region"
              className="input-box"
            />*/}

              <GooglePlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                selectProps={{
                  value,
                  onChange: (place) => {
                    getLatAndLong(place, type);
                    setValue(place);
                  },
                  isClearable: true,
                  placeholder: "Search for an address...",
                }}
              />
            </div>
          </LoadScript>
          <div>
            <label htmlFor="phone" className="text-text">
              Phone number
            </label>
            <input type="text" name="phone" id="phone" className="input-box" />
          </div>
          <div>
            <label htmlFor="email" className="text-text">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input-box"
              required
            />
          </div>
          <div className="flex items-center mb-4 mt-2">
            <input
              type="checkbox"
              name="aggrement"
              id="aggrement"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
              required
            />
            <label
              htmlFor="aggrement"
              className="text-text ml-3 cursor-pointer text-sm"
            >
              I agree to the{" "}
              <Link href="#" className="text-primary">
                terms & conditions
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="block w-full py-3 px-4 text-white text-center bg-nav border border-text rounded-md hover:bg-transparent hover:text-nav transition font-medium uppercase tracking-wide"
          >
            Place order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
