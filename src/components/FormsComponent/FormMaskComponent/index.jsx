import React from "react";

export default () => {
  return (
    <div className="transaction_card p-5 mt-5">
      <h1 className="text-left  text-lg">Form Mask</h1>
      <p className="text-left text-base">
        Input masks can be used to force the user to enter data conform a
        specific format. Unlike validation, the user can't enter any other key
        than the ones specified by the mask.
      </p>
      <div className="flex flex-col gap-5 mt-3">
        <div className="flex flex-col gap-1">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Phone
          </p>
          <input
            type="number"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
          <p className="text-sm text-left text-gray-500">{"(999)"} 999-9999</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Date
          </p>
          <input
            type="date"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
          <p className="text-sm text-left text-gray-500">dd/mm/yyyy</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            SSN field 1
          </p>
          <input
            type="text"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
          <p className="text-sm text-left text-gray-500">e.g "999-99-9999"</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Phone field + ext.
          </p>
          <input
            type="number"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
          <p className="text-sm text-left text-gray-500">+40 999 999 999</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Product Key
          </p>
          <input
            type="text"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
          <p className="text-sm text-left text-gray-500">e.g a*-999-a999</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Currency
          </p>
          <input
            type="text"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
          <p className="text-sm text-left text-gray-500">$ 999,999,999.99</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Eye Script
          </p>
          <input
            type="number"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
          <p className="text-sm text-left text-gray-500">~9.99 ~9.99 999</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Percent
          </p>
          <input
            type="number"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
          <p className="text-sm text-left text-gray-500">e.g "99%"</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Credit Card Number
          </p>
          <input
            type="number"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
          <p className="text-sm text-left text-gray-500">
            e.g "999.999.999.9999"
          </p>
        </div>
      </div>
    </div>
  );
};
