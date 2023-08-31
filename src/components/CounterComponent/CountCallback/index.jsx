import React from "react";

export default () => {
  return (
    <div className="transaction_card p-5">
      <h1 className="text-left text-base font-bold">Count Callback</h1>
      <p className="text-left">
        Count from 10 to 0 and calls timer end callback
      </p>
      <div className="line-through flex justify-start">00 Days 00:00:00</div>
    </div>
  );
};
