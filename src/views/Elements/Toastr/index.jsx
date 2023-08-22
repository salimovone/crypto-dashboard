import React from "react";
import Navbar from "../../../components/Navbar";
import { toast } from "react-toastify";
import { Toast } from "../../../components/ToastrComponent/message";

import "react-toastify/dist/ReactToastify.css";
import ToastButton from "../../../components/ToastrComponent/ToastButton";

const Toastr = () => {
  return (
    <div>
      <Navbar />

      <div className="px-5 mt-5">
        <h1 className="mt-5 text-[var(--main-color)] font-bold text-xl">
          Toastr
        </h1>

        <div className="p-5 transaction_card mt-5">
          <h1 className="text-base font-bold pb-4 text-left">Types</h1>
          <div className="flex flex-wrap gap-2">
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast.success,
                  manzil: toast.POSITION.TOP_RIGHT,
                  text: "Success Notify",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--succes-color)"
              backgroundHover="var(--succes-color)"
              colorHover="white"
              title="success"
              border="1px solid var(--succes-color)"
            />
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast.info,
                  manzil: toast.POSITION.TOP_RIGHT,
                  text: "Info Notify",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--info-color)"
              backgroundHover="var(--info-color)"
              colorHover="black"
              title="info"
              border="1px solid var(--info-color)"
            />
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast.warning,
                  manzil: toast.POSITION.TOP_RIGHT,
                  text: "Warning Notify",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--warning-color)"
              backgroundHover="var(--warning-color)"
              colorHover="black"
              title="warning"
              border="1px solid var(--warning-color)"
            />
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast.error,
                  manzil: toast.POSITION.TOP_RIGHT,
                  text: "Error Notify",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--error-color)"
              backgroundHover="var(--error-color)"
              colorHover="white"
              title="error"
              border="1px solid var(--error-color)"
            />
          </div>
        </div>

        {/* position */}
        <div className="p-5 transaction_card mt-5">
          <h1 className="text-base font-bold pb-4 text-left">Position</h1>
          <p className="text-left">Top position</p>
          <div className="flex flex-wrap gap-2">
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast,
                  manzil: toast.POSITION.TOP_LEFT,
                  text: "Top Left",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--primary-color)"
              backgroundHover="var(--primary-color)"
              colorHover="white"
              title="top on left"
              border="1px solid var(--primary-color)"
            />
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast,
                  manzil: toast.POSITION.TOP_CENTER,
                  text: "Top Center",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--primary-color)"
              backgroundHover="var(--primary-color)"
              colorHover="white"
              title="top on center"
              border="1px solid var(--primary-color)"
            />
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast,
                  manzil: toast.POSITION.TOP_RIGHT,
                  text: "Top Right",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--primary-color)"
              backgroundHover="var(--primary-color)"
              colorHover="white"
              title="top on right"
              border="1px solid var(--primary-color)"
            />
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast,
                  manzil: toast.POSITION.TOP_CENTER,
                  text: "Top full width",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--primary-color)"
              backgroundHover="var(--primary-color)"
              colorHover="white"
              title="top full width"
              border="1px solid var(--primary-color)"
            />
          </div>
          <p className="text-left mt-2">Bottom position</p>
          <div className="flex flex-wrap gap-2">
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast,
                  manzil: toast.POSITION.BOTTOM_LEFT,
                  text: "Bottom Left",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--primary-color)"
              backgroundHover="var(--primary-color)"
              colorHover="white"
              title="bottom on left"
              border="1px solid var(--primary-color)"
            />
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast,
                  manzil: toast.POSITION.BOTTOM_CENTER,
                  text: "Bottom Center",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--primary-color)"
              backgroundHover="var(--primary-color)"
              colorHover="white"
              title="bottom on center"
              border="1px solid var(--primary-color)"
            />
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast,
                  manzil: toast.POSITION.BOTTOM_RIGHT,
                  text: "Bottom Right",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--primary-color)"
              backgroundHover="var(--primary-color)"
              colorHover="white"
              title="bottom on right"
              border="1px solid var(--primary-color)"
            />
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast,
                  manzil: toast.POSITION.BOTTOM_CENTER,
                  text: "Bottom full width",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--primary-color)"
              backgroundHover="var(--primary-color)"
              colorHover="white"
              title="bottom full width"
              border="1px solid var(--primary-color)"
            />
          </div>
        </div>
        <div className="p-5 transaction_card mt-5">
          <p className="text-left text-base font-bold mt-2">Option</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast.info,
                  manzil: toast.POSITION.TOP_RIGHT,
                  text: "Notification",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--succes-color)"
              backgroundHover="var(--succes-color)"
              colorHover="white"
              title="notifications"
              border="1px solid var(--succes-color)"
            />
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast.success,
                  manzil: toast.POSITION.TOP_RIGHT,
                  text: "With Close Button",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--succes-color)"
              backgroundHover="var(--succes-color)"
              colorHover="white"
              title="bottom on center"
              border="1px solid var(--succes-color)"
            />
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast,
                  manzil: toast.POSITION.TOP_RIGHT,
                  text: "With Progress Bar",
                  progressbar: false,
                });
              }}
              background="transparent"
              color="var(--succes-color)"
              backgroundHover="var(--succes-color)"
              colorHover="white"
              title="Progress Bar"
              border="1px solid var(--succes-color)"
            />
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast,
                  manzil: toast.POSITION.TOP_RIGHT,
                  text: "Clear Toast",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--succes-color)"
              backgroundHover="var(--succes-color)"
              colorHover="white"
              title="Clear Toast"
              border="1px solid var(--succes-color)"
            />
          </div>
        </div>
        <div className="transaction_card mt-5 p-5 ">
          <h1 className="text-left text-base font-bold ">Clear Toast</h1>
          <p className="mt-2 text-left">Remove</p>
          <p className="mt-2 text-left">
            Immediately remove current toasts without using animation.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast.info,
                  manzil: toast.POSITION.TOP_RIGHT,
                  text: "Show Toast",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--info-color)"
              backgroundHover="var(--info-color)"
              colorHover="black"
              title="Show Toast"
              border="1px solid var(--info-color)"
            />
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast.info,
                  manzil: toast.POSITION.TOP_RIGHT,
                  text: "Remove Toast",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--error-color)"
              backgroundHover="var(--error-color)"
              colorHover="white"
              title="Remove Toast"
              border="1px solid var(--error-color)"
            />
          </div>
          <p className="mt-2 text-left">Clear</p>
          <p className="mt-2 text-left">
            Remove current toasts using animation.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast.info,
                  manzil: toast.POSITION.TOP_RIGHT,
                  text: "Show Toast",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--info-color)"
              backgroundHover="var(--info-color)"
              colorHover="black"
              title="Show Toast"
              border="1px solid var(--info-color)"
            />
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast.info,
                  manzil: toast.POSITION.TOP_RIGHT,
                  text: "Clear Toast",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--error-color)"
              backgroundHover="var(--error-color)"
              colorHover="white"
              title="Clear Toast"
              border="1px solid var(--error-color)"
            />
          </div>
        </div>
        <div className="mt-5 p-5 transaction_card">
          <h1 className="text-base font-bold text-left">Duration & Timeout</h1>
          <p className="text-left text-base">
            you can use options like showDuration, hideDuration, timeout for
            your toasts. To create a sticky toast set the timeout to 0
          </p>
          <div className="flex lfex-wrap gap-2 mt-2">
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast.info,
                  manzil: toast.POSITION.TOP_RIGHT,
                  text: "Show .5s",
                  progressbar: true,
                  duration: 500,
                });
              }}
              background="transparent"
              color="var(--info-color)"
              backgroundHover="var(--info-color)"
              colorHover="black"
              title="Show .5s"
              border="1px solid var(--info-color)"
            />

            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast.info,
                  manzil: toast.POSITION.TOP_RIGHT,
                  text: "Hide 3s",
                  progressbar: true,
                  duration: 3000,
                });
              }}
              background="transparent"
              color="var(--info-color)"
              backgroundHover="var(--info-color)"
              colorHover="black"
              title="Hide 3s"
              border="1px solid var(--info-color)"
            />
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast.info,
                  manzil: toast.POSITION.TOP_RIGHT,
                  text: "Timeout 5s",
                  progressbar: true,
                  duration: 5000,
                });
              }}
              background="transparent"
              color="var(--info-color)"
              backgroundHover="var(--info-color)"
              colorHover="black"
              title="Timeout 5s"
              border="1px solid var(--info-color)"
            />
            <ToastButton
              onClik={() => {
                Toast({
                  holat: toast.info,
                  manzil: toast.POSITION.TOP_RIGHT,
                  text: "Sticky Toast",
                  progressbar: true,
                });
              }}
              background="transparent"
              color="var(--info-color)"
              backgroundHover="var(--info-color)"
              colorHover="black"
              title="Sticky Toast"
              border="1px solid var(--info-color)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toastr;
