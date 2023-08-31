import React from "react";
import { Footer, Main } from "./style";
import img from "../../../assets/img/profile/avatar-01.jpg";
import img2 from "../../../assets/img/profile/avatar-03.jpg";
import svg1 from "../../../assets/img/icon/chat-icon-04.svg";
import svg2 from "../../../assets/img/icon/chat-icon-05.svg";
import svg3 from "../../../assets/img/icon/chat-icon-06.svg";
import svg4 from "../../../assets/img/icon/chat-icon-07.svg";
import svg5 from "../../../assets/img/icon/chat-icon-08.svg";
import svg6 from "../../../assets/img/icon/chat-foot-icon-04.svg";
import svg7 from "../../../assets/img/icon/chat-foot-icon-01.svg";
import svg8 from "../../../assets/img/icon/chat-foot-icon-02.svg";
import svg9 from "../../../assets/img/icon/chat-foot-icon-03.svg";

const Messages = () => {
  return (
    <Main className="mb-5">
      <div className="flex gap-2">
        <img src={img} className="w-[45px] h-[45px] rounded-full" />
        <div>
          <h1 className="text-[#35446f] text-[15px]">William Stephin</h1>
          <div className="msgR">
            <div>
              How likely are you to recommend our company to your friends and
              family ?
            </div>
            <p className="text-[#6586bf] text-[10px]">06:00 PM, 30 Sep 2022</p>
          </div>
        </div>
      </div>

      <div className="msgS">
        <div>
          How likely are you to recommend our company to your friends and family
          ?
        </div>
        <p className="text-[#6586bf] text-[10px]">06:00 PM, 30 Sep 2022</p>
      </div>

      <div className="flex gap-2">
        <img src={img2} className="w-[45px] h-[45px] rounded-full" />
        <div>
          <h1 className="text-[#35446f] text-[15px]">Galviz Lalema</h1>
          <div className="msgR">
            <div className="message">non tellus dignissim</div>
            <div className="media">
              <span className="flex gap-1">
                <img src={svg1} alt="" />
                Explainer Video.avi
              </span>
              <img src={svg4} alt="" />
            </div>
            <div className="media">
              <span className="flex gap-1">
                <img src={svg2} alt="" />
                Ayush Therapy.mp3
              </span>
              <img src={svg5} alt="" />
            </div>
            <div className="media">
              <span className="flex gap-1">
                <img src={svg3} alt="" />
                The liver.img
              </span>
            </div>
            <p className="text-[#6586bf] text-[10px]">06:32 PM Yesterday</p>
          </div>
        </div>
      </div>

      <div className="msgS">
        <div>Vivamus sed dictum dictum ligula, cursus blandit risus</div>
        <div>Vivamus sed dictum</div>
        <p className="text-[#6586bf] text-[10px]">06:50PM Today</p>
      </div>

      <div className="flex gap-2">
        <img src={img} className="w-[45px] h-[45px] rounded-full" />
        <div>
          <h1 className="text-[#35446f] text-[15px]">William Stephin</h1>
          <div className="msgR">
            <div>aliquam ut a ex</div>
            <p className="text-[#6586bf] text-[10px]">5min Ago</p>
          </div>
        </div>
      </div>
      <Footer>
        <div className="flex gap-1">
          <img src={svg6} alt="" />
          <input
            className="bg-transparent outline-none"
            type="text"
            placeholder="Type your Message Here..."
          />
        </div>
        <div className="flex gap-3">
          <img src={svg7} alt="" />
          <img src={svg8} alt="" />
          <div className="play">
            <img src={svg9} alt="" />
          </div>
        </div>
      </Footer>
    </Main>
  );
};

export default Messages;
