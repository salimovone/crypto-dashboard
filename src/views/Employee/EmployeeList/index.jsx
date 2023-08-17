import React from "react";
import EmployeesList from "../../../components/Employee/EmployeesList";
import Navbar from "../../../components/Navbar";

const EmployeeList = () => {
  return (
    <div>
      <Navbar />
      <div className="px-[20px]">
        <EmployeesList />
      </div>
    </div>
  );
};

export default EmployeeList;
