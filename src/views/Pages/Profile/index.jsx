import { AiOutlinePlus } from "react-icons/ai";
import React, { useState } from 'react'
import Navbar from "../../../components/Navbar";
import { useLocation } from "react-router-dom";

export default () => {

    const [just, setJust] = useState(0)
    const location = useLocation()

    let data = location.state


    return (
        <>
            <Navbar />
            <div className='p-[30px]'>
                <div>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-[20px] font-bold text-[#35446F]">My Profile</p>
                        </div>

                        <div>
                            <button className="flex gap-1 font-medium w-[109px] h-[34px] justify-center rounded-3xl bg-blue-600 text-white items-center"><AiOutlinePlus className="mt-1" /> <span>Edit Profile</span></button>
                        </div>
                    </div>

                    <div className="card_profile">
                        <div className="md:grid-cols-2 lg:gap-0 gap-10 md:gap-5 grid">
                            <div className="md:flex gap-10">
                                <div className="flex md:inline-block justify-center">
                                    <img src={data.image} alt="" className="w-[150px] rounded-full" />
                                </div>

                                <div className="flex md:inline-block justify-center md:text-left text-center">
                                    <div>
                                        <p className="text-[25px]">{data.name}</p>
                                        <p className="text-[14px]">{data.job}</p>
                                        <p>Employee ID : DR-0001</p>
                                        <button className="py-1 mt-6
                                     px-2 text-white rounded-lg bg-blue-700">Send Message</button>
                                    </div>
                                </div>
                            </div>

                            <div className="border-dashed border-t-2 md:border-t-0 md:pt-0 pt-5 md:border-l-2 pl-5 xl:-ml-5">
                                <div>
                                    <div className="grid grid-cols-2">
                                        <label htmlFor="">Phone:</label>
                                        <td className="lg:-ml-16">770-889-6484</td>
                                    </div>

                                    <div className="grid grid-cols-2">
                                        <label htmlFor=""> Email:</label>
                                        <td className="lg:-ml-16">[email protected]</td>
                                    </div>

                                    <div className="grid grid-cols-2">
                                        <label htmlFor="">Brithday:</label>
                                        <td className="lg:-ml-16">3rd March</td>
                                    </div>

                                    <div className="grid grid-cols-2">
                                        <label htmlFor="">Address:</label>
                                        <td className="lg:-ml-16">714 Burwell Heights Road, Bridge City, TX, 77611</td>
                                    </div>

                                    <div className="grid grid-cols-2">
                                        <label htmlFor="">Gender:</label>
                                        <td className="lg:-ml-16">Female</td>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="buttons_profile flex gap-5">
                        <button onClick={() => setJust(0)} className={`${just === 0 ? "border-blue-700 border-b-2 w-[60px]" : ""}`}>About</button>
                        <button onClick={() => setJust(1)} className={`${just === 1 ? "border-blue-700 border-b-2 w-[60px]" : ""}`}>Profile</button>
                        <button onClick={() => setJust(2)} className={`${just === 2 ? "border-blue-700 border-b-2 w-[80px]" : ""}`}>Message</button>
                    </div>

                    {
                        just === 0 ? (
                            <div>
                                <div className="card_profile">
                                    <div>
                                        <p className="text-[18px] font-semibold">Education Informations</p>
                                    </div>
                                    <div className="border-l border-gray-400 pl-5 mt-3 text-gray-500">
                                        <p className="font-bold">Lorem ipsum isamp ipsum</p>
                                        <p>Lorem ipsum</p>
                                        <p className="text-[12px]">2001 - 2003</p>
                                    </div>

                                    <div className="border-l border-gray-400 mt-2 pl-5 text-gray-500">
                                        <p className="font-bold">Lorem ipsum dolor sit amet</p>
                                        <p>Lorem ipsum dolor sit amet</p>
                                        <p className="text-[12px]">1997 - 2001</p>
                                    </div>
                                </div>

                                <div className="card_profile">
                                    <div>
                                        <p className="text-[18px] font-semibold">Experience</p>
                                    </div>
                                    <div className="border-l border-gray-400 pl-5 mt-3 text-gray-500">
                                        <p className="font-bold">Lorem ipsum dolor sit amet</p>
                                        <p className="text-[12px]">Jan 2014 - Lorem ipsum dolor sit amet</p>
                                    </div>

                                    <div className="border-l border-gray-400 pl-5 mt-3 text-gray-500">
                                        <p className="font-bold">Lorem ipsum dolor sit amet</p>
                                        <p className="text-[12px]">Jan 2009 - Lorem ipsum dolor sit amet</p>
                                    </div>

                                    <div className="border-l border-gray-400 pl-5 mt-3 text-gray-500">
                                        <p className="font-bold">Lorem ipsum dolor sit amet</p>
                                        <p className="text-[12px]">Jan 204 - Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                        ) : ""
                    }

                    {
                        just === 1 ? (
                            <div className="mt-5 ml-3">
                                Tab content 2
                            </div>
                        ) : ""
                    }

                    {
                        just === 2 ? (
                            <div className="mt-5 ml-3">
                                Tab content 3
                            </div>
                        ) : ""
                    }
                </div>
            </div>
        </>
    )
}
