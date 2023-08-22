import React from "react";

export default ({ btnTitle, hoverTitle, width, top, left }) => {
  return (
    <div>
      <div className="tooltip">
        <button className=" py-[6px] px-3 rounded-lg bg-[var(--primary-color)] text-white transition-all hover:bg-[var(--light-red-color)] text-sm">
          {btnTitle}
        </button>
        <div
          className="tooltiptext"
          style={{ width: width, top: top, left: left }}
        >
          {hoverTitle}
        </div>
      </div>
    </div>
  );
};
