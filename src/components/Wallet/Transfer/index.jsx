import React from "react";
import Switch from "../Switch";
import Img1 from "../../../assets/img/icon/security-icon-01.svg";
import Img2 from "../../../assets/img/icon/security-icon-02.svg";
import Img3 from "../../../assets/img/icon/security-icon-03.svg";

const Transfer = () => {
  return (
    <div className="px-[20px] mt-[20px] flex gap-[20px] w-full">
      <div className="transaction_card  w-[100%] md:w-[50%] xl:w-[70%] p-5">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="">
            <p className="text-xl font-bold text-[#35446f] text-left">
              Quick Transfer
            </p>
            <p className="text-sm text-[#818181] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex items-center">
            <select
              name=""
              id=""
              className="px-[10px] py-[8px] bg-transparent outline-none border-2 border-white rounded-lg"
            >
              <option value="">25,466654 BTC</option>
              <option value="">15,466654 BTC</option>
              <option value="">5,466654 BTC</option>
              <option value="">2,466654 BTC</option>
            </select>
          </div>
        </div>
        <div className="flex gap-5 flex-col xl:flex-row items-center">
          <div className="mt-5 p-1 flex justify-between rounded-lg  border-2 border-white bg-transparent">
            <select
              name=""
              id=""
              className="px-3 py-2 outline-none rounded-lg bg-white"
            >
              <option value="">BTC</option>
              <option value="">Ethereum</option>
              <option value="">Ripple</option>
              <option value="">Bitcoin</option>
              <option value="">Cardano</option>
              <option value="">Litecoin</option>
              <option value="">NEO</option>
              <option value="">Stellar</option>
            </select>
            <input
              type="text"
              className="bg-[#F6F9FF] focus:bg-white px-3 py-2 rounded-lg"
              name=""
              id=""
            />
          </div>
          <div className="w-full mt-5">
            <select
              name=""
              id=""
              className="px-[30px] w-full py-[8px] bg-transparent outline-none border-2 border-white rounded-lg"
            >
              <option value="">Aroon james</option>
              <option value="">William Stephin</option>
              <option value="">Bernardo James</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between items-center xl:flex-row flex-col mt-6">
          <div className=" text-md text-[#171717] text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br /> eiusmod tempor incididunt ut
          </div>
          <div>
            <button className="w-[219px] h-[46px] rounded-lg bg-[#234ce3] transition-all hover:bg-[#fe3f51] text-sm text-white font-semibold">
              Transfer Now
            </button>
          </div>
        </div>
      </div>
      <div className="transaction_card text-left flex flex-col gap-[15px]  w-[100%] md:w-[50%] xl:w-[30%]">
        <div className="text-md text-[#171717] text-center font-semibold">
          Account Security
        </div>
        <div className="flex justify-between items-center text-left">
          <div className="flex items-center gap-4">
            <div className="w-[40px] flex justify-center items-center h-[40px] rounded-full bg-[#ffe8ec]">
              <img src={Img1} alt="" />
            </div>
            <div>
              <p className="text-md font-semibold text-[#171717]">
                2FA Authentication
              </p>
              <p className="text-sm font-medium text-[#fe3f51]">Disabled</p>
            </div>
          </div>
          <div>
            <Switch />
          </div>
        </div>
        <div className="flex justify-between items-center text-left">
          <div className="flex items-center gap-4">
            <div className="w-[40px] flex justify-center items-center h-[40px] rounded-full bg-[#ecfbe6]">
              <img src={Img2} alt="" />
            </div>
            <div>
              <p className="text-md font-semibold text-[#171717]">
                Phone Verification
              </p>
              <p className="text-sm font-medium text-[#0dbf0a]">Active</p>
            </div>
          </div>
          <div>
            <Switch />
          </div>
        </div>
        <div className="flex justify-between items-center text-left">
          <div className="flex items-center gap-4">
            <div className="w-[40px] flex justify-center items-center h-[40px] rounded-full bg-[#fff6e8]">
              <img src={Img3} alt="" />
            </div>
            <div>
              <p className="text-md font-semibold text-[#171717]">
                Recovery Email
              </p>
              <p className="text-sm font-medium text-[#ffbc13]">Not comleted</p>
            </div>
          </div>
          <div>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
