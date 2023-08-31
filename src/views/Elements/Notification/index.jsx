import React from "react";
import Alert from "../../../components/Notification/Alert";
import Navbar from "../../../components/Navbar";
import Confirm from "../../../components/Notification/Confirm";
import Promt from "../../../components/Notification/Promt";
import SuccesAlert from "../../../components/Notification/SuccesAlert";
import ErrorAlert from "../../../components/Notification/ErrorAlert";
import WarningAlert from "../../../components/Notification/WarningAlert";

const Notification = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 px-5">
        <h1 className="text-left font-bold text-xl text-[var(--main-color)]">
          Notification
        </h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          <Alert />
          <Confirm />
          <Promt />
          <SuccesAlert />
          <ErrorAlert />
          <WarningAlert />
        </div>
      </div>
    </div>
  );
};

export default Notification;
