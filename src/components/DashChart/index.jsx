import { MdOutlineFileDownload } from "react-icons/md"; 
import React from "react";
import { DownloadButton, H2, Main, TimerButton } from "./style";
import CandleStickChart from "../CandleStickChart";

 



const Dashchart = () => {
  return (
    <Main className="mt-7">
      <div className="flex flex-wrap justify-between items-center">
        <div className="md:flex items-center gap-5 flex-wrap">
          <h2 className="text-[#35446f] text-xl font-semibold">Money Flow</h2>
          <div className="md:flex gap-5">
            {["#234ce3", "#0dbf0a", "#ab18ff", "#fe3f51"].map((item) => (
              <div key={item} className="w-full">
                <p className="text-[#818181]">Last:</p>
                <H2 color={item}>0.03242000</H2>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-1 max-sm:flex-wrap">
          {["1M", "5M", "20M", "30M", "1Hr", "2Hr"].map((item,idx) => (
            <TimerButton key={item} active={idx===2&&true}>{item}</TimerButton>
          ))}
          <DownloadButton><MdOutlineFileDownload /></DownloadButton>

        </div>
      </div>
          <CandleStickChart />
    </Main>
  );
};

export default Dashchart;
