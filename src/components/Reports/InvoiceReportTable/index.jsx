import { BiDotsVerticalRounded, BiEdit, BiTrash } from "react-icons/bi";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteReport } from "../../../redux/invoiceReport/invoiceReducer";

export default () => {
    const [search, setSearch] = React.useState("");

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };
    const navigate = useNavigate();
    const report = useSelector((state) => state.report.reports);

    console.log(report);

    const [action, setAction] = useState(0);
    const dispatch = useDispatch();

    const [deleteModal, setDeleteModal] = useState(false);
    const Delete = (id) => {
        setDeleteModal(id);
    };

    const handleDelete = () => {
        dispatch(deleteReport(deleteModal));
        setDeleteModal(false);
    };

    return (
        <div>
            <div
                className={`${deleteModal
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

            <div className="transaction_card p-5 m-5 mt-10">
                <div className="flex items-center justify-between ">
                    <div className="text-xl font-bold text-[#35446f]">Invoices</div>
                    <button
                        onClick={() => {
                            navigate("/TaxesAddUsers");
                        }}
                        className="bg-[#234ce3] transition-all hover:bg-[#fe3f51] w-[132px] h-[35px] rounded-full text-sm flex justify-center items-center text-white"
                    >
                        <p className="text-2xl font-bold mt-[-5px]">+</p>
                        <p>Create Invoice</p>
                    </button>
                </div>
                <div className="flex gap-5 mt-5 justify-between items-end flex-col md:flex-row">
                <div className="w-full">
                    <p className="text-sm text-center text-[#35446f] font-bold">
                        Status
                    </p>
                    <select
                        className="border-2 border-white rounded-lg bg-transparent w-full lg:w-[80%] h-[40px] px-3 py-2"
                        type="text"
                        name=""
                        id=""
                    >
                        <option value="">Select Cliend</option>
                        <option value="">Jenifier Robinson</option>
                        <option value="">Terry Baker</option>
                    </select>
                </div>
                    <div className="w-full">
                        <p className="text-sm text-center text-[#35446f] font-bold">
                            From
                        </p>
                        <input
                            className="border-2 border-white rounded-lg bg-transparent w-full lg:w-[80%] h-[40px] px-3 py-2"
                            type="text"
                            name=""
                            id=""
                        />
                    </div>
                    <div className="w-full">
                        <p className="text-sm text-center text-[var(--main-color)] font-bold">
                            To
                        </p>
                        <input
                            onChange={handleSearch}
                            className="border-2 border-white rounded-lg bg-transparent w-full lg:w-[80%] h-[40px] px-3 py-2"
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
                <div className="mt-10 w-full overflow-x-scroll xl:overflow-x-hidden">
                    <table className="employee_table w-[1100px] xl:w-full ">
                        <thead>
                            <tr>
                                <th className="text-sm font-bold text-[#35446f]">#</th>
                                <th className="text-sm font-bold text-[#35446f]">Invoice Number</th>
                                <th className="text-sm font-bold text-[#35446f] ">Client</th>
                                <th className="text-sm font-bold text-[#35446f] ">Created Date</th>
                                <th className="text-sm font-bold text-[#35446f]">Due Date</th>
                                <th className="text-sm font-bold text-[#35446f] ">Amout</th>
                                <th className="text-sm font-bold text-[#35446f]">Status</th>
                                <th className="text-sm font-bold text-[#35446f]">Action</th>
                            </tr>
                        </thead>
                        <tbody className="transaction_card p-4 mt-4">
                            {report.map((item, ind) => (
                                <tr key={item.id}>
                                    <td>{ind + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.client}</td>
                                    <td>{item.date}</td>
                                    <td>{item.dueDate}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.status}</td>
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
                                            className={`absolute flex justify-start flex-col w-[160px] h-[70px] top-8 right-5 ${action === item.id ? "block" : "hidden"
                                                } p-4 bg-white rounded-sm border z-50`}
                                        >
                                            <button
                                                onClick={() => {
                                                    navigate("/addEmployee", { state: item });
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
    );
};
