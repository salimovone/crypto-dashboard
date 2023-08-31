import React from "react";

export default () => {
  return (
    <div className="transaction_card p-5 mt-5 w-full">
      <h1 className="text-left font-bold text-base">Adress Form</h1>
      <div className="flex flex-col gap-5 mt-3">
        <div className="flex flex-col  gap-3 ">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Address Line 1
          </p>
          <input
            type="text"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
        </div>
        <div className="flex flex-col  gap-3 ">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Address Line 2
          </p>
          <input
            type="text"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
        </div>
        <div className="flex flex-col  gap-3 ">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            City
          </p>
          <input
            type="text"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
        </div>
        <div className="flex flex-col  gap-3 ">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            State
          </p>
          <input
            type="text"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
        </div>
        <div className="flex flex-col  gap-3 ">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Country
          </p>
          <input
            type="text"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
        </div>
        <div className="flex flex-col  gap-3 ">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Postal Code
          </p>
          <input
            type="text"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
        </div>
        <div className="flex justify-end">
          <button className="text-white text-sm px-3 py-[6px] bg-[var(--primary-color)] transition-all bg-[var(--light-red-color)] rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
