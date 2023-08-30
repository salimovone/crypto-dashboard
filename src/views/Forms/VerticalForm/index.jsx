import React from "react";
import Navbar from "../../../components/Navbar";
import BasicVertical from "../../../components/FormsComponent/HorizontalForm/VerticalForm/BasicVertical";
import AdressVertical from "../../../components/FormsComponent/HorizontalForm/VerticalForm/AdressVertical";
import ColumnVertical from "../../../components/FormsComponent/HorizontalForm/VerticalForm/ColumnVertical";
import PersonalDetail from "../../../components/FormsComponent/HorizontalForm/VerticalForm/PersonalDetail";

const VerticalForm = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 px-5">
        <h1 className="text-left font-bold text-xl text-[var(--main-color)]">
          Vertical Form
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <BasicVertical />
          </div>
          <div>
            <AdressVertical />
          </div>
        </div>
        <div>
          <ColumnVertical />
        </div>
        <div>
          <PersonalDetail />
        </div>
      </div>
    </div>
  );
};

export default VerticalForm;
