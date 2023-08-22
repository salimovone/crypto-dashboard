import { CiMenuKebab } from "react-icons/ci";
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillDelete } from "react-icons/ai";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { deleteTaxes } from "../../../redux/taxesList/taxesReducers";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function ProvidentTable() {

    const taxes = useSelector((state) => state.taxe.taxes)
    const dispatch = useDispatch
    const [open, setOpen] = useState(false);
    const [openId, setOpenId] = useState(null);
    const navigate = useNavigate();

    const handleOpenModal = (id) => {
        setOpen(true)   
        setOpenId(id)
    }

    const handleDelete = () => {
        dispatch(deleteTaxes(openId))
        setOpen(false)
    }

    return (
        <div>
            <div
                className={`${open
                    ? "top-0 left-0 h-[100%]  w-[100%]  absolute  z-50 flex justify-center items-center"
                    : "hidden"
                    }`}
            >
                <div className="w-[300px] h-[150px] bg-white rounded-lg shadow-lg text-center flex justify-center items-center">
                    <div>
                        <p className="-mt-2 text-[30px]">Are You Sure?</p>

                        <div className="flex gap-5 mt-5 ml-5">
                            <button onClick={() => handleDelete()} className="text-white py-[8px] px-[30px] bg-[#234ce3] rounded-lg font-semibold text-2xl">
                                Ok
                            </button>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-[#234ce3] font-semibold text-2xl"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <table className="w-full">
                    <thead className="w-full">
                        <tr>
                            <th className="py-3 px-5 text-left">Employee Name</th>
                            <th className="py-3 px-5 text-left">Provident type</th>
                            <th className="py-3 px-5 text-left">Tax Percentage (%)</th>
                            <th className="py-3 px-5 text-left">Status</th>
                            <th className="py-3 px-5 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            taxes.map((item, ind) => (
                                <tr key={ind + 1} className="border-t-2" style={{ background: item.bg, boxShadow: item.shadow, border: item.border }}>
                                    <td className="py-3 px-5 flex gap-1">
                                        <div className="w-[40px] h-[40px] rounded-full bg-[#aaa] flex justify-center items-center text-white">A</div>
                                        <p>Albina Simons<p className="text-[12px]">nurse</p></p>
                                    </td>
                                    <td className="py-3 px-5">Percentage of Basic Salary</td>
                                    <td className="py-3 px-5">{item.percentage}</td>
                                    <td className="py-3 px-5">{item.status}</td>
                                    <td className="py-3 px-5 flex justify-end">
                                        <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <Menu.Button className="inline-flex w-full justify-center px-3 py-2 font-semibold text-gray-900">
                                                    <CiMenuKebab />
                                                </Menu.Button>
                                            </div>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95">
                                                    
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <div
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'flex px-4 py-2 text-sm gap-1'
                                                                    )}

                                                                    onClick={() => {
                                                                        navigate("/TaxesAddUsers", { state: item });
                                                                    }}
                                                                >
                                                                    <BiEditAlt className="mt-1" />Edit

                                                                </div>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <div
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'flex gap-1 px-4 py-2 text-sm'
                                                                    )}

                                                                    onClick={() => handleOpenModal(item.id)}
                                                                >
                                                                    <AiFillDelete className="mt-1" />Delete
                                                                </div>
                                                            )}
                                                        </Menu.Item>
                                                        <form method="POST" action="#">
                                                        </form>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProvidentTable
