import { BiDotsVerticalRounded, BiEdit, BiTrash } from "react-icons/bi";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteLeave } from "../../../redux/leaveList/leaveReducer";
import Navbar from "../../Navbar";

export default () => {
  const navigate = useNavigate();
  const leaves = useSelector((state) => state.leaveList.leaves);
  const [action, setAction] = useState(0);
  const dispatch = useDispatch();
  const [deleteModal, setDeleteModal] = useState(false);
  const Delete = (id) => {
    setDeleteModal(id);
  };
  const handleDelete = () => {
    dispatch(deleteLeave(deleteModal));
    setDeleteModal(false);
  };

  return (
    <div>
      <Navbar />
      <div
        className={`${
          deleteModal
            ? "top-0 left-0 h-[100%]  w-[100%]  absolute  z-50 flex justify-center items-center"
            : "hidden"
        }`}
      >
        <div className="w-[300px] h-[150px] bg-white rounded-lg shadow-lg text-center flex justify-center items-center">
          <div>
            <p className="-mt-2 text-[30px]">Are You Sure?</p>

            <div className="flex gap-5 mt-5 ml-5">
              <button
                onClick={() => {
                  handleDelete();
                }}
                className="text-white py-[8px] px-[30px] bg-[#234ce3] rounded-lg font-semibold text-2xl"
              >
                Ok
              </button>
              <button
                onClick={() => setDeleteModal(false)}
                className="text-[#234ce3] font-semibold text-2xl"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[20px]">
        <div className="transaction_card p-5 mt-5">
          <div className="flex items-center justify-between ">
            <div className="text-xl font-bold text-[#35446f]">
              Leave Request
            </div>
            <button
              onClick={() => {
                navigate("/addLeave");
              }}
              className="bg-[#234ce3] transition-all hover:bg-[#fe3f51] w-[132px] h-[35px] rounded-full text-sm flex justify-center items-center text-white"
            >
              <p className="text-2xl font-bold mt-[-5px]">+</p>
              <p>Add Leave</p>
            </button>
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
                Leave Type
              </p>
              <input
                className="border-2 border-white rounded-lg bg-transparent w-full h-[40px] px-3 py-2"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="w-full">
              <p className="text-sm text-left text-[#35446f] font-bold">
                Leave Status
              </p>
              <input
                className="border-2 border-white rounded-lg bg-transparent w-full h-[40px] px-3 py-2"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="w-full">
              <p className="text-sm text-left text-[#35446f] font-bold">From</p>
              <input
                className="border-2 border-white rounded-lg bg-transparent w-full h-[40px] px-3 py-2"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="w-full">
              <p className="text-sm text-left text-[#35446f] font-bold">To</p>
              <input
                className="border-2 border-white rounded-lg bg-transparent w-full h-[40px] px-3 py-2"
                type="text"
                name=""
                id=""
              />
            </div>

            <div className="flex items-end">
              <button className="bg-[#234ce3] transition-all hover:bg-[#fe3f51] rounded-lg text-white uppercase w-[90px] h-[40px] text-sm text-whtie">
                Search
              </button>
            </div>
          </div>
          <div className="mt-5 w-full overflow-x-scroll xl:overflow-x-hidden">
            <table className="leave_table w-[1100px] xl:w-full ">
              <thead>
                <tr>
                  <th className="text-sm font-bold text-[#35446f] text-left">
                    Employee
                  </th>
                  <th className="text-sm font-bold text-[#35446f]">
                    Leave Type
                  </th>
                  <th className="text-sm font-bold text-[#35446f] ">From</th>
                  <th className="text-sm font-bold text-[#35446f] ">To</th>
                  <th className="text-sm font-bold text-[#35446f]">
                    No of Days
                  </th>
                  <th className="text-sm font-bold text-[#35446f] ">Reason</th>
                  <th className="text-sm font-bold text-[#35446f]">Status</th>
                  <th className="text-sm font-bold text-[#35446f]">Action</th>
                </tr>
              </thead>
              <tbody className="transaction_card p-4 mt-4">
                {leaves.map((item) => (
                  <tr key={item.id} className="">
                    <td className="flex items-center gap-2 py-2 px-4">
                      <div className="w-[40px] h-[40px] flex justify-center items-center uppercase bg-[#aaaaaa] text-white text-md rounded-full">
                        {item.employe[0]}
                      </div>
                      <h2>{item.employe}</h2>
                    </td>
                    <td>{item.leaveType}</td>
                    <td>{item.from}</td>
                    <td>{item.to}</td>
                    <td>{item.days}</td>
                    <td>
                      <span>{item.reason}</span>
                    </td>
                    <td>
                      <span>{item.status}</span>
                    </td>
                    <td className="text-end relative">
                      <button
                        className="text-2xl"
                        onClick={() => {
                          setAction(action === item.id ? 0 : item.id);
                        }}
                      >
                        <BiDotsVerticalRounded />
                      </button>
                      <div
                        className={`absolute flex justify-start flex-col py-[10px] px-[15px] rounded-md top-8 right-5 ${
                          action === item.id ? "block" : "hidden"
                        } p-4 bg-white  border z-50`}
                      >
                        <button
                          onClick={() => {
                            navigate("/addLeave", { state: item });
                          }}
                          className="flex items-center"
                        >
                          <BiEdit className="text-md" /> Edit
                        </button>
                        <button
                          onClick={() => {
                            Delete(item.id);
                          }}
                          className="flex items-center"
                        >
                          <BiTrash className="text-md" /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
