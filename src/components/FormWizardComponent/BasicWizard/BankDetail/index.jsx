import React from "react";

export default ({ previus }) => {
  return (
    <div className="mt-5">
      <div className="text-left">Payment Details</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <p className="text-left">Name on Card</p>
          <input
            type="text"
            className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent mt-2 "
          />
        </div>
        <div>
          <p className="text-left">Credit Card Type</p>
          <select
            name=""
            id=""
            className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent mt-2 "
          >
            <option value="">Select Card Type</option>
            <option value="">Ameriacan Experence</option>
            <option value="">Visa</option>
            <option value="">Master Card</option>
            <option value="">Discover</option>
          </select>
        </div>
        <div>
          <p className="text-left">Credit Card Number</p>
          <input
            type="text"
            className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent mt-2 "
          />
        </div>
        <div>
          <p className="text-left">Card Verification Number</p>
          <input
            type="text"
            className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent mt-2 "
          />
        </div>
        <div>
          <p className="text-left">Expiration Date</p>
          <input
            type="text"
            className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent mt-2 "
          />
        </div>
      </div>
      <div className="flex justify-start gap-2 mt-3 ">
        <button
          onClick={previus}
          className="text-white rounded-lg text-sm py-2 px-4 bg-[var(--primary-color)] transition-all hover:bg-[var(--error-color)]"
        >
          Previous
        </button>
        <button className="text-white rounded-lg text-sm py-2 px-4 bg-[var(--primary-color)] transition-all hover:bg-[var(--error-color)]">
          Save Changes
        </button>
      </div>
    </div>
  );
};
