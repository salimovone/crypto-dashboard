import React from "react";
import Navbar from "../../../components/Navbar";
import BasicPopever from "./BasicPopever";
import DirectionPoperver from "./DirectionPoperver";

const Popever = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 px-[20px]">
        <div className="text-left text-xl font-bold text-[var(--main-color)]">
          Popever
        </div>
        <div className="mt-5">
          <BasicPopever />
        </div>
        <div className="mt-5">
          <DirectionPoperver />
        </div>
      </div>
    </div>
  );
};

export default Popever;
