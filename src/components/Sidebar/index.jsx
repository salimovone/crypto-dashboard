import { AiOutlineRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import Logo from "../../assets/img/logo-icon.png";
import { NavLink } from "react-router-dom";
import Menus from "./data";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(-1);

  const handleClickButton = () => {
    setOpen(!open);
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
      className={`h-screen sidebar  p-6 pt-5 
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
      <ul className="pt-2 flex flex-col ">
        {Menus.map((menu, index) => {
          return (
            <>
              <NavLink
                onClick={() => {
                  handleOpen(index);
                }}
                to={menu.link}
                key={index}
                className={` text-sm flex items-center gap-[10px] p-2 hover:bg-gray-100 rounded-md  `}
              >
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
                    <AiOutlineRight className={`${!open && "hidden"}`} />
                  ) : (
                    ""
                  )}
                </span>
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
                          }`}
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
            </>
          );
        })}
      </ul>
    </div>
  );
};
export default SideBar;
