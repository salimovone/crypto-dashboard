import React from "react";

export default () => {
  return (
    <div className="mt-5 transaction_card p-5">
      <h1 className="text-left font-bold text-base">Input Size</h1>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center gap-5 md:gap-[80px] justify-between md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Large Input
          </p>
          <input
            type="text"
            placeholder=".form-control-lg"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
        </div>
        <div className="flex flex-col items-center gap-5 md:gap-[80px] justify-between md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Default Input
          </p>
          <input
            type="text"
            placeholder=".form-control"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
        </div>
        <div className="flex flex-col items-center gap-5 md:gap-[80px] justify-between md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Small Input
          </p>
          <input
            type="text"
            placeholder=".form-control-sm"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};
