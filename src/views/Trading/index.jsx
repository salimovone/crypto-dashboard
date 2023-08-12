import React from "react";
import CandleStickChart from "../../components/CandleStickChart";
import TableTop from "../../components/Table-top";
import Table from "../../components/BuySell-Table";
import Navbar from "../../components/Navbar";
import { AiOutlineDownload } from "react-icons/ai";

export default () => {
  return (
    <div>
      <Navbar />

      <div className="container2">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:ml-9 xl:gap-32 lg:gap-10">
          <div>
            <p className="text-[20px] font-medium text-[#35446F]">Trading</p>
          </div>

          <div>
            <div className="flex gap-2">
              <div>
                <input
                  type="text"
                  placeholder="8-2-2023 - 8-8-2023"
                  className="h-[40px] pl-5 w-[90%] md:w-[180px] rounded-xl border-2 bg-inherit border-white"
                />
              </div>
              <div className="rounded-lg w-[40px] text-[22px] text-blue-600 flex justify-center items-center h-[40px]  border-2 border-white">
                <AiOutlineDownload />
              </div>
            </div>
          </div>
        </div>
        <CandleStickChart />
      </div>

      <TableTop />
      <Table />
    </div>
  );
};
