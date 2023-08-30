import React from "react";
import Navbar from "../../../components/Navbar";
import CustomValidation from "../../../components/FormsComponent/FormValidation/CustomValidation";
import BrowserDefault from "../../../components/FormsComponent/FormValidation/BrowserDefault";
import SupportedElements from "../../../components/FormsComponent/FormValidation/SupportedElements";
import ServerSide from "../../../components/FormsComponent/FormValidation/ServerSide";
import Tooltip from "../../../components/FormsComponent/FormValidation/Tooltip";

const FormValidation = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 px-5">
        <h1 className="text-left font-bold text-xl text-[var(--main-color)]">
          Form Validation
        </h1>
        <div>
          <CustomValidation />
        </div>
        <div>
          <BrowserDefault />
        </div>
        <div>
          <ServerSide />
        </div>
        <div>
          <SupportedElements />
        </div>
        <div>
          <Tooltip />
        </div>
      </div>
    </div>
  );
};

export default FormValidation;
