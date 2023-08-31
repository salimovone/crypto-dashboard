import { AiOutlinePlus } from "react-icons/ai";
import React from "react";
import { Avatar, InpBar, Sidebar, Users } from "./style";
import img from "../../../assets/img/profile/avatar-01.jpg";
import { BiDotsVerticalRounded } from "react-icons/bi";
import searchSVG from "../../../assets/img/icon/search-normal.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ChatSidebar = () => {
  const emailUserList = useSelector((state) => state.app.emailUserList);
  const navigate = useNavigate();
  return (
    <Sidebar>
      <Avatar>
        <div className="flex gap-2">
          <img src={img} alt="" />
          <div>
            <h1 className="text-[#35446f] text-[15px] font-bold">
              William Stephin
            </h1>
            <p className="text-[#6586bf] text-[12px]">10:22 AM</p>
          </div>
        </div>
        <button>
          <BiDotsVerticalRounded />
        </button>
      </Avatar>

      <InpBar>
        <div className="input">
          <img src={searchSVG} alt="" />
          <input type="text" placeholder="Search here" />
        </div>
        <button>
          <AiOutlinePlus />
        </button>
      </InpBar>

      <Users>
        {emailUserList.map((item) => (
          <li key={item.id}>
            <div className="flex gap-2">
              <img
                src={item.image}
                onClick={() => navigate("/profile", { state: item })}
              />
              <div>
                <h1 className="text-[#35446f] text-[15px] font-bold">
                  {item.name}
                </h1>
                <p className="text-[#6586bf] text-[12px]">
                  lorem ipsum dolor sit amet...
                </p>
              </div>
            </div>
            <div className="date">
              <p className="text-[#6586bf] text-[12px]">10:22 AM</p>
              <p className="text-white bg-[#0dbf0a] w-4 h-4 rounded-lg flex justify-center items-center text-sm ml-8 mt-1">8</p>
            </div>
          </li>
        ))}
      </Users>
    </Sidebar>
  );
};

export default ChatSidebar;
