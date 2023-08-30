import React from "react";
import Navbar from "../../../components/Navbar";
import BasicExample from "../../../components/FormsComponent/InputGroup/BasicExample";
import Sizing from "../../../components/FormsComponent/InputGroup/Sizing";
import CheckAndRadio from "../../../components/FormsComponent/InputGroup/CheckAndRadio";
import Multiple from "../../../components/FormsComponent/InputGroup/Multiple";
import Dropdown from "../../../components/FormsComponent/InputGroup/Dropdown";

const InputGroup = () => {
  return (
    <div>
      <Navbar />
      <div className="px-5 mt-5">
        <h1 className="text-left font-bold text-xl text-[var(--main-color)]">
          Input Groups
        </h1>
        <div className="">
          <BasicExample />
        </div>
        <div>
          <Sizing />
        </div>
        <div>
          <CheckAndRadio />
        </div>
        <div>
          <Multiple />
        </div>
        <div>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default InputGroup;
