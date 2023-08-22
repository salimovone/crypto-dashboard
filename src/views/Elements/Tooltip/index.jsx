import React from "react";
import Navbar from "../../../components/Navbar";
import HtmlElemnt from "./HtmlElemnt";

const Tooltip = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 px-5">
        <div className="text-xl font-bold text-[var(--main-color)]">
          Tooltip
        </div>
        <div className="mt-5">
          <HtmlElemnt title="Html Element" one />
          <HtmlElemnt title="Direction Tooltip" two />
          <HtmlElemnt title="Html Element" there />
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
