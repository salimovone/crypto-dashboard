import { DiBitbucket } from "react-icons/di";
import { DiBlackberry } from "react-icons/di";
import { DiAptana } from "react-icons/di";
import { BsFillBadge8KFill } from "react-icons/bs";
import { BsFillAwardFill } from "react-icons/bs";
import { BsFillBackspaceReverseFill } from "react-icons/bs";
import { BsFillAspectRatioFill } from "react-icons/bs";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { BsFillArrowDownLeftSquareFill } from "react-icons/bs";
import { BsFillAlarmFill } from "react-icons/bs";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillBank } from "react-icons/ai";
import { AiFillAudio } from "react-icons/ai";
import { AiFillAmazonSquare } from "react-icons/ai";
import { AiFillAmazonCircle } from "react-icons/ai";
import React from 'react'

export default () => {

    const data = [
        { icon: <BsFillAirplaneEnginesFill /> },
        { icon: <BsFillArrowDownSquareFill /> },
        { icon: <BsFillArrowRightCircleFill /> },
        { icon: <BsFillArrowThroughHeartFill /> },
        { icon: <AiFillAmazonCircle /> },
        { icon: <AiFillAudio /> },
        { icon: <AiFillAmazonSquare /> },
        { icon: <AiFillBank /> },
        { icon: <AiFillAppstore /> },
        { icon: <BsFillAirplaneEnginesFill /> },
        { icon: <BsFillAlarmFill /> },
        { icon: <BsFillArrowDownLeftSquareFill /> },
        { icon: <AiFillAudio /> },
        { icon: <AiFillAmazonSquare /> },
        { icon: <AiFillBank /> },
        { icon: <AiFillAppstore /> },
        { icon: <BsFillAspectRatioFill /> },
        { icon: <BsFillBackspaceReverseFill /> },
        { icon: <BsFillAwardFill /> },
        { icon: <BsFillBadge8KFill /> },
        { icon: <DiAptana /> },
        { icon: <DiBlackberry /> },
        { icon: <DiBitbucket /> },
        { icon: <BsFillAirplaneEnginesFill /> },

    ]

    return (
        <div className='p-[30px]'>
            <div>
                <p className='text-[20px] font-bold text-[#35446F]'>Feather Icon</p>
            </div>

            <div className='payment_card mt-10'>
                <p className='font-bold'>Feather Icon</p>

                <div className='flex-wrap w-full flex gap-2 mt-5'>
                    {
                        data.map((item) => (
                            <div>
                                <div className="flex-wrap text-[20px] w-[40px] h-[40px] text-[#7014cc] rounded-full border flex justify-center items-center">
                                    {item.icon}
                                </div>

                                <div className="flex-wrap text-[20px] w-[40px] h-[40px] text-[#7014cc] rounded-full border flex justify-center items-center mt-1">
                                    {item.icon}
                                </div>

                                <div className="flex-wrap text-[20px] w-[40px] h-[40px] text-[#7014cc] rounded-full border flex justify-center items-center mt-1">
                                    {item.icon}
                                </div>

                                <div className="flex-wrap text-[20px] w-[40px] h-[40px] text-[#7014cc] rounded-full border flex justify-center items-center mt-1">
                                    {item.icon}
                                </div>

                                <div className="flex-wrap text-[20px] w-[40px] h-[40px] text-[#7014cc] rounded-full border flex justify-center items-center mt-1">
                                    {item.icon}
                                </div>

                                <div className="flex-wrap text-[20px] w-[40px] h-[40px] text-[#7014cc] rounded-full border flex justify-center items-center mt-1">
                                    {item.icon}
                                </div>

                                <div className="flex-wrap text-[20px] w-[40px] h-[40px] text-[#7014cc] rounded-full border flex justify-center items-center mt-1">
                                    {item.icon}
                                </div>

                                <div className="flex-wrap text-[20px] w-[40px] h-[40px] text-[#7014cc] rounded-full border flex justify-center items-center mt-1">
                                    {item.icon}
                                </div>

                                <div className="flex-wrap text-[20px] w-[40px] h-[40px] text-[#7014cc] rounded-full border flex justify-center items-center mt-1">
                                    {item.icon}
                                </div>

                                <div className="flex-wrap text-[20px] w-[40px] h-[40px] text-[#7014cc] rounded-full border flex justify-center items-center mt-1">
                                    {item.icon}
                                </div>

                                <div className="flex-wrap text-[20px] w-[40px] h-[40px] text-[#7014cc] rounded-full border flex justify-center items-center mt-1">
                                    {item.icon}
                                </div>

                                <div className="flex-wrap text-[20px] w-[40px] h-[40px] text-[#7014cc] rounded-full border flex justify-center items-center mt-1">
                                    {item.icon}
                                </div>

                                <div className="flex-wrap text-[20px] w-[40px] h-[40px] text-[#7014cc] rounded-full border flex justify-center items-center mt-1">
                                    {item.icon}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
