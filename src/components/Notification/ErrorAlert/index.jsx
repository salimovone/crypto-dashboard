import React from "react";
import { toast } from "react-toastify";
import { Toast } from "../../ToastrComponent/message";

import "react-toastify/dist/ReactToastify.css";
import ToastButton from "../../ToastrComponent/ToastButton";

export default () => {
  return (
    <div className="transaction_card p-5 ">
      <h1 className="text-left font-bold text-base">Error Alert</h1>
      <div className="mt-5 flex justify-start">
        <ToastButton
          onClik={() => {
            Toast({
              holat: toast.error,
              manzil: toast.POSITION.BOTTOM_RIGHT,
              text: "Error Message",
              progressbar: true,
            });
          }}
          background="var(--primary-color)"
          color="white"
          backgroundHover="var(--light-red-color)"
          colorHover="white"
          title="success"
        />
      </div>
    </div>
  );
};
