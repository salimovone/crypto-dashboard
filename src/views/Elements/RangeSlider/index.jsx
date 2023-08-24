import React from "react";
import Navbar from "../../../components/Navbar";
import DefaultSlider from "../../../components/RangeSliderComponent/DefaultSlider";
import SliderSize from "../../../components/RangeSliderComponent/SliderSize";
import SliderColors from "../../../components/RangeSliderComponent/SliderColor";
import CustomSlider from "../../../components/RangeSliderComponent/CustomSlider";

const RangeSlider = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 px-5 ">
        <h1 className="text-left font-bold text-xl text-[var(--main-color)]">
          Range Slider
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <div>
            <DefaultSlider />
          </div>
          <div>
            <SliderSize />
          </div>
          <div>
            <SliderColors />
          </div>
          <div>
            <CustomSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
