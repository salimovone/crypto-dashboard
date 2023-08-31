import React from "react";
import Navbar from "../../../components/Navbar";
import BasicWizard from "../../../components/FormWizardComponent/BasicWizard";
import WizardWithProgress from "../../../components/FormWizardComponent/ProgressBarWizard";

const WizardForm = () => {
  return (
    <div>
      <Navbar />
      <div className="px-5 mt-5 ">
        <h1 className="text-xl font-bold text-[var(--main-color)] text-left">
          Form Wizard
        </h1>
        <div>
          <BasicWizard />
        </div>
        <div className="">
          <WizardWithProgress />
        </div>
      </div>
    </div>
  );
};

export default WizardForm;
