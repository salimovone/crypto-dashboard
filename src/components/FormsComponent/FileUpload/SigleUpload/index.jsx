import React, { useState } from "react";

export default () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="transaction_card p-5 mt-5">
      <h1 className="text-left font-bold text-base">Single File Upload</h1>
      <div className="mt-3">
        <input type="file" onChange={handleChange} className="w-full" />
        <div className="mt-3 flex justify-center py-[15px]">
          <img src={file} className="w-[300px]" />
        </div>
      </div>
    </div>
  );
};
