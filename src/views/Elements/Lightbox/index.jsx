import React from "react";
import Navbar from "../../../components/Navbar";
import SingleImage from "../../../components/LightboxComponent/SigleImage";
import ImageWithDescription from "../../../components/LightboxComponent/ImageWithDescription";

const Lightbox = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 px-5">
        <h1 className="text-left font-bold text-xl text-[var(--main-color)]">
          Lightbox
        </h1>
        <div>
          <SingleImage />
        </div>
        <div>
          <ImageWithDescription />
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
