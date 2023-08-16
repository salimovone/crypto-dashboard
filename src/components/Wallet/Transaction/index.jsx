import React from "react";
import LineChart from "./LineChart";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiCalendar } from "react-icons/bi";

const WalletTransaction = () => {
  return (
    <div className="px-[20px] ">
      <div className="transaction_card">
        <div className="flex justify-between">
          <div className="text-[20px] text-left font-bold text-[#35446f]">
            Transaction
          </div>
          <div className="flex gap-[10px] flex-col md:flex-row">
            <div className="w-full   h-[38px] border-[2px] border-white rounded-lg p-[8px] flex items-center max-md:w-full">
              <BiCalendar /> <span>8-1-2023 - 8-31-2023</span>
              <IoMdArrowDropdown />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default WalletTransaction;
