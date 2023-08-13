import React from "react";
import { Left, Main, Right } from "./style";
import BuySell from "../BuySellTable";
import Button from "../Button";


const HomeEarrings = () => {
  return (
    <Main className="w-full">
      <Left className="w-600px overflow-x-scroll">
        <BuySell />
      </Left>
      <Right className="w-full">
        <div className="balance">
          <div>
            <p className="text-[14px] text-[#35446f]">BTC BALANCE</p>
            <h2 className="text-[24px] text-[#171717] font-bold">124.53 BTC</h2>
          </div>
          <div className="">
            <Button name="Send" />
            <Button name="Recive" bgcolor={"#fe3f51"} margin="10px 0 0 0 " />
          </div>
        </div>
        <div className="balance">
          <div>
            <p className="text-[14px] text-[#35446f]">BTC BALANCE</p>
            <h2 className="text-[24px] text-[#171717] font-bold">124.53 USD</h2>
          </div>
          <div className="">
            <Button name="Send" />
            <Button name="Recive" bgcolor={"#fe3f51"} margin="10px 0 0 0 " />
          </div>
        </div>

        <div className="balance">
          <div>
            <p className="text-[14px] text-[#35446f]">Users</p>
            <h2 className="text-[24px] text-[#171717] font-bold">2,843</h2>
            <p className="text-[14px] text-[#171717]">New Users</p>
          </div>

          <div>
            
          </div>
        </div>
      </Right>
    </Main>
  );
};

export default HomeEarrings;
