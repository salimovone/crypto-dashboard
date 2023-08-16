import React from "react";
import { Diagram } from "../LeftDiagram/style";

const Rightpie = () => {
  return (
    <div>
      <div className="">
        <Diagram color={"#fe3f51"}>
          <div className="text-xl font-semibold">66%</div>
        </Diagram>
        <div>
          <p className="text-sm text-center">Main Limits</p>
          <p className="text-md text-[#fe3f51] font-bold text-center">
            $10,000
          </p>
        </div>
      </div>
    </div>
  );
};
export default Rightpie;
