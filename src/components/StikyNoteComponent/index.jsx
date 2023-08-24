import { IoIosClose } from "react-icons/io";
import React from "react";

export default ({ onClose, color }) => {
  return (
    <div
      style={{ background: color }}
      className="sticky-notes rounded-lg w-full p-4 flex flex-col"
    >
      <div className="flex justify-end">
        <button className="text-2xl mb-3" onClick={onClose}>
          <IoIosClose />
        </button>
      </div>
      <textarea
        className="w-full h-[100px] text-xl placeholder:text-2xl placeholder:text-[#7C7C7E]   bg-transparent p-4 "
        placeholder="Enter note title"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <textarea
        className="w-full h-[190px] text-base bg-transparent p-4 placeholder:text-base placeholder:text-[#7C7C7E]"
        placeholder="Enter note description here"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};
