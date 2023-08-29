import { BiArrowToRight } from "react-icons/bi";
import { BiArrowToLeft } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAlert } from "../../../redux/alerts/alertReducer";
import { dataDropDown, data, ProgressBar } from './data'

export default () => {

    const alert = useSelector((state) => state.alerts.alerts)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const handleDelete = () => {
        dispatch(deleteAlert(open))
        setOpen(false)
    }

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

                    <div className="mt-5">
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

                <div className="payment_card grid gap-5 lg:grid-cols-2">
                    {
                        ProgressBar.map((item) => (
                            <div key={item.id}>
                                {item.Bars}
                            </div>
                        ))
                    }
                </div>

                <div className="grid lg:grid-cols-2 gap-5">
                    <div className="payment_card">
                        <p className="font-bold text-[18px]">Pagination</p>

                        <div className="flex gap-3 mt-5">
                            <button className="text-[#35446F] font-medium">Previous</button>
                            <button>1</button>
                            <button className="w-[30px] h-[30px] bg-[#35446F] text-white">2</button>
                            <button>3</button>
                            <button className="text-[#35446F] font-medium">Next</button>
                        </div>

                        <div className="flex gap-2 mt-5">
                            <button className="text-[#35446F] font-medium mt-1"><BiArrowToLeft /></button>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button className="text-[#35446F] font-medium mt-1"><BiArrowToRight /></button>
                        </div>

                        <div className="flex gap-4 mt-5">
                            <button className="text-[#35446F] font-medium text-[20px]">Previous</button>
                            <button className="text-[18px]">1</button>
                            <button className="w-[40px] text-[18px] h-[40px] bg-[#35446F] text-white">2</button>
                            <button className="text-[18px]">3</button>
                            <button className="text-[#35446F] text-[20px] font-medium">Next</button>
                        </div>

                        <div className="flex gap-3 mt-5">
                            <button className="text-[14px] text-[#35446F] font-medium">Previous</button>
                            <button className="text-[14px]">1</button>
                            <button className="w-[30px] text-[14px] h-[30px] bg-[#35446F] text-white">2</button>
                            <button className="text-[14px]">3</button>
                            <button className="text-[14px] text-[#35446F] font-medium">Next</button>
                        </div>
                    </div>

                    <div className="payment_card">
                        <div>
                            <p className="font-bold text-[18px]">Breadcrumbs</p>
                        </div>
                        
                        <div className="text-gray-500">
                            <p className="mt-2">Home</p>

                            <div className="mt-2">
                                <p className="text-blue-700 font-medium">Home <span className="text-gray-500">/ Products</span></p>
                            </div>

                            <div className="mt-2">
                                <p className="text-blue-700 font-medium">Home / Products <span className="text-gray-500">/ Accessories</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
