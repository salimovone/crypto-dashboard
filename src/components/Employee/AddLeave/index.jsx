import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLeave, updateLeave } from "../../../redux/leaveList/leaveReducer";

const AddLeave = () => {
  const { state } = useLocation();
  console.log(state);
  const [edit, setEdit] = useState({ type: false, id: null });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      employe: "",
      leaveType: "",
      from: "",
      to: "",
      days: "",
      reason: "",
      status: "",
    },
    onSubmit: (values) => {
      if (edit.type) {
        const payload = {
          id: edit.id,
          employe: values.employe,
          leaveType: values.leaveType,
          from: values.from,
          to: values.to,
          days: values.days,
          reason: values.reason,
          status: values.status,
        };
        dispatch(updateLeave(payload));
      } else {
        const payload = {
          id: Date.now(),
          employe: values.employe,
          leaveType: values.leaveType,
          from: values.from,
          to: values.to,
          days: values.days,
          reason: values.reason,
          status: values.status,
        };
        dispatch(addLeave(payload));
      }
      formik.resetForm();
      setEdit({ type: false, id: null });
      navigate("/leaves");
    },
  });
  useEffect(() => {
    if (state) {
      formik.setValues({
        employe: state.employe,
        leaveType: state.leaveType,
        from: state.from,
        to: state.to,
        days: state.days,
        reason: state.reason,
        status: state.status,
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
            Add Leave
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
                id="employe"
                name="employe"
                className=" rounded-lg bg-transparent w-full py-2 px-4 block border-2 border-white"
                type="text"
                placeholder="Employee"
                onChange={formik.handleChange}
                value={formik.values.employe}
              />

              <label
                className="text-sm font-bold text-[var(--main-color)] text-left"
                htmlFor=""
              >
                Leave Type
              </label>
              <input
                id="leaveType"
                name="leaveType"
                className=" rounded-lg bg-transparent w-full py-2 px-4 block border-2 border-white"
                type="text"
                placeholder="Leave Type"
                onChange={formik.handleChange}
                value={formik.values.leaveType}
              />

              <label
                className="text-sm font-bold text-[var(--main-color)] text-left"
                htmlFor=""
              >
                From
              </label>
              <input
                id="from"
                name="from"
                className=" rounded-lg bg-transparent w-full py-2 px-4 block border-2 border-white"
                type="text"
                placeholder="From"
                onChange={formik.handleChange}
                value={formik.values.from}
              />
              <label
                className="text-sm font-bold text-[var(--main-color)] text-left"
                htmlFor=""
              >
                To
              </label>
              <input
                id="to"
                name="to"
                className=" rounded-lg bg-transparent w-full py-2 px-4 block border-2 border-white"
                type="text"
                placeholder="To"
                onChange={formik.handleChange}
                value={formik.values.to}
              />
            </div>
            <div className="w-full text-left flex flex-col gap-4">
              <label
                className="text-sm font-bold text-[var(--main-color)] text-left"
                htmlFor=""
              >
                Not a days
              </label>
              <input
                id="days"
                name="days"
                className=" rounded-lg bg-transparent w-full py-2 px-4 block border-2 border-white"
                type="text"
                placeholder="Days"
                onChange={formik.handleChange}
                value={formik.values.days}
              />

              <label
                className="text-sm font-bold text-[var(--main-color)] text-left"
                htmlFor=""
              >
                Reason
              </label>
              <input
                id="reason"
                name="reason"
                className=" rounded-lg bg-transparent w-full py-2 px-4 block border-2 border-white"
                type="text"
                placeholder="Reason"
                onChange={formik.handleChange}
                value={formik.values.reason}
              />

              <label
                className="text-sm font-bold text-[var(--main-color)] text-left"
                htmlFor=""
              >
                Status
              </label>
              <input
                id="status"
                name="status"
                className=" rounded-lg bg-transparent w-full py-2 px-4 block border-2 border-white"
                type="text"
                placeholder="Status"
                onChange={formik.handleChange}
                value={formik.values.status}
              />
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

export default AddLeave;
