import React from "react";
import Navbar from "../../../components/Navbar";
import SingleUplouad from "../../../components/FormsComponent/FileUpload/SigleUpload";
import MultipleUpload from "../../../components/FormsComponent/FileUpload/MultipleUpload";

const FileUpload = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 px-5">
        <h1 className="text-xl text-left font-bold text-[var(--main-color)]">
          File Upload
        </h1>
        <div>
          <SingleUplouad />
        </div>
        <div>
          <MultipleUpload />
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
