import { AiOutlineArrowUp } from "react-icons/ai";
import React from "react";

const HeadBtcIndex = ({ index }) => {
  return (
    <li>
      <h4 className="text-[#35446f] text-sm font-semibold">BITCOIN (BTC)</h4>
      <h3 className="text-base mt-2">$3.245</h3>
      <p
        style={{
          fontWeight: "600 !important",
          color: index !== 1 ? "#0dbf0a" : "#fe3f51",
        }}
        className="text-base font-semibold flex items-center mt-2"
      >
        <AiOutlineArrowUp /> (2.38%)
      </p>
    </li>
  );
};

export default HeadBtcIndex;
