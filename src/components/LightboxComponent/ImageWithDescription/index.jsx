import React from "react";
import Img from "../../../assets/img/img-03.jpg";
import Img1 from "../../../assets/img/img-04.jpg";
import Img2 from "../../../assets/img/img-05.jpg";

import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
export default () => {
  return (
    <div className="transaction_card p-5 mt-5">
      <h1 className="text-left font-bold text-base">Image With Description</h1>
      <div className="mt-3">
        <SlideshowLightbox className="container grid grid-cols-3 gap-5 mx-auto">
          <img src={Img} className="w-full" alt="" />
          <img src={Img1} className="w-full" alt="" />
          <img src={Img2} className="w-full" alt="" />
        </SlideshowLightbox>
      </div>
    </div>
  );
};
