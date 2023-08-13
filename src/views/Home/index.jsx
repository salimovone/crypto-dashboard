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

const Dashboard = () => {
  return (
    <div className="w-full h-[205vh]  p-[30px]">
      <Navbar />
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
      <TableDiv>
        <div className="w-full flex items-center">
          <p className="text-[20px] text-[#35446f] font-bold">
            Market Capitalizations
          </p>
          <div className="selection w-full flex justify-end" >
            <select name="" id="">
              <option value="">8-7-2023 - 8-13-2023</option>
              <option value="">8-7-2023 - 8-13-2023</option>
              <option value="">8-7-2023 - 8-13-2023</option>
              <option value="">8-7-2023 - 8-13-2023</option>
            </select>
            <button>
              <AiOutlineDownload />
            </button>
          </div>
        </div>
        <BuySell />
      </TableDiv>
    </div>
  );
};

export default Dashboard;
