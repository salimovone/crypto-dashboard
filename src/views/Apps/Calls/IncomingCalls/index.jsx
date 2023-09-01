import React from 'react'
import img1 from '../../../../assets/img/profile/avatar-01.jpg'
import { Link } from 'react-router-dom'
import img2 from '../../../../assets/img/icon/call-remove.svg'
import img3 from '../../../../assets/img/icon/call-received.svg'

export default () => {
    return (
        <div className='w-full h-full'>
            <div className='IncomingCall'>
                <div className='flex justify-center text-center items-center h-full w-full'>
                    <div className='w-[500px] Call blur-[0.4px] py-5 flex justify-center h-[330px] rounded-lg border-2 border-blue-700'>
                        <div>
                            <div className='flex justify-center'>
                                <img src={img1} alt="" className='w-[80px] h-[80px] rounded-full' />
                            </div>

                            <div>
                                <div className='mt-2'>
                                    <p className='text-[#35446F] text-[23px] font-bold'>Bernardo James</p>
                                    <p className='text-blue-700 font-semibold'>Senior Developer</p>
                                </div>
                                <div className='mt-5 text-[#35446F] font-semibold'>
                                    <p>Calling...</p>
                                </div>

                                <div className='mt-5 flex justify-center gap-5'>
                                    <Link to={"/voiceCall"}>
                                        <button className='w-[50px] rounded-lg flex justify-center items-center h-[50px] bg-red-500'>
                                            <img src={img2} alt="" />
                                        </button>
                                    </Link>

                                    <button className='w-[50px] rounded-lg flex justify-center items-center h-[50px] bg-green-500'>
                                        <img src={img3} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
