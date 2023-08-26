import React from "react";
import Button from "../Button";
import { useState } from "react";

export default () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="transaction_card p-5">
      <h1 className="text-left font-bold text-base">Promt</h1>
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
        <div className="w-[300px] shadow-lg bg-white h-[200px] p-5">
          <h1 className="text-left">AlerttifyJs</h1>
          <p className="text-left py-[15px] mt-2 ">This is a promt dialog.</p>
          <div className="mt-3">
            <input
              type="text"
              value="Default value"
              className="py-[6px] px-3 w-full border"
              name=""
              id=""
            />
          </div>
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
