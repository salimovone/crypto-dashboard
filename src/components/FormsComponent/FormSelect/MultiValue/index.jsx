import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default () => {
  const options = [
    { value: "orange", label: "orange" },
    { value: "white", label: "white" },
    { value: "purple", label: "purple" },
  ];
  return (
    <div className="transaction_card p-5 mt-5">
      <h1 className="text-left font-bold text-base">
        Tagging With Multi-Value Select Boxes
      </h1>
      <p className="mt-2 text-left">
        Set tags: true to convert select 2 in Tag mode.
      </p>
      <div className="mt-2">
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={options}
        />
      </div>
    </div>
  );
};
