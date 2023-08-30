import React, { useState } from "react";

import Select from "react-select";

export default () => {
  const options = [
    { value: "First", label: "First" },
    { value: "Second", label: "Second" },
    { value: "Third", label: "Third" },
    { value: "Fourth", label: "Fourth" },
    { value: "Fifth", label: "Fifth" },
  ];

  return (
    <>
      <div className="transaction_card p-5 mt-5">
        <h1 className="text-left font-bold text-base">Placeholder</h1>
        <p className="mt-2 text-left">
          Apply Placeholder by setting option placeholder option
        </p>
        <div className="flex flex-col mt-2">
          <Select options={options} />
        </div>
      </div>
    </>
  );
};
