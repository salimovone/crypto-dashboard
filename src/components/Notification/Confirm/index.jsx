import React from "react";
import Button from "../Button";
import { useState } from "react";

export default () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="transaction_card p-5">
      <h1 className="text-left font-bold text-base">Confirm</h1>
      <div className="mt-3 flex justify-start">
        <Button
          onClick={() => {
            setModal(!modal);
          }}
          text={"Click me"}
          background="var(--primary-color)"
          color="white"
          backgroundHover="var(--light-red-color)"
        />
      </div>
      <div
        className={`absolute  w-full h-screen top-0 left-0 flex justify-center items-center ${
          modal ? "block" : "hidden"
        }`}
      >
        <div className="w-[300px] shadow-lg bg-white h-[150px] p-5">
          <h1 className="text-left">AlerttifyJs</h1>
          <p className="text-left py-[15px] mt-2 border-y">
            This is a confirm dialog.
          </p>
          <div className="flex justify-end gap-3">
            <button
              className="text-lg"
              onClick={() => {
                setModal(false);
              }}
            >
              Ok
            </button>
            <button
              className="text-lg"
              onClick={() => {
                setModal(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
