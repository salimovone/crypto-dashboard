import { IoMdArrowDropdown } from "react-icons/io";
import { BiDownArrowAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAlert } from "../../../redux/alerts/alertReducer";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default () => {

    const alert = useSelector((state) => state.alerts.alerts)
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)

    const handleDelete = () => {
        dispatch(deleteAlert(open))
        setOpen(false)
    }

    const data = [
        {
            id: 1,
            title: "Primary",
            style: "button_components_primary",
            dropDown: "Action"
        },
        {
            id: 2,
            title: "Secondary",
            style: "button_components_secondary",
            dropDown: "Action"
        },
        {
            id: 3,
            title: "Success",
            style: "button_components_primary",
            dropDown: "Action"
        },
        {
            id: 4,
            title: "Danger",
            style: "button_components_danger",
            dropDown: "Action"
        },
        {
            id: 5,
            title: "Warning",
            style: "button_components_warning",
            dropDown: "Action"
        },
        {
            id: 6,
            title: "Info",
            style: "button_components_primary",
            dropDown: "Action"
        },
        {
            id: 7,
            title: "Light",
            style: "button_components_light",
        },
        {
            id: 8,
            title: "Dark",
            style: "button_components_dark",
        },
    ]

    const dataDropDown = [
        {
            id: 1,
            title: "Primary",
            style: "button_components_primary",
            dropDown: "Action"
        },
        {
            id: 2,
            title: "Secondary",
            style: "button_components_secondary",
            dropDown: "Action"
        },
        {
            id: 3,
            title: "Success",
            style: "button_components_primary",
            dropDown: "Action"
        },
        {
            id: 4,
            title: "Danger",
            style: "button_components_danger",
            dropDown: "Action"
        },
        {
            id: 5,
            title: "Warning",
            style: "button_components_warning",
            dropDown: "Action"
        },
        {
            id: 6,
            title: "Info",
            style: "button_components_primary",
            dropDown: "Action"
        },
    ]

    return (
        <>
            <Navbar />

            <div className={`${open ? 'top-0 left-0 h-[100%]  w-[100%]  absolute  z-50 flex justify-center items-center' : 'hidden'}`}>
                <div>
                    <div className="w-[300px] h-[150px] bg-white rounded-lg shadow-lg text-center flex justify-center items-center">
                        <div>
                            <p className="-mt-2 text-[30px]">Are You Sure?</p>

                            <div className="flex gap-5 mt-5 ml-5">
                                <button onClick={() => { handleDelete() }} className="text-white py-[8px] px-[30px] bg-[#234ce3] rounded-lg font-semibold text-2xl">Ok</button>
                                <button onClick={() => setOpen(false)} className="text-[#234ce3] font-semibold text-2xl">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-full p-[20px] pt-[30px]'>
                <div className='payment_card'>
                    <div className='border-b border-black p-5'>
                        <p className='font-bold'>Default Button</p>

                        <div className='mt-5 flex-wrap gap-2 flex'>
                            {data.map((item) => (
                                <button key={item.id} className={`${item.style} py-[5px] px-[10px]`}>{item.title}</button>
                            ))}
                        </div>
                    </div>

                    <div className='border-b border-black p-5'>
                        <p className='font-bold'>Button Sizes</p>

                        <div className='mt-5 flex-wrap gap-2 flex'>
                            {data.map((item) => (
                                <button key={item.id} className={`${item.style} py-[6px] px-[15px]`}>{item.title}</button>
                            ))}
                        </div>

                        <div className='mt-5 flex-wrap gap-2 flex'>
                            {data.map((item) => (
                                <button key={item.id} className={`${item.style} py-[5px] px-[10px]`}>{item.title}</button>
                            ))}
                        </div>

                        <div className='mt-5 flex-wrap gap-2 flex'>
                            {data.map((item) => (
                                <button key={item.id} className={`${item.style} py-[5px] text-sm px-[7px]`}>{item.title}</button>
                            ))}
                        </div>
                    </div>

                    <div className='p-5'>
                        <p className='font-bold'>Button Group</p>

                        <div className='flex mt-5'>
                            <button className='px-3 py-2 bg-[#234ce3] hover:bg-[#f62d51] text-white rounded-l-lg'>Left</button>
                            <button className='px-3 py-2 bg-[#234ce3] hover:bg-[#f62d51] text-white'>Middle</button>
                            <button className='px-3 py-2 bg-[#234ce3] hover:bg-[#f62d51] text-white rounded-r-lg'>Right</button>
                        </div>

                        <div className='flex mt-5'>
                            <button className='px-2 py-1 bg-[#234ce3] hover:bg-[#f62d51] text-white rounded-l-lg'>Left</button>
                            <button className='px-2 py-1 bg-[#234ce3] hover:bg-[#f62d51] text-white'>Middle</button>
                            <button className='px-2 py-1 bg-[#234ce3] hover:bg-[#f62d51] text-white rounded-r-lg'>Right</button>
                        </div>

                        <div className='flex mt-5'>
                            <button className='px-2 py-1 text-sm bg-[#234ce3] hover:bg-[#f62d51] text-white rounded-l-lg'>Left</button>
                            <button className='px-2 py-1 text-sm bg-[#234ce3] hover:bg-[#f62d51] text-white'>Middle</button>
                            <button className='px-2 py-1 text-sm bg-[#234ce3] hover:bg-[#f62d51] text-white rounded-r-lg'>Right</button>
                        </div>
                    </div>
                </div>

                <div className='payment_card'>
                    <p className='font-semibold text-[18px]'>Alert</p>

                    <div className="mt-3">
                        {alert.map((item) => (
                            <div key={item.id} className='w-full py-4 rounded-lg mt-2 pl-5 flex gap-2' style={{ background: item.color }}>
                                <div className="font-medium">
                                    {item.title}
                                </div>

                                <button className="p-1 border-black bg-white text-sm border-2" onClick={() => { setOpen(item.id) }}>
                                    <AiOutlineClose />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="payment_card">
                    <div className="text-[18px] font-semibold">
                        <p>Dropdowns Within Text</p>
                    </div>

                    <div className="border-b border-black pb-2">
                        <button className={`px-3 py-1 flex gap-3`}>DropDown <IoMdArrowDropdown className="mt-[5px]" /></button>
                    </div>

                    <div className="mt-5 border-b border-black pb-4">
                        <div className="text-[18px] font-semibold">
                            <p>Dropdowns Within Buttons</p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-3">
                            {
                                dataDropDown.map((item) => (
                                    <div className="flex">
                                        <button className={`px-3 py-1 flex ${item.style}`}>{item.dropDown} <IoMdArrowDropdown className="mt-[5px]" /></button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="mt-5 border-b border-black pb-4">
                        <div className="text-[18px] font-semibold">
                            <p>Split Button Dropdowns</p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-3 ">
                            {
                                dataDropDown.map((item) => (
                                    <div className="flex">
                                        <button className={`px-3 py-1 flex gap-3 ${item.style}`}>{item.dropDown} <IoMdArrowDropdown className="mt-[5px]" /></button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
