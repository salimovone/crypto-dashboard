import React from "react";

export default () => {
  return (
    <div className="mt-5 p-5 transaction_card">
      <h1 className="text-left font-bold text-base">
        Two Column Horizontal Form
      </h1>
      <h2 className="text-left font-bold text-base mt-3">
        Personal Information
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center gap-5 md:gap-[40px] justify-between md:flex-row">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              First Name
            </p>
            <input
              type="text"
              className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
            />
          </div>
          <div className="flex flex-col items-center gap-5 md:gap-[40px] justify-between md:flex-row">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              Last Name
            </p>
            <input
              type="text"
              className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
            />
          </div>
          <div className="flex flex-col items-center gap-5 md:gap-[40px]  md:flex-row">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              Gender
            </p>
            <div className="flex gap-3 justify-start">
              <div className="flex gap-2">
                <input type="radio" name="gender" />
                <p>Male</p>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="gender" />
                <p>Female</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 md:gap-[40px] justify-between md:flex-row">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              Blood Group
            </p>
            <select className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent">
              <option value="">Select</option>
              <option value="">A+</option>
              <option value="">O+</option>
              <option value="">B+</option>
              <option value="">AB+</option>
            </select>
          </div>
          <h1 className="text-left font-bold text-base mt-3">Adress </h1>
          <div className="flex flex-col items-center gap-5 md:gap-[40px] justify-between md:flex-row">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              Adress Line 1
            </p>
            <input
              type="text"
              className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
            />
          </div>
          <div className="flex flex-col items-center gap-5 md:gap-[40px] justify-between md:flex-row">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              Adress Line 2
            </p>
            <input
              type="text"
              className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
            />
          </div>
          <div className="flex flex-col items-center gap-5 md:gap-[40px] justify-between md:flex-row">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              State
            </p>
            <input
              type="text"
              className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center gap-5 md:gap-[40px] justify-between md:flex-row">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              Username
            </p>
            <input
              type="text"
              className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
            />
          </div>
          <div className="flex flex-col items-center gap-5 md:gap-[40px] justify-between md:flex-row">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              Email
            </p>
            <input
              type="email"
              className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
            />
          </div>
          <div className="flex flex-col items-center gap-5 md:gap-[40px] justify-between md:flex-row">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              Password
            </p>
            <input
              type="pasword"
              className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
            />
          </div>
          <div className="flex flex-col items-center gap-5 md:gap-[40px] justify-between md:flex-row">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              Repeat Password
            </p>
            <input
              type="pasword"
              className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
            />
          </div>
          <h1 className="text-left font-bold text-base mt-3">Adress </h1>
          <div className="flex flex-col items-center gap-5 md:gap-[40px] justify-between md:flex-row">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              City
            </p>
            <input
              type="text"
              className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
            />
          </div>
          <div className="flex flex-col items-center gap-5 md:gap-[40px] justify-between md:flex-row">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              Country
            </p>
            <input
              type="text"
              className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
            />
          </div>
          <div className="flex flex-col items-center gap-5 md:gap-[40px] justify-between md:flex-row">
            <p className="font-bold w-[100px] text-sm text-left text-[var(--main-color)]">
              Postal Code
            </p>
            <input
              type="text"
              className="w-full py-[6px] px-3 border-2 border-white rounded-lg bg-transparent"
            />
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
