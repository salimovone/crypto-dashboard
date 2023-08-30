import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  userName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  city: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  state: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  zip: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default () => {
  const [check, setCheck] = useState(false);
  const handleCheck = () => {
    setCheck(!check);
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      city: "",
      state: "",
      zip: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validateOnMount: true,
    validationSchema,
  });
  return (
    <div className="transaction_card p-5 mt-5">
      <h1 className="text-left font-bold text-base">Server Side</h1>
      <p className="mt-3 text-left">
        We recommend using client side validation, but in case you require
        server side, you can indicate invalid and valid form fields with
        .is-invalid and .is-valid. Note that .invalid-feedback is also supported
        with these classes.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col md:flex-row gap-5 mt-3">
          <div className="flex flex-col gap-2 w-full">
            <p className="text-left">First Name</p>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              defaultValue={"Mark"}
              className={`w-full border-2 outline-none  py-[6px] px-3 rounded-lg bg-transparent ${
                formik.errors.firstName && formik.errors.firstName
                  ? "border border-red-500"
                  : "border border-green-500"
              }`}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-left">Last Name</p>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              defaultValue={"Otto"}
              className={`w-full border-2 outline-none  py-[6px] px-3 rounded-lg bg-transparent ${
                formik.errors.lastName && formik.errors.lastName
                  ? "border border-red-500"
                  : "border border-green-500"
              }`}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-left">Username</p>
            <div className="flex">
              <div className="bg-[#E9ECEF] border rounded-s-lg py-[6px] px-3 text-lg">
                @
              </div>
              <input
                id="userName"
                name="userName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.userName}
                className={`w-full border-2 outline-none  py-[6px] px-3 rounded-e-lg bg-transparent ${
                  formik.errors.userName && formik.errors.userName
                    ? "border border-red-500"
                    : "border border-green-500"
                }`}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-3">
          <div className="flex flex-col gap-2 w-full">
            <p className="text-left">City</p>
            <input
              id="city"
              name="city"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.city}
              className={`w-full border-2 outline-none  py-[6px] px-3 rounded-lg bg-transparent ${
                formik.errors.city && formik.errors.city
                  ? "border border-red-500"
                  : "border border-green-500"
              }`}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-left">State</p>
            <input
              id="state"
              name="state"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.state}
              className={`w-full border-2 outline-none  py-[6px] px-3 rounded-lg bg-transparent ${
                formik.errors.state && formik.errors.state
                  ? "border border-red-500"
                  : "border border-green-500"
              }`}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-left">Zip</p>
            <input
              id="zip"
              name="zip"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.zip}
              className={`w-full border-2 outline-none  py-[6px] px-3 rounded-lg bg-transparent ${
                formik.errors.zip && formik.errors.zip
                  ? "border border-red-500"
                  : "border border-green-500"
              }`}
            />
          </div>
        </div>
        <div className="flex gap-2 mt-5">
          <input
            type="checkbox"
            onClick={() => {
              handleCheck();
            }}
          />
          <p
            className={`text-sm font-bold text-[var(--main-color)] ${
              !check ? "text-red-500" : "text-green-500"
            }`}
          >
            Agree to terms and conditions
          </p>
        </div>
        <div className="flex justify-start mt-5">
          <button className="text-white text-sm px-3 py-[6px] bg-[var(--primary-color)] transition-all hover:bg-[var(--light-red-color)] rounded-lg">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};
