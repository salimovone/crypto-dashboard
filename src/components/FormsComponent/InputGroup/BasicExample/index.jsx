import React from "react";

export default () => {
  return (
    <div className="transaction_card p-5 mt-5">
      <h1 className="text-left font-bold">Basic Examples</h1>
      <div className="flex flex-col gap-5 mt-5">
        <div className="flex flex-col items-center gap-5 md:gap-[80px] justify-between md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Group Left
          </p>
          <div className="w-full flex">
            <div className="bg-[#E9ECEF] border rounded-s-lg py-[6px] px-3 text-lg">
              @
            </div>
            <input
              type="text"
              className="w-full py-[6px] px-3 border-2 border-white rounded-e-lg bg-transparent"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 md:gap-[80px] justify-between md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Group Right
          </p>
          <div className="w-full flex">
            <input
              type="text"
              className="w-full py-[6px] px-3 border-2 border-white rounded-s-lg bg-transparent"
            />
            <div className="bg-[#E9ECEF] border rounded-e-lg py-[6px] px-3 text-lg">
              @example.com
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 md:gap-[80px] justify-between md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            URL Example
          </p>
          <div className="w-full flex">
            <div className="bg-[#E9ECEF] border rounded-s-lg py-[6px] px-3 text-lg">
              https://
            </div>
            <input
              type="text"
              className="w-full py-[6px] px-3 border-2 border-white rounded-e-lg bg-transparent"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 md:gap-[80px] justify-between md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Group with Price
          </p>
          <div className="w-full flex">
            <div className="bg-[#E9ECEF] border rounded-s-lg py-[6px] px-3 text-lg">
              $
            </div>
            <input
              type="text"
              className="w-full py-[6px] px-3 border-2 border-white  bg-transparent"
            />
            <div className="bg-[#E9ECEF] border rounded-e-lg py-[6px] px-3 text-lg">
              .00
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 md:gap-[80px] justify-between md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Group with Price {"(Left)"}
          </p>
          <div className="w-full flex">
            <div className="bg-[#E9ECEF] border rounded-s-lg py-[6px] px-3 text-lg">
              $
            </div>
            <div className="bg-[#E9ECEF] border py-[6px] px-3 text-lg">.00</div>
            <input
              type="text"
              className="w-full py-[6px] px-3 border-2 rounded-e-lg  border-white  bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
