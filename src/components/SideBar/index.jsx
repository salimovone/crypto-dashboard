import { BiChevronLeft } from "react-icons/bi";
import {
  BsChevronDown,
  BsFillImageFill,
  BsReverseLayoutTextSidebarReverse,
  BsPerson,
} from "react-icons/bs";
import { useState } from "react";
import {
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineLogout,
  AiOutlineMail,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import Logo from "../../assets/img/logo-icon.png";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const Menus = [
    { title: "Dashbord" },
    { title: "Pages", icon: <AiOutlineFileText /> },
    { title: "Media", icon: <BsFillImageFill /> },
    {
      title: "Projects",
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Analytics", icon: <AiOutlineBarChart /> },
    { title: "Inbox", icon: <AiOutlineMail /> },
    { title: "Profile", icon: <BsPerson /> },
    { title: "Setting", icon: <AiOutlineSetting /> },
    { title: "Logout", icon: <AiOutlineLogout /> },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-white h-screen p-6 pt-5 border border-teal-700 
            ${open ? "w-72" : "w-20"} duration-300 relative`}
      >
        <BiChevronLeft
          className={`bg-[#234ce3] text-[#fff] text-xl rounded-full absolute -right-3 top-9  cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex items-center gap-[20px]">
          <img src={Logo} className="w-[40px]" alt="" />
          <div
            className={`uppercase text-[#161616] text-[24px] font-semibold ${
              !open && "hidden"
            }`}
          >
            Crypto
          </div>
        </div>
        <ul className="pt-2 flex flex-col ">
          {Menus.map((menu, index) => (
            <>
              <NavLink
                key={index}
                className={` text-sm flex items-center gap-[10px] p-2 transition-all hover:text-[#234ce3] rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                } `}
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

                {menu.submenu && (
                  <BsChevronDown
                    className={`${submenuOpen && "rotate-180 "}`}
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  />
                )}
              </NavLink>
              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItems, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-400 rounded-md"
                    >
                      {submenuItems.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
