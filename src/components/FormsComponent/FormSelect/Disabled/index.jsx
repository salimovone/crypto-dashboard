import React from "react";

import Select from "react-select";

export default () => {
  const options = [
    { value: "orange", label: "orange" },
    { value: "white", label: "white" },
    { value: "purple", label: "purple" },
  ];

  return (
    <>
      <div className="transaction_card p-5 mt-5">
        <h1 className="text-left font-bold text-base">Disabling Options</h1>
        <p className="mt-2 text-left">
          Disable Select using disabled attribute.
        </p>
        <div className="flex flex-col mt-2">
          <Select isDisabled={true} options={options} />
        </div>
      </div>
    </>
  );
};
