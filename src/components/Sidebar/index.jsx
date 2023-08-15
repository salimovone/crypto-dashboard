import { BiLogOut } from "react-icons/bi";
import { AiOutlineRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import React, { useState, Fragment } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import Logo from "../../assets/img/logo-icon.png";
import { NavLink, useNavigate } from "react-router-dom";
import Menus from "./data";
import TrackIcon from "../../assets/img/icon/track-icon.png";

const SideBar = () => {
  const [actived, setActived] = useState(1);
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(-1);
  const navigate = useNavigate();
  const handleClickButton = () => {
    setOpen(!open);
  };
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
    <div
      className={`bg-[#f0f5ff]  h-screen sidebar  p-4 pt-5 
             ${open ? "w-[250px]" : "w-[80px]"}  duration-300 relative`}
    >
      <BiChevronLeft
        className={`bg-[#234ce3]  text-[#fff] text-xl rounded-full absolute right-[2px] top-9  cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => handleClickButton()}
      />

      <div className="flex items-center gap-[20px]">
        <img src={Logo} className={`w-[40px] ${!open && ""}`} alt="" />
        <div
          className={`uppercase text-[#161616] text-[24px] font-semibold ${
            !open && "hidden"
          }`}
        >
          Crypto
        </div>
      </div>
      <ul className="pt-2 flex flex-col mt-[30px] gap-[10px]">
        {Menus.map((menu, index) => {
          return (
            <Fragment key={index}>
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
                  <span
                    className={`text-base font-medium text-left flex-1 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  <span>
                    {menu.items ? (
                      <AiOutlineRight className={`${!open && "hidden"} `} />
                    ) : (
                      ""
                    )}
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
                          className={` ml-[30px] text-md font-medium  ${
                            !open && "hidden"
                          } `}
                        >
                          {item.title}
                        </NavLink>
                        {item.items?.map((item, index) => {
                          return (
                            <NavLink
                              to={item.link}
                              key={index}
                              className={` ml-[50px] text-md font-medium  ${
                                !open && "hidden"
                              }`}
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
            </Fragment>
          );
        })}
      </ul>
      <div
        className={`w-full p-[10px] rounded-[5px] mt-[50px] ${
          !open && "hidden"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(321.86deg,#FE3F51 4.09%,#234CE3 81.26%)",
        }}
      >
        <div className="flex justify-center">
          <img src={TrackIcon} className="w-[62px]" alt="" />
        </div>
        <div className="text-[16px] font-semibold text-white text-center">
          Track your Portfolio in Real-time
        </div>
        <div className="text-[12px] text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="mt-[15px] flex justify-center">
          <button className="w-[110px] h-[24px] bg-[rgba(23,23,23,.1)] hover:bg-[#234ce3] transition-all rounded-full text-[12px] text-white font-semibold">
            Know More
          </button>
        </div>
      </div>
      <button
        className={`mt-[30px] w-full h-[45px] rounded-lg bg-[#234ce3] transition-all hover:bg-[#fe3f51] text-[14px] text-white font-medium ${
          !open && "hidden"
        }`}
      >
        Need help?
      </button>
      <button
        onClick={() => {
          navigate("/login");
        }}
        className={`mt-[30px] w-full h-[45px] rounded-lg bg-[#171717] transition-all hover:bg-[#434242] text-[14px] text-white font-medium flex items-center justify-center gap-[8px] ${
          !open && "hidden"
        }`}
      >
        <BiLogOut className="text-[20px]" /> Log out
      </button>
    </div>
  );
};
export default SideBar;
