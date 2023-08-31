import { AiFillSave } from "react-icons/ai";
import { BsFillGiftFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import React from "react";
import Navbar from "../../../components/Navbar";

const TimeLine = () => {
  return (
    <div>
      <Navbar />
      <div className="px-5 mt-5">
        <h1 className="text-left font-bold text-xl text-[var(--main-color)] ">
          Timeline
        </h1>
        <div className="container transaction_card mt-5  mx-auto w-full h-auto">
          <div className="relative wrap  p-10 pt-0 h-full">
            <div
              className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
              style={{ left: "50%" }}
            ></div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-[#00c292] shadow-xl w-[50px] h-[50px] rounded-full">
                <h1 className="mx-auto font-semibold text-2xl text-white">
                  <FaUserAlt />
                </h1>
              </div>
              <div className="order-1 text-left   w-5/12 px-6 py-4">
                <h3 className="mb-3  text-lg text-left font-medium">Title</h3>
                <p className="text-base text-left leading-snug tracking-wide  text-opacity-100">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero laboriosam dolor perspiciatis omnis exercitationem.
                  Beatae, officia pariatur? Est cum veniam excepturi. Maiores
                  praesentium, porro voluptas suscipit facere rem dicta, debitis
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-[#fec107] shadow-xl w-[50px] h-[50px] rounded-full">
                <h1 className="mx-auto text-white font-semibold text-2xl">
                  <FaUsers />
                </h1>
              </div>
              <div className="order-1  w-5/12 px-6 py-4">
                <h3 className="mb-3 font-medium text-left  text-lg">Title</h3>
                <p className="text-md text-left leading-snug tracking-wide  text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-[#e46a76] shadow-xl w-[50px] h-[50px] rounded-full">
                <h1 className="mx-auto font-semibold text-2xl text-white">
                  <BsFillGiftFill />
                </h1>
              </div>
              <div className="order-1  w-5/12 px-6 py-4">
                <h3 className="mb-3 font-medium text-left text-lg">
                  Lorem ipsum dolor
                </h3>
                <p className="text-base text-left leading-snug tracking-wide  text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-[#03a9f3] shadow-xl w-[50px] h-[50px] rounded-full">
                <h1 className="mx-auto text-white font-semibold text-2xl">
                  <AiFillSave />
                </h1>
              </div>
              <div className="order-1  w-5/12 px-6 py-4">
                <h3 className="mb-3 font-medium text-left text-lg">
                  Lorem Ipsum
                </h3>
                <p className="text-md text-left leading-snug tracking-wide text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeLine;
