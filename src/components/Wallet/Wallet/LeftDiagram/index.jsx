import React from "react";
import { Diagram } from "./style";

const LeftPie = () => {
  return (
    <div>
      <div className="">
        <Diagram color={"#0dbf0a"}>
          <div className="text-xl font-semibold">66%</div>
        </Diagram>
        <div>
          <p className="text-sm text-center">Main Limits</p>
          <p className="text-md text-[#0dbf0a] font-bold text-center">
            $10,000
          </p>
        </div>
      </div>
    </div>
  );
};
export default LeftPie;
