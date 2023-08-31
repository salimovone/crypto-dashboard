import React from "react";
import Navbar from "../../components/Navbar";
import HorizontalTimeline from "../../components/HorizontalTimeline";

export default () => {
  return (
    <div>
      <Navbar />
      <div className="px-5 mt-5">
        <h1 className="text-xl font-bold text-[var(--main-color)] text-left">
          Horizontal Timeline
        </h1>
        <div>
          <HorizontalTimeline />
        </div>
      </div>
    </div>
  );
};
