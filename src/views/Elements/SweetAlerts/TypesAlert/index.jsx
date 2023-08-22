import React, { useState } from "react";

export default () => {
  const [success, setSucces] = useState(false);
  const [info, setInfo] = useState(false);
  const [warning, setWarning] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div>
      <div className="transaction_card p-5 mt-5">
        <div className="text-left text-lg font-bold text-[var(--main-color)]">
          Types
        </div>
        <p className="mt-4 text-left">
          The type of the modal. SweetAlert comes with 4 built-in types which
          will show a corresponding icon animation: "warning", "error",
          "success" and "info". You can also set it as "input" to get a prompt
          modal. It can either be put in the object under the key "icon" or
          passed as the third parameter of the function.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              setSucces(!success);
            }}
            className="px-3 py-[6px] text-sm text-[var(--succes-color)] border border-[var(--succes-color)] rounded-lg transition-all hover:bg-[var(--succes-color)] bg-transparent hover:text-white"
          >
            Success
          </button>
          <button
            onClick={() => {
              setInfo(!info);
            }}
            className="px-3 py-[6px] text-sm text-[var(--info-color)] border border-[var(--info-color)] rounded-lg transition-all hover:bg-[var(--info-color)] bg-transparent hover:text-black"
          >
            Info
          </button>
          <button
            onClick={() => {
              setWarning(!warning);
            }}
            className="px-3 py-[6px] text-sm text-[var(--warning-color)] border border-[var(--warning-color)] rounded-lg transition-all hover:bg-[var(--warning-color)] bg-transparent hover:text-black"
          >
            Warning
          </button>
          <button
            onClick={() => {
              setError(!error);
            }}
            className="px-3 py-[6px] text-sm text-[var(--error-color)] border border-[var(--error-color)] rounded-lg transition-all hover:bg-[var(--error-color)] bg-transparent hover:text-white"
          >
            Error
          </button>
        </div>

        {/* alerts */}
        <div
          className={`absolute w-full  h-[100%] flex justify-center items-center left-0 top-0 ${
            success ? "block" : " hidden"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg z-50 w-[300px] py-5">
            <div className="text-xl font-bold">Good job!</div>
            <p className="text-md">You clicked the button!</p>
            <button
              onClick={() => {
                setSucces(!success);
              }}
              className="w-[46px] h-[35px] mt-3 rounded-lg bg-[var(--primary-color)] transition-all text-white hover:bg-[var(--light-red-color)] uppercase"
            >
              ok
            </button>
          </div>
        </div>
        <div
          className={`absolute w-full  h-[100%] flex justify-center items-center left-0 top-0 ${
            info ? "block" : " hidden"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg z-50 w-[300px] py-5">
            <div className="text-xl font-bold">Info!</div>
            <p className="text-md">You clicked the button!</p>
            <button
              onClick={() => {
                setInfo(!info);
              }}
              className="w-[46px] h-[35px] mt-3 rounded-lg bg-[var(--primary-color)] transition-all text-white hover:bg-[var(--light-red-color)] uppercase"
            >
              ok
            </button>
          </div>
        </div>
        <div
          className={`absolute w-full  h-[100%] flex justify-center items-center left-0 top-0 ${
            warning ? "block" : " hidden"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg z-50 w-[300px] py-5">
            <div className="text-xl font-bold">Warning!</div>
            <p className="text-md">You clicked the button!</p>
            <button
              onClick={() => {
                setWarning(!warning);
              }}
              className="w-[46px] h-[35px] mt-3 rounded-lg bg-[var(--primary-color)] transition-all text-white hover:bg-[var(--light-red-color)] uppercase"
            >
              ok
            </button>
          </div>
        </div>
        <div
          className={`absolute w-full  h-[100%] flex justify-center items-center left-0 top-0 ${
            error ? "block" : " hidden"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg z-50 w-[300px] py-5">
            <div className="text-xl font-bold">Error!</div>
            <p className="text-md">You clicked the button!</p>
            <button
              onClick={() => {
                setError(!error);
              }}
              className="w-[46px] h-[35px] mt-3 rounded-lg bg-[var(--primary-color)] transition-all text-white hover:bg-[var(--light-red-color)] uppercase"
            >
              ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
