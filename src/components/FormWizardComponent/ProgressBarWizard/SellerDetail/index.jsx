import React from "react";

export default ({ onclik }) => {
  return (
    <div className="mt-5">
      <div className="text-left">Enter Your Personal Detail</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <p className="text-left">First Name</p>
          <input
            type="text"
            className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent mt-2 "
          />
        </div>
        <div>
          <p className="text-left">Last Name</p>
          <input
            type="text"
            className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent mt-2 "
          />
        </div>
        <div>
          <p className="text-left">Phone</p>
          <input
            type="number"
            className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent mt-2 "
          />
        </div>
        <div>
          <p className="text-left">Email</p>
          <input
            type="email"
            className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent mt-2 "
          />
        </div>
      </div>
      <div className="flex justify-end mt-3 ">
        <button
          onClick={onclik}
          className="text-white rounded-lg text-sm py-2 px-4 bg-[var(--primary-color)] transition-all hover:bg-[var(--error-color)]"
        >
          Next
        </button>
      </div>
    </div>
  );
};
