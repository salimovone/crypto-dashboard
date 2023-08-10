import React, { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const message = [
  { id: 1, title: "John Doe added new task", time: "4 mins ago" },
  {
    id: 2,
    title: "Tarah Shropshire changed the task name ",
    time: "6 mins ago",
  },
  {
    id: 3,
    title: "Misty Tison added Claire Mapes to project  module",
    time: "8 mins ago",
  },
  {
    id: 4,
    title: "Rolland Webber completed task ",
    time: "12 mins ago",
  },
  {
    id: 5,
    title: "Bernardo Galaviz added new task Private chat module",
    time: "2 days ago",
  },
];

export default () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative">
        <div className="">
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className="border border-[#fff] flex justify-center items-center w-[40px] h-[40px] rounded-lg bg-transparent text-[20px]"
          >
            <AiOutlineBell />
          </button>
        </div>
        <div
          className={`absolute bg-white border right-0  w-[400px] ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="text-center py-[5px] border-b">Notifications</div>
          <div className="h-[290px] flex flex-col gap-[10px] overflow-y-scroll px-[15px]">
            {message.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  navigate("/activities");
                }}
                className=" flex gap-[10px] py-[10px] cursor-pointer"
              >
                <div className="w-[38px] h-[38px] rounded-full bg-[#aaa] flex justify-center items-center text-[16px] text-white">
                  {item.title[0]}
                </div>
                <div className="">
                  <div className="text-[14px] text-[#989c9e] font-semibold">
                    {item.title}
                  </div>
                  <div className="text-[12px] text-[#989c9e] font-medium">
                    {item.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              navigate("/activities");
            }}
            className="w-full h-[32px] border-t text-[12px] font-semibold"
          >
            View All Notifications
          </button>
        </div>
      </div>
    </div>
  );
};
