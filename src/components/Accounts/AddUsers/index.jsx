import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTaxes, updateTaxes } from "../../../redux/taxesList/taxesReducers";

const AddUsers = () => {
  const { state } = useLocation();
  const [edit, setEdit] = useState({ type: false, id: null });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      percentage: "",
      status: ""
    },
    onSubmit: (values) => {
      if (edit.type) {
        const payload = {
          id: edit.id,
          name: values.name,
          percentage: values.percentage,
          status: values.status
        };
        dispatch(updateTaxes(payload));
      } else {
        const payload = {
          id: Date.now(),
          name: values.name,
          percentage: values.percentage,
          status: values.status
        };
        dispatch(addTaxes(payload));
      }
      formik.resetForm();
      setEdit({ type: false, id: null });
      navigate("/taces");
    },
  });

  useEffect(() => {
    if (state) {
      formik.setValues({
        name: state.name,
        percentage: state.percentage,
        status: state.status
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
          <div className="text-left mb-10 text-xl text-[var(--main-color)] font-bold">
            Add Taxes
          </div>
          <div className="text-left">
              <label
                className="text-sm font-bold mt-10 text-[var(--main-color)]"
                htmlFor=""
              >
                Taxes Name
              </label>
              <input
                id="name"
                name="name"
                className=" rounded-lg bg-transparent mb-5 w-full py-2 px-4 block border-2 border-white"
                type="text"
                placeholder="Name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <label
                className="text-sm font-bold text-[var(--main-color)] mt-10"
                htmlFor=""
              >
                Taxe Percentage
              </label>
              <input
                id="percentage"
                name="percentage"
                className=" rounded-lg bg-transparent w-full mb-5 py-2 px-4 block border-2 border-white"
                type="text"
                placeholder="percentage"
                onChange={formik.handleChange}
                value={formik.values.percentage}
              />

              <label
                className="text-sm font-bold text-[var(--main-color)]"
                htmlFor=""
              >
                Status
              </label>
              <input
                id="status"
                name="status"
                className=" rounded-lg bg-transparent w-full py-2 px-4 block border-2 border-white"
                type="text"
                placeholder="status"
                onChange={formik.handleChange}
                value={formik.values.status}
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

export default AddUsers
