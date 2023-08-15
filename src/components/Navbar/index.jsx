import { TbBrandCashapp } from "react-icons/tb";
import { CgMediaLive } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import Search from "../../assets/img/icon/search-icon.svg";
import Logo from "../../assets/img/logo-icon.png";
import Message from "./Message";
import Notification from "./Notification";
import Profile from "./Profile";
import MainNavbar from "./MainNavbar";

export default () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    if (open) {
      setOpen(!open);
    }
  };

  return (
    <div className="relative ">
      <div
        className={`Main_Navbar block lg:hidden  overflow-y-scroll top-0 left-0 bg-[#f0f5ff] w-[300px] fixed
        h-screen z-50 ${open ? "block" : "hidden"}`}
      >
        <MainNavbar func={handleClose} />
      </div>
      <div className="px-[30px] p-[10px] bg-[#f0f5ff] sticky top-0 z-40 ">
        <div className="flex justify-between items-center ">
          <div>
            <div className="hidden lg:block">
              <div>
                <div className="font-bold text-[20px]">Dashboard</div>
                <div className="font-medium text-[14px] text-[#818181]">
                  My Activity
                </div>
              </div>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={() => {
                  setOpen(!open);
                }}
                className="text-[30px] z-20"
              >
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
          <div className="flex gap-[10px] items-center">
            <div>
              <div className="lg:flex items-center gap-[10px] hidden ">
                <div className="flex items-center gap-[5px]">
                  Live <CgMediaLive className="text-[#fe3f51]" />
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="rounded-lg bg-transparent border-[2px] border-white py-[7px] px-[12px]"
                    name=""
                    id=""
                    placeholder="Search here"
                  />
                  <img src={Search} className="w-[13px] ml-[-25px]" alt="" />
                </div>
              </div>
              <div className="flex items-center lg:hidden gap-[20px]">
                <img src={Logo} className={`w-[40px] `} alt="" />
                <div
                  className={`uppercase text-[#161616] text-[24px] font-semibold `}
                >
                  Crypto
                </div>
              </div>
            </div>
            <div className="ml-[10px] hidden xl:flex gap-[10px] items-center ">
              <div>
                <button className="w-[170px] h-[38px] rounded-lg bg-[#00b2ff] px-[15px] py-[11px] text-[#fff] text-[14px] font-medium flex items-center justify-center gap-[5px]">
                  <TbBrandCashapp />
                  Currency Exchange
                </button>
              </div>
              <div>
                <select
                  name=""
                  id=""
                  className="text-[16px] w-[74px] bg-transparent  text-[#111] h-[38px] border border-[#fff] rounded-lg"
                >
                  <option value="">USD</option>
                  <option value="">USE</option>
                  <option value="">RU</option>
                </select>
              </div>
            </div>
            <div className="md:flex items-center gap-[10px] hidden ml-[10px]">
              <div>
                <Message />
              </div>
              <div>
                <Notification />
              </div>
            </div>
            <div className="ml-[20px]">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
