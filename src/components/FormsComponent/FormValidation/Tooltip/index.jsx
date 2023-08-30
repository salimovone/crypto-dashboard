import React from "react";

export default () => {
  return (
    <div className="transaction_card p-5 mt-5">
      <h1 className="text-left font-bold text-base">Tooltips</h1>
      <p className="text-left">
        You can swap the .{"{valid | invalid}"}-feedback classes for .
        {"{valid | invalid}"}-tooltip classes to display validation feedback in
        a styled tooltip.
      </p>
      <div className="flex flex-col md:flex-row gap-5 mt-3">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-left">First Name</p>
          <input
            type="text"
            defaultValue={"Mark"}
            className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-left">Last Name</p>
          <input
            type="text"
            defaultValue={"Otto"}
            className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-left">Username</p>
          <div className="flex">
            <input
              type="text"
              className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-3">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-left">City</p>
          <input
            type="text"
            className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-left">State</p>
          <input
            type="text"
            className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-left">Zip</p>
          <input
            type="text"
            className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent"
          />
        </div>
      </div>
      <div className="flex gap-2 mt-5">
        <input type="checkbox" />
        <p className="text-sm font-bold text-[var(--main-color)] ">
          Agree to terms and conditions
        </p>
      </div>
      <div className="flex justify-start mt-5">
        <button className="text-white text-sm px-3 py-[6px] bg-[var(--primary-color)] transition-all hover:bg-[var(--light-red-color)] rounded-lg">
          Submit form
        </button>
      </div>
    </div>
  );
};
