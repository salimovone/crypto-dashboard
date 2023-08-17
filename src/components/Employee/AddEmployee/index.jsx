import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addEmployee,
  updateEmployee,
} from "../../../redux/employeeList/employeeReducer";

const AddEmployee = () => {
  const { state } = useLocation();
  const [edit, setEdit] = useState({ type: false, id: null });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      employee: "",
      iD: "",
      number: "",
      date: "",
      role: "",
    },
    onSubmit: (values) => {
      if (edit.type) {
        const payload = {
          id: edit.id,
          employee: values.employee,
          iD: values.iD,
          number: values.number,
          date: values.date,
          role: values.role,
        };
        dispatch(updateEmployee(payload));
      } else {
        const payload = {
          id: Date.now(),
          employee: values.employee,
          iD: values.iD,
          number: values.number,
          date: values.date,
          role: values.role,
        };
        dispatch(addEmployee(payload));
      }
      formik.resetForm();
      setEdit({ type: false, id: null });
      navigate("/employeesList");
    },
  });
  useEffect(() => {
    if (state) {
      formik.setValues({
        employee: state.employee,
        iD: state.iD,
        number: state.number,
        date: state.date,
        role: state.role,
      });
      setEdit({ type: true, id: state.id });
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div className="px-[20px] md:px-[40px] lg:px-[100px] mt-5">
        <form
          onSubmit={formik.handleSubmit}
          className=" rounded-lg shadow-lg transaction_card p-5"
        >
          <div className="text-left text-xl text-[var(--main-color)] font-bold">
            Add Employee
          </div>
          <div className="flex flex-col md:flex-row md:flex md:justify-between gap-5 mt-5">
            <div className="w-full text-left flex flex-col gap-4">
              <label
                className="text-sm font-bold text-[var(--main-color)] text-left"
                htmlFor=""
              >
                Employee
              </label>
              <input
                id="employee"
                name="employee"
                className=" rounded-lg bg-transparent w-full py-2 px-4 block border-2 border-white"
                type="text"
                placeholder="Employee"
                onChange={formik.handleChange}
                value={formik.values.employee}
              />

              <label
                className="text-sm font-bold text-[var(--main-color)] text-left"
                htmlFor=""
              >
                Employee ID
              </label>
              <input
                id="iD"
                name="iD"
                className=" rounded-lg bg-transparent w-full py-2 px-4 block border-2 border-white"
                type="text"
                placeholder="Employee ID"
                onChange={formik.handleChange}
                value={formik.values.iD}
              />

              <label
                className="text-sm font-bold text-[var(--main-color)] text-left"
                htmlFor=""
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                className=" rounded-lg bg-transparent w-full py-2 px-4 block border-2 border-white"
                type="text"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className="w-full text-left flex flex-col gap-4">
              <label
                className="text-sm font-bold text-[var(--main-color)] text-left"
                htmlFor=""
              >
                Number
              </label>
              <input
                id="number"
                name="number"
                className=" rounded-lg bg-transparent w-full py-2 px-4 block border-2 border-white"
                type="text"
                placeholder="Number"
                onChange={formik.handleChange}
                value={formik.values.number}
              />

              <label
                className="text-sm font-bold text-[var(--main-color)] text-left"
                htmlFor=""
              >
                Join Date
              </label>
              <input
                id="date"
                name="date"
                className=" rounded-lg bg-transparent w-full py-2 px-4 block border-2 border-white"
                type="text"
                placeholder="Join Date"
                onChange={formik.handleChange}
                value={formik.values.date}
              />

              <label
                className="text-sm font-bold text-[var(--main-color)] text-left"
                htmlFor=""
              >
                Role
              </label>
              <input
                id="role"
                name="role"
                className=" rounded-lg bg-transparent w-full py-2 px-4 block border-2 border-white"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.role}
              />
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <div className="flex gap-2">
              <input type="radio" name="status" />
              Active
            </div>
            <div className="flex gap-2">
              <input type="radio" name="status" />
              Inactive
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#234ce3] rounded-lg w-full py-2 px-10 text-white font-medium mt-10"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
