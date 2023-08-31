import { BiCut } from "react-icons/bi";
import { FaRegCopy } from "react-icons/fa";
import React from "react";
import { useState } from "react";
import copy from "copy-to-clipboard";

export default () => {
  const [copyText, setCopyText] = useState("http://www.example.com/example");

  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  };

  function copyToClipboard() {
    copy(copyText);
  }

  return (
    <div>
      <div className="transaction_card mt-5 p-5">
        <h1 className="font-bold text-left text-base">
          Copy Text From Paragraph
        </h1>
        <div className="mt-3">
          <div className="text-left flex gap-1 justify-start">
            Link {"->"}
            <input
              className="bg-transparent"
              onChange={handleCopyText}
              value={copyText}
            />
          </div>
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
        </div>
      </div>
    </div>
  );
};
