import React from "react";

export default ({ previus, onclik }) => {
  return (
    <div className="mt-5">
      <div className="text-left">Enter Your Personal Adress</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <p className="text-left">Adress 1</p>
          <input
            type="text"
            className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent mt-2 "
          />
        </div>
        <div>
          <p className="text-left">Adress 2</p>
          <input
            type="text"
            className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent mt-2 "
          />
        </div>
        <div>
          <p className="text-left">Landmark</p>
          <input
            type="text"
            className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent mt-2 "
          />
        </div>
        <div>
          <p className="text-left">Town</p>
          <input
            type="text"
            className="w-full border-2 border-white py-[6px] px-3 rounded-lg bg-transparent mt-2 "
          />
        </div>
      </div>
      <div className="flex justify-between mt-3 ">
        <button
          onClick={previus}
          className="text-white rounded-lg text-sm py-2 px-4 bg-[var(--primary-color)] transition-all hover:bg-[var(--error-color)]"
        >
          Previous
        </button>
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
