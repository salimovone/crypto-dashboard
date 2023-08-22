import React from "react";
import { useState } from "react";

export default () => {
  const [basicAlert, setBasicAlert] = useState(false);
  const [titleAlert, setTitleAlert] = useState(false);
  const [footerAlert, setFooterAlert] = useState(false);
  return (
    <div className="">
      <div className="w-full transaction_card p-5 ">
        <div className="text-lg font-bold text-left">Basic Examples</div>
        <div className="text-md text-left mt-3">
          SweetAlert automatically centers itself on the page and looks great no
          matter if you're using a desktop computer, mobile or tablet. It's even
          highly customizable, as you can see below!
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <button
            onClick={() => {
              setBasicAlert(!basicAlert);
            }}
            className="px-3 py-[6px] text-sm text-[var(--primary-color)] border border-[var(--primary-color)] rounded-lg transition-all hover:bg-[var(--primary-color)] bg-transparent hover:text-white"
          >
            Basic
          </button>
          <button
            onClick={() => {
              setTitleAlert(!titleAlert);
            }}
            className="px-3 py-[6px] text-sm text-[var(--primary-color)] border border-[var(--primary-color)] rounded-lg transition-all hover:bg-[var(--primary-color)] bg-transparent hover:text-white"
          >
            With Title
          </button>
          <button
            onClick={() => {
              setFooterAlert(!footerAlert);
            }}
            className="px-3 py-[6px] text-sm text-[var(--primary-color)] border border-[var(--primary-color)] rounded-lg transition-all hover:bg-[var(--primary-color)] bg-transparent hover:text-white"
          >
            With Footer
          </button>
        </div>

        {/* alerts */}
        <div
          className={`absolute w-full  h-[100%] flex justify-center items-center left-0 top-0 ${
            basicAlert ? "block" : " hidden"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg z-50 w-[300px] py-5">
            <div className="text-xl font-bold">Any fool can use a computer</div>
            <button
              onClick={() => {
                setBasicAlert(!basicAlert);
              }}
              className="w-[46px] h-[35px] mt-3 rounded-lg bg-[var(--primary-color)] transition-all text-white hover:bg-[var(--light-red-color)] uppercase"
            >
              ok
            </button>
          </div>
        </div>
        <div
          className={`absolute w-full  h-[100%] flex justify-center items-center left-0 top-0 ${
            titleAlert ? "block" : " hidden"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg z-50 w-[300px] py-5">
            <div className="text-xl font-bold">The Internet?,</div>
            <p className="text-md">That thing is still around?</p>
            <button
              onClick={() => {
                setTitleAlert(!titleAlert);
              }}
              className="w-[46px] h-[35px] mt-3 rounded-lg bg-[var(--primary-color)] transition-all text-white hover:bg-[var(--light-red-color)] uppercase"
            >
              ok
            </button>
          </div>
        </div>
        <div
          className={`absolute w-full  h-[100%] flex justify-center items-center left-0 top-0 ${
            footerAlert ? "block" : " hidden"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg z-50 w-[300px] py-5">
            <div className="text-xl font-bold">Oops...</div>
            <p className="text-md">Something went wrong!</p>
            <button
              onClick={() => {
                setFooterAlert(!footerAlert);
              }}
              className="w-[46px] h-[35px] mt-3 rounded-lg bg-[var(--primary-color)] transition-all text-white hover:bg-[var(--light-red-color)] uppercase"
            >
              ok
            </button>{" "}
            <br />
            <a
              href="#"
              className=" mt-4 text-md font-semibold text-[var(--primary-color)]"
            >
              Why do I have this issue?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
