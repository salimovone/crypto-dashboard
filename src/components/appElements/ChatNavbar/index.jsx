import React from "react";
import { Main } from "./style";
import img from "../../../assets/img/profile/avatar-05.jpg";
import svg1 from "../../../assets/img/icon/chat-icon-01.svg";
import svg2 from "../../../assets/img/icon/chat-icon-02.svg";
import svg3 from "../../../assets/img/icon/chat-icon-03.svg";
import { useNavigate } from "react-router-dom";

const ChatNavbar = () => {
  const navigate = useNavigate()
  return (
    <Main>
      <div className="flex gap-2">
        <img src={img} alt="" className="w-[45px] h-[45px] rounded-full" />
        <div>
          <h1 className="text-[#35446f] text-[15px] font-bold">Forest Kroch</h1>
          <p className="text-[#6586bf] text-[12px]">
            Lorem ipsum dolor sit amet...
          </p>
        </div>
      </div>

      <div className="buttons">
        <button><img src={svg1} onClick={()=>navigate('/videoCall')} /></button>
        <button><img src={svg2} onClick={()=>navigate('/voiceCall')} /></button>
        <button><img src={svg3} /></button>
      </div>
    </Main>
  );
};

export default ChatNavbar;
