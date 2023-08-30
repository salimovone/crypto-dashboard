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
        <h1 className="text-left font-bold text-base">Small Select2</h1>
        <p className="mt-2 text-left">
          Use data('select2') function to get container of select2.
        </p>
        <div className="flex flex-col mt-2">
          <Select options={options} />
        </div>
      </div>
    </>
  );
};
