import React from "react";

export default () => {
  return (
    <div className="transaction_card p-5 mt-5">
      <h1 className="text-left font-bold text-base">Basic Input</h1>
      <div className="flex flex-col gap-5 mt-3">
        <div className="flex flex-col items-center gap-5 md:gap-[80px] justify-between md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Text Input
          </p>
          <input
            type="text"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
        </div>
        <div className="flex flex-col items-center gap-5 md:gap-[80px] justify-between md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Password
          </p>
          <input
            type="password"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
        </div>
        <div className="flex flex-col items-center gap-5 md:gap-[80px] justify-between md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Disabled Input
          </p>
          <input
            disabled
            type="text"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
        </div>
        <div className="flex flex-col items-center gap-5 md:gap-[80px] justify-between md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Read only
          </p>
          <input
            readOnly
            value="readonly"
            type="text"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
        </div>
        <div className="flex flex-col items-center gap-5 md:gap-[80px] justify-between md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Placeholder
          </p>
          <input
            placeholder="Placeholder"
            type="text"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
        </div>
        <div className="flex flex-col items-center gap-5 md:gap-[80px] justify-between md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Input File
          </p>
          <input
            type="file"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
          />
        </div>
        <div className="flex flex-col items-center gap-5 md:gap-[80px] justify-between md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Default Select
          </p>
          <select
            name=""
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
            id=""
          >
            <option value="">-- Select --</option>
            <option value="">Option 01</option>
            <option value="">Option 02</option>
            <option value="">Option 03</option>
            <option value="">Option 04</option>
          </select>
        </div>
        <div className="flex flex-col  gap-5 md:gap-[80px] justify-start md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Radio
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input type="radio" name="option" />
              <p className="text-left font-bold text-sm text-[var(--main-color)]">
                Option 01
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="option" />
              <p className="text-left font-bold text-sm text-[var(--main-color)]">
                Option 02
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="option" />
              <p className="text-left font-bold text-sm text-[var(--main-color)]">
                Option 03
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-5 md:gap-[80px] justify-start md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Checkbox
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-left font-bold text-sm text-[var(--main-color)]">
                Option 01
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-left font-bold text-sm text-[var(--main-color)]">
                Option 02
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-left font-bold text-sm text-[var(--main-color)]">
                Option 03
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-5 md:gap-[80px] justify-between md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Text Area
          </p>
          <textarea
            placeholder="Enter text here"
            className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent h-[120px]"
          ></textarea>
        </div>
        <div className="flex flex-col items-center gap-5 md:gap-[80px] justify-between md:flex-row">
          <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
            Input Addons
          </p>
          <div className="w-full flex">
            <input
              type="text"
              className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
            />
            <button className="rounded-lg py-[6px] px-3 bg-[var(--primary-color)] text-sm text-white transition-all hover:bg-[var(--light-red-color)]">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
