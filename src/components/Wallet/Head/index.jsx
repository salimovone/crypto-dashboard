import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiCalendar } from "react-icons/bi";

const WalletHead = () => {
  return (
    <div className="px-[20px]">
      <div className="flex flex-col md:flex-row justify-between items-center mt-[40px]">
        <div className="text-[20px] text-left font-bold text-[#35446f]">
          My Wallet
        </div>
        <div className="flex gap-[10px] flex-col md:flex-row">
          <div className="w-full   h-[38px] border-[2px] border-white rounded-lg p-[8px] flex items-center max-md:w-full">
            <BiCalendar /> <span>8-1-2023 - 8-31-2023</span>
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletHead;
