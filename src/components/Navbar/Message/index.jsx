import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const message = [
  {
    id: 1,
    user: "Richard Miles",
    title: "Lorem ipsum dolor sit amet, conse...",
    time: "12:28 AM",
  },
  {
    id: 2,
    user: "John Doe",
    title: "Lorem ipsum dolor sit amet, conse...",
    time: "1 Aug",
  },
  {
    id: 3,
    user: "Tarah Shropshire",
    title: "Lorem ipsum dolor sit amet, conse...",
    time: "12:28 AM",
  },
  {
    id: 4,
    user: "Mike Litorus",
    title: "Lorem ipsum dolor sit amet, conse...",
    time: "12:28 AM",
  },
  {
    id: 5,
    user: "Catherine Manseau ",
    title: "Lorem ipsum dolor sit amet, conse...",
    time: "12:28 AM",
  },
  {
    id: 6,
    user: "Domenic Houston ",
    title: "Lorem ipsum dolor sit amet, conse...",
    time: "12:28 AM",
  },
  {
    id: 7,
    user: "Buster Wigton",
    title: "Lorem ipsum dolor sit amet, conse...",
    time: "12:28 AM",
  },
  {
    id: 8,
    user: " Rolland Webber ",
    title: "Lorem ipsum dolor sit amet, conse...",
    time: "12:28 AM",
  },
  {
    id: 9,
    user: "Claire Mapes  ",
    title: "Lorem ipsum dolor sit amet, conse...",
    time: "12:28 AM",
  },
  {
    id: 10,
    user: "Melita Faucher",
    title: "Lorem ipsum dolor sit amet, conse...",
    time: "12:28 AM",
  },
];

export default () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative">
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="border border-[#fff] flex justify-center items-center w-[40px] h-[40px] rounded-lg bg-transparent text-[20px]"
        >
          <AiOutlineMessage />
        </button>
        <div
          className={`absolute w-[350px] overflow-y-scroll h-[120vh] bg-[#fff] z-10 top-10 left-[-60px] border ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="text-center py-[5px] border-b bg-[#fff] sticky top-0">
            Messages
          </div>
          <div className="flex flex-col gap-[10px] px-[15px] ">
            {message.map((item) => (
              <div
                onClick={() => {
                  navigate("/chat");
                }}
                key={item.id}
                className="flex items-center gap-[10px] py-[10px] cursor-pointer"
              >
                <div className="w-[38px] h-[38px] rounded-full bg-[#aaa] flex justify-center items-center text-[16px] text-white">
                  {item.user[0]}
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-[16px] text-[#333] font-semibold">
                      {item.user}
                    </div>
                    <div className="text-[12px] text-[#888] font-semibold">
                      {item.time}
                    </div>
                  </div>
                  <div className="text-[14px] font-medium text-[#333]">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="sticky bottom-[0] bg-[#ffff]">
            <button className="bg-[#fff] text-[12px] font-semibold w-full h-[32px]">
              See All Messages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
