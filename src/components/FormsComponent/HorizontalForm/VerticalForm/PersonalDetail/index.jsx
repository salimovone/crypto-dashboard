import React from "react";

export default () => {
  return (
    <div className="transaction_card mt-5 pt-5">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
        <div className="flex flex-col gap-5">
          <h1 className="text-left font-bold text-base">Personal Detail</h1>
          <div className="flex flex-col ">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              Name:
            </p>
            <input
              type="text"
              className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
            />
          </div>
          <div className="flex flex-col ">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              Password:
            </p>
            <input
              type="text"
              className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
            />
          </div>
          <div className="flex flex-col ">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              State:
            </p>
            <select className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent">
              <option value="">Select</option>
              <option value="">California</option>
              <option value="">Texas</option>
              <option value="">Florida</option>
            </select>
          </div>
          <div className="flex flex-col  ">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              Your Message:
            </p>
            <textarea className="w-full h-[120px] py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"></textarea>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-left font-bold text-base">Personal Detail</h1>
          <div className="flex flex-col ">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              Name:
            </p>
            <div className="flex gap-4">
              <input
                type="text"
                className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
              />
              <input
                type="text"
                className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col ">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              Email:
            </p>
            <input
              type="email"
              className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
            />
          </div>
          <div className="flex flex-col ">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              Phone:
            </p>
            <input
              type="number"
              className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
            />
          </div>
          <div className="flex flex-col  ">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              Adress:
            </p>
            <div className="flex flex-col gap-5">
              <input
                type="text"
                className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
              />
              <div className="flex gap-4">
                <select className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent">
                  <option value="">Select Country</option>
                  <option value="">USA</option>
                  <option value="">India</option>
                  <option value="">Mexico</option>
                </select>
                <input
                  type="text"
                  placeholder="State/Province"
                  className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
                />
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="ZIP code"
                  className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button className="text-white text-sm px-3 py-[6px] bg-[var(--primary-color)] transition-all bg-[var(--light-red-color)] rounded-lg">
          Submit
        </button>
      </div>
    </div>
  );
};
