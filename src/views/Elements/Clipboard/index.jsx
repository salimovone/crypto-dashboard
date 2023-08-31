import React from "react";
import Navbar from "../../../components/Navbar";
import CopyTextarea from "../../../components/ClipboardComponent/CopyTextarea";
import CopyInput from "../../../components/ClipboardComponent/CopyInput";
import CopyText from "../../../components/ClipboardComponent/CopyText";
import CopyLink from "../../../components/ClipboardComponent/CopyLink";

const Clipboard = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 px-5">
        <h1 className="text-left font-bold text-[var(--main-color)] text-xl">
          Clipboard
        </h1>
        <div className="">
          <CopyInput />
        </div>
        <div>
          <CopyTextarea />
        </div>
        <div>
          <CopyText />
        </div>
        <div>
          <CopyLink />
        </div>
      </div>
    </div>
  );
};

export default Clipboard;
