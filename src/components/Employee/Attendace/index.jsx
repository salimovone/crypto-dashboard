import { IoMdClose } from "react-icons/io";
import { BiCheck } from "react-icons/bi";
import React from "react";
import Navbar from "../../Navbar";
import second from "./data";

const Attendance = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="px-5">
          <div className="mt-5 transaction_card overflow-x-scroll">
            <div className="text-xl text-left font-bold text-[#35446f]">
              Attendance Sheet
            </div>
            <div className="flex gap-5 mt-5 justify-between items-end flex-col md:flex-row">
              <div className="w-full">
                <p className="text-sm text-left text-[#35446f] font-bold">
                  Employee Name
                </p>
                <input
                  className="border-2 border-white rounded-lg bg-transparent w-full h-[40px] px-3 py-2"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="w-full">
                <p className="text-sm text-left text-[var(--main-color)] font-bold">
                  Select month
                </p>
                <select
                  name=""
                  id=""
                  className="border-2 border-white rounded-lg bg-transparent w-full h-[40px] px-3 py-2"
                >
                  <option value="">-</option>
                  <option value="">Jan</option>
                  <option value="">Feb</option>
                  <option value="">Mar</option>
                  <option value="">Apr</option>
                  <option value="">May</option>
                  <option value="">Jun</option>
                  <option value="">Jul</option>
                  <option value="">Aug</option>
                  <option value="">Sep</option>
                  <option value="">Oct</option>
                  <option value="">Nov</option>
                  <option value="">Dec</option>
                </select>
              </div>
              <div className="w-full">
                <p className="text-sm text-left text-[#35446f] font-bold">
                  Select Year
                </p>
                <select
                  name=""
                  id=""
                  className="border-2 border-white rounded-lg bg-transparent w-full h-[40px] px-3 py-2"
                >
                  <option value="">-</option>
                  <option value="">2017</option>
                  <option value="">2016</option>
                  <option value="">2015</option>
                  <option value="">2014</option>
                  <option value="">2013</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="bg-[#234ce3] transition-all hover:bg-[#fe3f51] rounded-lg text-white uppercase w-[90px] h-[40px] text-sm text-whtie">
                  Search
                </button>
              </div>
            </div>
            <table className="w-[1200px] mt-5">
              <thead>
                <tr>
                  <th className="text-[var(--main-color)]">Employee</th>
                  {second.map((item, ind) => (
                    <th className="p-[3px] text-[var(--main-color)]">
                      {ind + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-left">Albina Simonis</td>
                  {second.map((item) => {
                    return (
                      <td className="p-[3px]">
                        {item.status ? (
                          <>
                            <BiCheck size={30} color="green" />
                          </>
                        ) : (
                          <>
                            <IoMdClose color="red" size={30} />
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="text-left">Cristina Groves</td>
                  {second.map((item) => {
                    return (
                      <td className="p-[3px]">
                        {item.status ? (
                          <>
                            <BiCheck size={30} color="green" />
                          </>
                        ) : (
                          <>
                            <IoMdClose size={30} color="red" />
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="text-left">Harlie Feniy</td>
                  {second.map((item) => {
                    return (
                      <td className="p-[3px]">
                        {item.status ? (
                          <>
                            <BiCheck size={30} color="green" />
                          </>
                        ) : (
                          <>
                            <IoMdClose size={30} color="red" />
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="text-left">Mary Mirecle</td>
                  {second.map((item) => {
                    return (
                      <td className="p-[3px]">
                        {item.status ? (
                          <>
                            <BiCheck size={30} color="green" />
                          </>
                        ) : (
                          <>
                            <IoMdClose size={30} color="red" />
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="text-left">Zoe Butler</td>
                  {second.map((item) => {
                    return (
                      <td className="p-[3px]">
                        {item.status ? (
                          <>
                            <BiCheck size={30} color="green" />
                          </>
                        ) : (
                          <>
                            <IoMdClose size={30} color="red" />
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="text-left">Marie Wells</td>
                  {second.map((item) => {
                    return (
                      <td className="p-[3px]">
                        {item.status ? (
                          <>
                            <BiCheck size={30} color="green" />
                          </>
                        ) : (
                          <>
                            <IoMdClose size={30} color="red" />
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="text-left">Henry Deniels</td>
                  {second.map((item) => {
                    return (
                      <td className="p-[3px]">
                        {item.status ? (
                          <>
                            <BiCheck size={30} color="green" />
                          </>
                        ) : (
                          <>
                            <IoMdClose size={30} color="red" />
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
