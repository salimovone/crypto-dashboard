import { AiOutlineDownload } from "react-icons/ai";
import React from "react";
import Navbar from "../../components/Navbar";
import HeadIntro from "../../components/HeadIntro";
import { cardData } from "./data";
import HeadCard from "../../components/HeadCard";
import { TableDiv, Ul } from "./style";
import HeadBtcIndex from "../../components/HeadBtcIndex";
import Dashchart from "../../components/DashChart";
import ExchangeCrypto from "../../components/ExchangeCrypto";
import HomeEarrings from "../../components/HomeEarrings";
import BuySell from "../../components/BuySellTable";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiCalendar } from "react-icons/bi";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[205vh]  p-[20px] pt-0">
        <HeadIntro className={"mt-4"} />
        <div className="flex flex-wrap justify-between">
          {cardData.map((item, index) => (
            <HeadCard key={index} {...item} />
          ))}
        </div>
        <Ul className="mt-5">
          {Array(7)
            .fill(0)
            .map((item, index) => (
              <HeadBtcIndex key={index} index={index} />
            ))}
        </Ul>
        <Dashchart />
        <ExchangeCrypto />
        <HomeEarrings />
        <div className="payment_card p-0 mt-5">
          <div className="w-full flex items-center">
            <p className="text-base md:text-[20px] text-left text-[#35446f] font-bold">
              Market Capitalizations
            </p>
            <div className="selection w-full flex gap-3 justify-end">
              <div className="flex gap-[10px] flex-col md:flex-row">
                <div className="w-full   h-[38px] border-[2px] border-white rounded-lg p-[8px] flex items-center max-md:w-full">
                  <BiCalendar /> <span className="text-[12px] md:text-base">8-1-2023 - 8-31-2023</span>
                  <IoMdArrowDropdown />
                </div>
              </div>
              <button>
                <AiOutlineDownload />
              </button>
            </div>
          </div>
          <div className="w-full mt-0 overflow-x-scroll xl:overflow-x-hidden">
            <BuySell />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
