import { BiCreditCard } from "react-icons/bi";
import { CiLollipop } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import React from "react";
import SellerDetail from "./SellerDetail";
import CompanyDocument from "./CompanyDocument";
import BankDetail from "./BankDetail";
import { useState } from "react";

export default () => {
  const [wizard, setWizard] = useState("one");
  const handleClik = () => {
    setWizard("two");
  };
  const handleClik2 = () => {
    setWizard("three");
  };
  const handlePrevius = () => {
    setWizard("one");
  };
  const handlePreviu2 = () => {
    setWizard("two");
  };
  const items = {
    one: <SellerDetail onclik={handleClik} />,
    two: <CompanyDocument onclik={handleClik2} previus={handlePrevius} />,
    three: <BankDetail previus={handlePreviu2} />,
  };
  return (
    <div className="transaction_card p-5 mt-5">
      <div className="text-left font-bold text-base">Basic Wizard</div>
      <div className="flex justify-center gap-[50px] md:gap-0 items-center mt-6">
        <button
          onClick={() => {
            setWizard("one");
          }}
          className="w-[40px] md:w-[56px] md:h-[56px]  h-[40px]   flex justify-center items-center border border-gray-500 rounded-full transition-all text-2xl text-[#5156be] bg-transparent"
        >
          <FaRegUser />
        </button>
        <div className="w-[200px] hidden md:block h-[2px] bg-gray-400"></div>
        <button
          onClick={() => {
            setWizard("two");
          }}
          className="w-[40px] md:w-[56px] md:h-[56px]  h-[40px]   flex justify-center items-center border border-gray-500 rounded-full transition-all text-2xl text-[#5156be] bg-transparent"
        >
          <CiLollipop />
        </button>
        <div className="w-[200px] hidden md:block h-[2px] bg-gray-400"></div>
        <button
          onClick={() => {
            setWizard("three");
          }}
          className="w-[40px] md:w-[56px] md:h-[56px]  h-[40px]   flex justify-center items-center border border-gray-500 rounded-full transition-all text-2xl text-[#5156be] bg-transparent"
        >
          <BiCreditCard />
        </button>
      </div>
      <div className="mt-5">{items[wizard]}</div>
    </div>
  );
};
