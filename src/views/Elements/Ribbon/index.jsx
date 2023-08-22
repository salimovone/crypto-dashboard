import { AiFillGift } from "react-icons/ai";
import React from "react";
import Navbar from "../../../components/Navbar";
import RibbonCard from "./RibbonCard";

const Ribbon = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 px-5">
        <h1 className="text-left text-xl font-bold text-[var(--main-color)]">
          Ribbons
        </h1>
        <div className="w-full mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          <RibbonCard
            title={"Ribbon"}
            background={"#7366ff"}
            paddingTop={"50px"}
            top={"10px"}
            left={"0px"}
            RibPadding={"6px 20px 6px 20px"}
          />
          <RibbonCard
            title={"Ribbon"}
            background={"#f73164"}
            paddingTop={"50px"}
            top={"10px"}
            left={"0px"}
            RibPadding={"6px 20px 6px 20px"}
          />
          <RibbonCard
            title={"Ribbon"}
            background={"#51bb25"}
            paddingTop={"50px"}
            top={"10px"}
            left={"0px"}
            RibPadding={"6px 20px 6px 20px"}
          />
          <RibbonCard
            title={"Ribbon"}
            background={"#7366ff"}
            paddingTop={"50px"}
            top={"10px"}
            right={"0px"}
            RibPadding={"6px 20px 6px 20px"}
          />
          <RibbonCard
            title={"Ribbon"}
            background={"#f73164"}
            paddingTop={"50px"}
            top={"10px"}
            right={"0px"}
            RibPadding={"6px 20px 6px 20px"}
          />
          <RibbonCard
            title={"Ribbon"}
            background={"#51bb25"}
            paddingTop={"50px"}
            top={"10px"}
            right={"0px"}
            RibPadding={"6px 20px 6px 20px"}
          />
          <RibbonCard
            title={<AiFillGift />}
            background={"#7366ff"}
            paddingLeft={"50px"}
            top={"0px"}
            left={"10px"}
            RibPadding={"20px 6px 20px 6px"}
          />
          <RibbonCard
            title={<AiFillGift />}
            background={"#f73164"}
            paddingLeft={"50px"}
            top={"0px"}
            left={"10px"}
            RibPadding={"20px 6px 20px 6px"}
          />
          <RibbonCard
            title={<AiFillGift />}
            background={"#51bb25"}
            paddingLeft={"50px"}
            top={"0px"}
            left={"10px"}
            RibPadding={"20px 6px 20px 6px"}
          />
          <RibbonCard
            title={<AiFillGift />}
            background={"#7366ff"}
            paddingRight={"50px"}
            top={"0px"}
            right={"10px"}
            RibPadding={"20px 6px 20px 6px"}
          />
          <RibbonCard
            title={<AiFillGift />}
            background={"#f73164"}
            paddingRight={"50px"}
            top={"0px"}
            right={"10px"}
            RibPadding={"20px 6px 20px 6px"}
          />
          <RibbonCard
            title={<AiFillGift />}
            background={"#51bb25"}
            paddingRight={"50px"}
            top={"0px"}
            right={"10px"}
            RibPadding={"20px 6px 20px 6px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
