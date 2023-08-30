import React from "react";
import Navbar from "../../../components/Navbar";
import Basic from "../../../components/FormsComponent/FormSelect/Basic";
import Nested from "../../../components/FormsComponent/FormSelect/Nested";
import Placeholder from "../../../components/FormsComponent/FormSelect/Placeholder";
import MultiValue from "../../../components/FormsComponent/FormSelect/MultiValue";
import SmallSelect from "../../../components/FormsComponent/FormSelect/SmallSelect";
import Disabled from "../../../components/FormsComponent/FormSelect/Disabled";
import Limiting from "../../../components/FormsComponent/FormSelect/Limiting";

const FormSelect = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 px-5">
        <h1 className="text-left font-bold text-xl text-[var(--main-color)]">
          Form Select
        </h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <Basic />
          <Nested />
          <Placeholder />
          <MultiValue />
          <SmallSelect />
          <Disabled />
          <Limiting />
        </div>
      </div>
    </div>
  );
};

export default FormSelect;
