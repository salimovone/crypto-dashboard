import React from "react";
import { useFormik } from "formik";

import * as Yup from "yup";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validateOnMount: true,
    validationSchema,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          className={`outline-none ${
            formik.errors.firstName && formik.errors.firstName
              ? "border border-red-500"
              : "border border-green-500"
          }`}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
