import React from "react";
import Counter from "../Counter";

export default () => {
  return (
    <div className="transaction_card p-5">
      <div className="font-bold text-left text-base">Clients</div>
      <div className="flex justify-start">
        <Counter number={"3000"} />
      </div>
    </div>
  );
};
