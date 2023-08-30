import React from "react";
import Navbar from "../../../components/Navbar";
import Basicinput from "../../../components/FormsComponent/BasicInput/BasicInput";
import InputSize from "../../../components/FormsComponent/BasicInput/InputSize";

const BasicInput = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 p-5">
        <h1 className="text-xl text-left text-[var(--main-color)] font-bold">
          Basic Inputs
        </h1>
        <div className="">
          <Basicinput />
        </div>
        <div>
          <InputSize />
        </div>
      </div>
    </div>
  );
};

export default BasicInput;
