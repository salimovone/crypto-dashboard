import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addHoliday,
  updateHoliday,
} from "../../../redux/holiday/holidayReducer";

const AddHoliday = () => {
  const { state } = useLocation();
  console.log(state);
  const [edit, setEdit] = useState({ type: false, id: null });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      holiday: "",
      holidayDate: "",
      weekDay: "",
    },
    onSubmit: (values) => {
      if (edit.type) {
        const payload = {
          id: edit.id,
          holiday: values.holiday,
          holidayDate: values.holidayDate,
          weekDay: values.weekDay,
        };
        dispatch(updateHoliday(payload));
      } else {
        const payload = {
          id: Date.now(),
          holiday: values.holiday,
          holidayDate: values.holidayDate,
          weekDay: values.weekDay,
        };
        dispatch(addHoliday(payload));
      }
      formik.resetForm();
      setEdit({ type: false, id: null });
      navigate("/holidays");
    },
  });
  useEffect(() => {
    if (state) {
      formik.setValues({
        holiday: state.holiday,
        holidayDate: state.holidayDate,
        weekDay: state.weekDay,
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
            Add Holiday
          </div>
          <div className="w-full text-left flex flex-col gap-4">
            <label
              className="text-sm font-bold text-[var(--main-color)] text-left"
              htmlFor=""
            >
              Holiday Name
            </label>
            <input
              id="holiday"
              name="holiday"
              className=" rounded-lg bg-transparent w-full py-2 px-4 block border-2 border-white"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.holiday}
            />

            <label
              className="text-sm font-bold text-[var(--main-color)] text-left"
              htmlFor=""
            >
              Holiday Date
            </label>
            <input
              id="holidayDate"
              name="holidayDate"
              className=" rounded-lg bg-transparent w-full py-2 px-4 block border-2 border-white"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.holidayDate}
            />
            <label
              className="text-sm font-bold text-[var(--main-color)] text-left"
              htmlFor=""
            >
              Week Day
            </label>
            <input
              id="weekDay"
              name="weekDay"
              className=" rounded-lg bg-transparent w-full py-2 px-4 block border-2 border-white"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.weekDay}
            />
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

export default AddHoliday;
