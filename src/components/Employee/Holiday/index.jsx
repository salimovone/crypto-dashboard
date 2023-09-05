import { BiDotsVerticalRounded, BiEdit, BiTrash } from "react-icons/bi";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import { deleteHoliday } from "../../../redux/holiday/holidayReducer";

export default () => {
  const navigate = useNavigate();
  const holiday = useSelector((state) => state.holidayList.holidays);
  const [action, setAction] = useState(0);
  const dispatch = useDispatch();
  const [deleteModal, setDeleteModal] = useState(false);
  const Delete = (id) => {
    setDeleteModal(id);
  };
  const handleDelete = () => {
    dispatch(deleteHoliday(deleteModal));
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
            <div className="text-xl font-bold text-[#35446f]">Holiday 2019</div>
            <button
              onClick={() => {
                navigate("/addHoliday");
              }}
              className="bg-[#234ce3] transition-all hover:bg-[#fe3f51] w-[132px] h-[35px] rounded-full text-sm flex justify-center items-center text-white"
            >
              <p className="text-2xl font-bold mt-[-5px]">+</p>
              <p>Add Holiday</p>
            </button>
          </div>
          <div className="mt-5 w-full overflow-x-scroll xl:overflow-x-hidden">
            <table className="holiday_table w-[1100px] xl:w-full ">
              <thead>
                <tr>
                  <th className="text-sm font-bold text-[#35446f] text-left">
                    Title
                  </th>
                  <th className="text-sm font-bold text-[#35446f] text-left">
                    Holiday Date
                  </th>
                  <th className="text-sm font-bold text-[#35446f]  text-left">
                    Day
                  </th>
                  <th className="text-sm font-bold text-[#35446f]text-end ">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="transaction_card p-4 mt-4">
                {holiday.map((item) => (
                  <tr key={item.id} className="text-left">
                    <td className="flex gap-2">
                      <p>{item.holiday}</p>
                    </td>
                    <td>{item.holidayDate}</td>
                    <td>{item.weekDay}</td>
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
                            navigate("/addHoliday", { state: item });
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
