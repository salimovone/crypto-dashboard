import React from "react";
import { Main } from "./style";

const HeadCard = ({ name, icon, price, chart, color }) => {
  return (
    <Main color={color}>
      <div className="headIconBox">
        <img src={icon} alt={name+ ' icon'} />
      </div>
      <h4 className="text-[#171717] text-[16px] font-semibold text-center my-4">{name}</h4>
      <h3 align='center' className={`headColorText font-bold text-[18px]`}>$ {price}</h3>
      <img src={chart} className="mt-5 w-[95px]" alt="" />
    </Main>
  );
};

export default HeadCard;
