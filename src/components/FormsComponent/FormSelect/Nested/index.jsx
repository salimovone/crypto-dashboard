import React from "react";

import Select from "react-select";

export default () => {
  const options = [
    { value: "", label: "Gruop 1" },
    { value: "orange", label: "orange" },
    { value: "white", label: "white" },
    { value: "purple", label: "purple" },
    { value: "", label: "Gruop 2" },
    { value: "orange", label: "orange" },
    { value: "white", label: "white" },
    { value: "purple", label: "purple" },
    { value: "", label: "Gruop 3" },
    { value: "orange", label: "orange" },
    { value: "white", label: "white" },
    { value: "purple", label: "purple" },
  ];

  return (
    <>
      <div className="transaction_card p-5 mt-5">
        <h1 className="text-left font-bold text-base">Nested</h1>
        <p className="mt-2 text-left">
          Add options inside the optgroups to for group options.
        </p>
        <div className="flex flex-col mt-2">
          <Select options={options} />
        </div>
      </div>
    </>
  );
};
