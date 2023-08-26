import React from "react";
import Counter from "../Counter";

export default () => {
  return (
    <div className="transaction_card p-5">
      <div className="font-bold text-left text-base">Total Sales</div>
      <div className="flex justify-start">
        <Counter number={"10000"} />
      </div>
    </div>
  );
};
