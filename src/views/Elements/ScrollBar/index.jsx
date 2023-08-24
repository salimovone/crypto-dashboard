import React from "react";
import Navbar from "../../../components/Navbar";
import HorizontalScroll from "../../../components/ScrollBarComponents/HorizontalScroll";
import VerticalScroll from "../../../components/ScrollBarComponents/VerticalScroll";
import SmallSizeScroll from "../../../components/ScrollBarComponents/SmallSizeScroll";
import VisibleScroll from "../../../components/ScrollBarComponents/VisibleScroll";

const ScrollBar = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 px-5">
        <h1 className="font-bold text-left text-xl text-[var(--main-color)]">
          Scroll Bar
        </h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <HorizontalScroll />
          </div>
          <div>
            <VerticalScroll />
          </div>
          <div>
            <SmallSizeScroll />
          </div>
          <div>
            <VisibleScroll />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollBar;
