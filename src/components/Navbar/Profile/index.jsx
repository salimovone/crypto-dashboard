import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import React, { useState } from "react";
import User from "../../../assets/img/profile/user-03.jpg";
import { NavLink } from "react-router-dom";

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className="hidden md:flex items-center gap-[10px] cursor-pointer"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="relative">
          <img src={User} className="w-[33px] rounded-full " alt="" />
          <div className="w-[10px] h-[10px] border-[2px] bg-green-400 top-[22px] left-[22px] border-white rounded-full absolute"></div>
        </div>
        <div className="flex items-center gap-[5px]">
          <div>
            <div className="text-[14px] font-semibold">Soeng Suoy</div>
            <div className="text-[12px] text-[#ff808c]">Administration</div>
          </div>
          <div>
            <AiOutlineDown className="text-[14px]" />
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <button
          className="text-[30px]"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <BiDotsVerticalRounded />
        </button>
      </div>
      <div
        className={`absolute px-[15px] py-[10] right-[15px] w-[134px] flex flex-col bg-white border text-[14px] gap-[10px] ${
          open ? "block" : "hidden"
        }`}
      >
        <NavLink to={"/"}>Profile</NavLink>
        <NavLink to={"/editProfile"}>Edit Profile</NavLink>
        <NavLink to={"/settings"}>Setting</NavLink>
        <NavLink to={"/login"}>Log out</NavLink>
      </div>
    </div>
  );
};
