import React from "react";
import Navbar from "../../../components/Navbar";
import FormMaskComponent from "../../../components/FormsComponent/FormMaskComponent";

const FormMask = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 px-5">
        <h1 className="text-left font-bold text-xl text-[var(--main-color)]">
          Form Mask
        </h1>
        <div>
          <FormMaskComponent />
        </div>
      </div>
    </div>
  );
};

export default FormMask;
