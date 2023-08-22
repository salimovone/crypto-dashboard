import React, { useState } from "react";

export default () => {
  const [confirmAlert, setConfirmAlert] = useState(false);
  const [confirmAlert2, setConfirmAlert2] = useState(false);

  const handleConfirm = () => {
    setConfirmAlert2(false);
    setConfirmAlert(false);
  };

  return (
    <div>
      <div className="mt-5 transaction_card p-5">
        <div className="text-left text-lg font-bold text-[var(--main-color)]">
          Confirm Option
        </div>
        <p className="text-md text-left mt-3">Confirm Button Text</p>
        <p className="text-md text-left">
          Use confirmButtonText: "Your text here!" option to change the text of
          the "Confirm" button.
        </p>
        <div className="mt-3 flex justify-start">
          <button
            onClick={() => {
              setConfirmAlert(!confirmAlert);
            }}
            className="px-3 py-[6px] text-sm text-[var(--primary-color)] border border-[var(--primary-color)] rounded-lg transition-all hover:bg-[var(--primary-color)] bg-transparent hover:text-white"
          >
            Confirm Text
          </button>
        </div>

        {/* alerts */}
        <div
          className={`absolute w-full  h-[100%] flex justify-center items-center left-0 top-0 ${
            confirmAlert ? "block" : " hidden"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg z-50 w-[300px] py-5">
            <div className="text-xl font-bold">Are you Sure?</div>
            <p className="text-md md">You won't be able to revert this!</p>
            <button
              onClick={() => {
                setConfirmAlert2(!confirmAlert2);
              }}
              className="py-[6px] rounded-lg px-[10px] bg-[var(--light-red-color)] transition-all hover:bg-[var(--primary-color)] text-white"
            >
              Yes, delete it!
            </button>
            <button
              onClick={() => {
                setConfirmAlert(false);
              }}
              className="ml-2 w-[46px] h-[35px] mt-3 rounded-lg bg-[var(--light-red-color)] transition-all text-white hover:bg-[var(--primary-color)] text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
        <div
          className={`absolute w-full  h-[100%] flex justify-center items-center left-0 top-0 ${
            confirmAlert2 ? "block" : " hidden"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg z-50 w-[300px] py-5">
            <div className="text-xl font-bold">Deleted!</div>
            <p className="text-md md">Your file has been deleted</p>
            <button
              onClick={() => {
                handleConfirm();
              }}
              className="w-[46px] h-[35px] mt-3 rounded-lg hover:bg-[var(--light-red-color)] transition-all text-white bg-[var(--primary-color)] uppercase"
            >
              ok
            </button>
          </div>
        </div>

        <p className="text-md text-left mt-3">Confirm Button Color</p>
        <p className="text-md text-left">
          Use confirmButtonClass: {"btn btn-{colorName}"} option to change the
          color of the "Confirm" button.
        </p>
        <div className="mt-3 flex justify-start">
          <button
            onClick={() => {
              setConfirmAlert(!confirmAlert);
            }}
            className="px-3 py-[6px] text-sm text-[var(--primary-color)] border border-[var(--primary-color)] rounded-lg transition-all hover:bg-[var(--primary-color)] bg-transparent hover:text-white"
          >
            Confirm Button Color
          </button>
        </div>

        {/* alerts */}
        <div
          className={`absolute w-full  h-[100%] flex justify-center items-center left-0 top-0 ${
            confirmAlert ? "block" : " hidden"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg z-50 w-[300px] py-5">
            <div className="text-xl font-bold">Are you Sure?</div>
            <p className="text-md md">You won't be able to revert this!</p>
            <button
              onClick={() => {
                setConfirmAlert2(!confirmAlert2);
              }}
              className="py-[6px] rounded-lg px-[10px] bg-[var(--light-red-color)] transition-all hover:bg-[var(--primary-color)] text-white"
            >
              Yes, delete it!
            </button>
            <button
              onClick={() => {
                setConfirmAlert(false);
              }}
              className="ml-2 w-[46px] h-[35px] mt-3 rounded-lg bg-[var(--light-red-color)] transition-all text-white hover:bg-[var(--primary-color)] text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
        <div
          className={`absolute w-full  h-[100%] flex justify-center items-center left-0 top-0 ${
            confirmAlert2 ? "block" : " hidden"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg z-50 w-[300px] py-5">
            <div className="text-xl font-bold">Deleted!</div>
            <p className="text-md md">Your file has been deleted</p>
            <button
              onClick={() => {
                handleConfirm();
              }}
              className="w-[46px] h-[35px] mt-3 rounded-lg hover:bg-[var(--light-red-color)] transition-all text-white bg-[var(--primary-color)] uppercase"
            >
              ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
