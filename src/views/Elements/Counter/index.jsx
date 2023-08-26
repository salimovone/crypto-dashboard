import React from "react";
import Navbar from "../../../components/Navbar";
import Clients from "../../../components/CounterComponent/Clients";
import TotalSales from "../../../components/CounterComponent/TotalSales";
import TotalProject from "../../../components/CounterComponent/TotalProject";
import CustomOutput from "../../../components/CounterComponent/CustomOutput";
import Countdown from "../../../components/CounterComponent/Countdown";
import CountUp from "../../../components/CounterComponent/CountUp";
import CountCallback from "../../../components/CounterComponent/CountCallback";

const Counter = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 px-5">
        <h1 className="text-left font-bold text-xl text-[var(--main-color)]">
          Counter
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-6">
          <Clients />
          <TotalSales />
          <TotalProject />
          <Countdown second={180} />
          <CountUp />
          <CountCallback />
          <CustomOutput />
        </div>
      </div>
    </div>
  );
};

export default Counter;
