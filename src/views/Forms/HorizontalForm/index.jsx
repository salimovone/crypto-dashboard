import React from "react";
import Navbar from "../../../components/Navbar";
import BasicHorizontal from "../../../components/FormsComponent/HorizontalForm/BasicHorizontal";
import AdressHorizontal from "../../../components/FormsComponent/HorizontalForm/AdressHorizontal";
import ColumnHorizontal from "../../../components/FormsComponent/HorizontalForm/ColumnHorizontal";
import PersonalDetail from "../../../components/FormsComponent/HorizontalForm/PersonalDetail";

const HorizontalForm = () => {
  return (
    <div>
      <Navbar />
      <div className="px-5 mt-5 ">
        <h1 className="text-left font-bold text-xl text-[var(--main-color)]">
          Horizontal Form
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <BasicHorizontal />
          <AdressHorizontal />
        </div>
        <div>
          <ColumnHorizontal />
        </div>
        <div>
          <PersonalDetail />
        </div>
      </div>
    </div>
  );
};

export default HorizontalForm;
