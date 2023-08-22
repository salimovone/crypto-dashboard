import React from "react";
import Navbar from "../../../components/Navbar";
import BasicAlert from "./BasicAlert";
import PositionAlert from "./PositionAlert";
import TypesAlert from "./TypesAlert";
import ConfirmOption from "./ConfirmOption";

const SweetAlerts = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="px-5">
          <p className="mt-5 text-xl text-[var(--main-color)] font-bold text-left">
            Sweet Alerts
          </p>
          <div className="mt-5">
            <BasicAlert />
          </div>
          <div className="mt-5">
            <PositionAlert />
          </div>
          <div className="mt-5">
            <TypesAlert />
          </div>
          <div className="mt-5">
            <ConfirmOption />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SweetAlerts;
