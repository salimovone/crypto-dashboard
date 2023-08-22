import { AiOutlinePlus } from "react-icons/ai";
import React from "react";
import { Avatar, Link, Sidebar, Title, Windows } from "./style";
import img from "../../../assets/img/profile/avatar-01.jpg";
import { CgPen } from "react-icons/cg";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Button from "../../Button";
import { folderData, labelData, windowData } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from "../../../redux/app/appSlice";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const pageName = useSelector((state) => state.app.pageName);
  const trashList = useSelector((state) => state.app.trashList);
  const emailUserList = useSelector((state) => state.app.emailUserList);
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
      <Button
        name="Compose Mail"
        icon={<CgPen />}
        className={"flex justify-center items-center gap-2 mt-5"}
        onClick={() => dispatch(setPageName("mail"))}
      />
      <Windows>
        {windowData.map((item) => (
          <Link
            key={item.count}
            active={pageName === item.pageName}
            onClick={() =>
              dispatch(
                setPageName(
                  item.pageName !== undefined ? item.pageName : pageName
                )
              )
            }
          >
            <div className="flex gap-2">
              <img src={item.icon} alt="" />
              {item.name}
            </div>
            <span>
              {item.count === "inb" ? emailUserList.length : item.count==='trash'?trashList.length:item.count}
            </span>
          </Link>
        ))}
      </Windows>

      <Title>
        <span>Labels</span>
        <div className="flex gap-2">
          <button>
            <AiOutlinePlus />
          </button>
          <button>
            <BiDotsVerticalRounded />
          </button>
        </div>
      </Title>

      <div>
        {labelData.map((item) => (
          <Link key={item.count}>
            <div className="flex gap-2">
              <img src={item.icon} alt="" />
              {item.name}
            </div>
            <span>{item.count}</span>
          </Link>
        ))}
      </div>

      <Title>
        <span>Folders</span>
        <div className="flex gap-2">
          <button>
            <AiOutlinePlus />
          </button>
          <button>
            <BiDotsVerticalRounded />
          </button>
        </div>
      </Title>

      <div>
        {folderData.map((item) => (
          <Link key={item.count}>
            <div className="flex gap-2">
              <img src={item.icon} alt="" />
              {item.name}
            </div>
            <span>{item.count}</span>
          </Link>
        ))}
      </div>
    </Sidebar>
  );
};

export default AppSidebar;
