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
        <h1 className="text-left font-bold text-base">
          Limiting The Number Of Tagging
        </h1>
        <p className="mt-2 text-left">
          Set maximumSelectionLength: 2 with tags: true to limit selectin in Tag
          mode.
        </p>
        <div className="flex flex-col mt-2">
          <Select
            isMulti
            name="colors"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
      </div>
    </>
  );
};
