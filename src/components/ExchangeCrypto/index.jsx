import { AiOutlineArrowRight } from "react-icons/ai";
import { HiArrowsRightLeft } from "react-icons/hi2";
import React, { useState } from "react";
import {
  BuyCrypto,
  CryptoBox,
  CustomPrice,
  Input,
  Li,
  Select,
  Transfer,
  WatchList,
} from "./style";
import Button from "../Button";
import { cardData } from "./data";

const ExchangeCrypto = () => {
  const [btnName, setBtnName] = useState("Buy");
  return (
    <div className="w-full mt-2 flex justify-between gap-5 flex-wrap">
      <Transfer className="md:max-w-[380px]">
        <p className="cardTitle">Exchange Cryptocurrency</p>
        <p className="cardSubtitle">
          Transfer from one wallet to another within seconds. It's that simple.
        </p>
        <div className="mt-5 flex flex-col gap-5">
          <Input value={"1.432"} />
          <Select>
            {[
              "BTC",
              "Etherium",
              "Ripple",
              "Bitcoin",
              "Cardano",
              "Litecoin",
            ].map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </Select>
        </div>

        <div className="w-full flex justify-center">
          <span className="w-8 h-8 rounded-full flex justify-center items-center bg-green-400 text-white text-xl font-bold my-5">
            <HiArrowsRightLeft />
          </span>
        </div>

        <div className="flex flex-col gap-5">
          <Input value={"1.432"} />
          <Select>
            {[
              "BTC",
              "Etherium",
              "Ripple",
              "Bitcoin",
              "Cardano",
              "Litecoin",
            ].map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </Select>
        </div>

        <Button name={"Exchange Now"} margin={"10px 0px 20px 0px"} />
      </Transfer>

      <WatchList className="md:max-w-[380px]">
        <div className="flex justify-between">
          <p className="cardTitle">Watch List</p>
          <a
            href="./"
            className="bg-white flex px-1 items-center gap-5 active:bg-blue-500 rounded"
          >
            View all <AiOutlineArrowRight />
          </a>
        </div>
        <div className="w-full">
          {cardData.map((item) => (
            <div className="w-full flex justify-between mt-4" key={item.name}>
              <div className="flex">
                <CryptoBox>
                  <img src={item.icon} alt="sdf" />
                </CryptoBox>
                <div className="flex flex-col justify-between">
                  <p>{item.name} / USDT</p>
                  <p className="text-green-500 text-sm">+45.56</p>
                </div>
              </div>
              <p className="text-[#35446f]">594,87,87987</p>
            </div>
          ))}
        </div>
      </WatchList>

      <BuyCrypto className="md:max-w-[380px]">
        <ul className="w-full bg-white p-[2px] rounded-lg">
          <Li
            color={btnName === "Buy" ? "white" : "black"}
            bgColor={btnName === "Buy" ? "#fe3f51" : "white"}
            onClick={() => setBtnName("Buy")}
            className={`rounded-lg text-[15px]`}
          >
            Buy Cryptocurrency
          </Li>
          <Li
            color={btnName === "Sell" ? "white" : "black"}
            bgColor={btnName === "Sell" ? "#fe3f51" : "white"}
            onClick={() => setBtnName("Sell")}
            className={`rounded-lg text-[15px]`}
          >
            Sell Cryptocurrency
          </Li>
        </ul>

        <div className="mt-5">
          <p className="text-[15px] text-[#171717]">Exchange</p>
          <CustomPrice>
            <select name="" id="">
              {[
                "BTC",
                "Etherium",
                "Ripple",
                "Bitcoin",
                "Cardano",
                "Litecoin",
              ].map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <input type="text" />
          </CustomPrice>

          <div className="w-full flex justify-center">
            <span className="w-8 h-8 rounded-full flex justify-center items-center bg-green-400 text-white text-xl font-bold my-5">
              <HiArrowsRightLeft />
            </span>
          </div>

          <CustomPrice>
            <select name="" id="">
              {[
                "Ripple",
                "BTC",
                "Etherium",
                "Bitcoin",
                "Cardano",
                "Litecoin",
              ].map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <input type="text" />
          </CustomPrice>
        </div>
        <p className="text-[15px] text-[#171717] mt-3 mb-1">Choose Payment Method</p>
        <Select>
            {[
              "BTC",
              "Etherium",
              "Ripple",
              "Bitcoin",
              "Cardano",
              "Litecoin",
            ].map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </Select>
          <Button name={btnName + ' Crypto'} margin='10px 0 0 0'  />
      </BuyCrypto>
    </div>
  );
};

export default ExchangeCrypto;
