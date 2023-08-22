import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default () => {
  const topLeft = () => {
    toast("Your work has been saved", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
      hideProgressBar: true,
    });
  };
  return (
    <div>
      <button
        onClick={() => {
          topLeft();
        }}
        className="px-3 py-[6px] text-sm text-[var(--succes-color)] border border-[var(--succes-color)] rounded-lg transition-all hover:bg-[var(--succes-color)] bg-transparent hover:text-white"
      >
        Top End
      </button>
      <ToastContainer />
    </div>
  );
};
