import { BiCut } from "react-icons/bi";
import { FaRegCopy } from "react-icons/fa";
import React from "react";
import { useState } from "react";
import copy from "copy-to-clipboard";

export default () => {
  const [copyText, setCopyText] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  );

  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  };

  function copyToClipboard() {
    copy(copyText);
  }
  const removeText = () => {
    setCopyText("");
  };

  return (
    <div>
      <div className="transaction_card mt-5 p-5">
        <h1 className="font-bold text-left text-base">Copy From Text Area</h1>
        <div className="mt-3">
          <textarea
            value={copyText}
            onChange={handleCopyText}
            className="w-full border-2 bg-transparent h-[100px] border-white py-[6px] px-3 rounded-lg"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => {
              copyToClipboard();
            }}
            className="py-[6px] flex gap-1 px-4 rounded-lg bg-[var(--primary-color)] transition-all hover:bg-[var(--light-red-color)] text-white text-sm font-medium"
          >
            <FaRegCopy className="text-lg" /> Copy from input
          </button>
          <button
            onClick={() => {
              removeText();
            }}
            className="py-[6px] flex gap-1 px-4 rounded-lg bg-[#171717] transition-all hover:opacity-80 text-white text-sm font-medium"
          >
            <BiCut className="text-lg" /> Cut from input
          </button>
        </div>
      </div>
    </div>
  );
};
