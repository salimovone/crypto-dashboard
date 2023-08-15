import { IoIosClose } from "react-icons/io";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Menus from "./data";

const MainNavbar = ({ func }) => {
  const [actived, setActived] = useState(1);
  const [submenuOpen, setSubmenuOpen] = useState(-1);
  const handleClick = (id) => {
    handleOpen(id);
    setActived(id + 1);
  };
  const handleOpen = (id) => {
    if (submenuOpen === id) {
      setSubmenuOpen(-1);
    } else {
      setSubmenuOpen(id);
    }
  };
  return (
    <div className="px-[20px]">
      <div className="flex justify-end items-center mt-[30px]">
        <button className="text-[25px]" onClick={func}>
          <IoIosClose />
        </button>
      </div>
      <ul className="pt-2 flex flex-col mt-[20px] gap-[10px] ">
        {Menus.map((menu, index) => {
          return (
            <>
              <NavLink
                className={`${
                  actived === index + 1
                    ? "text-[#234ce3] bg-[#ffffff1a] Shadow px-[15px] rounded-lg py-[10px]"
                    : "text-[#161616] px-[15px] py-[10px]"
                }`}
                onClick={() => {
                  handleClick(index);
                }}
                to={menu.link}
                key={index}
              >
                <div className="flex items-center gap-[10px]">
                  <span className="block float-left text-lg text-grey-40">
                    {menu.icon ? menu.icon : <MdOutlineDashboard />}
                  </span>
                  <span className={`text-base font-medium text-left flex-1 `}>
                    {menu.title}
                  </span>
                  <span>
                    {menu.items ? <AiOutlineRight className={` `} /> : ""}
                  </span>
                </div>
              </NavLink>
              {submenuOpen === index ? (
                <>
                  {menu.items?.map((item, index) => {
                    return (
                      <>
                        <NavLink
                          key={index}
                          to={item.link}
                          className={` ml-[30px] text-md font-medium  `}
                        >
                          {item.title}
                        </NavLink>
                        {item.items?.map((item, index) => {
                          return (
                            <NavLink
                              to={item.link}
                              key={index}
                              className={` ml-[50px] text-md font-medium  `}
                            >
                              {item.title}
                            </NavLink>
                          );
                        })}
                      </>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default MainNavbar;
