import React from "react";
import Navbar from "../../../components/Navbar";
import DefaultSpinner from "../../../components/SpinnerComponents/DefaultSpinner";
import SpinnerSize from "../../../components/SpinnerComponents/SpinnerSize";
import ColorSpinner from "../../../components/SpinnerComponents/ColorSpinner";
import CustomSpinner from "../../../components/SpinnerComponents/CustomSpinner";

const Loader = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 px-5">
        <div className="text-left font-bold text-xl text-[var(--main-color)]">
          Spinner
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="w-full p-5 transaction_card">
            <div className="text-left font-bold text-base">Default Spinner</div>
            <div classNama="mt-3">
              <DefaultSpinner />
            </div>
          </div>
          <div className="w-full p-5 transaction_card">
            <div className="text-left font-bold text-base">Spinner Size</div>
            <div classNama="mt-3">
              <SpinnerSize />
            </div>
          </div>
          <div className="w-full p-5 transaction_card">
            <div className="text-left font-bold text-base">Spinner Colors</div>
            <div classNama="mt-3">
              <ColorSpinner />
            </div>
          </div>
          <div className="w-full p-5 transaction_card">
            <div className="text-left font-bold text-base">Custom Spinner</div>
            <div classNama="mt-3">
              <CustomSpinner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
