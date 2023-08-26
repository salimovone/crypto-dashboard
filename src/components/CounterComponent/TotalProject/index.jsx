import React from "react";
import Counter from "../Counter";

export default () => {
  return (
    <div className="transaction_card p-5">
      <div className="font-bold text-left text-base">Total Project</div>
      <div className="flex justify-start">
        <Counter number={"15000"} />
      </div>
    </div>
  );
};
