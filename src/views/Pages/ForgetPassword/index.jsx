import React from 'react'
import img1 from '../../../assets/img/logo.png'
import { Link } from "react-router-dom";
import img2 from '../../../assets/img/icon/lock-icon-03.svg'

export default () => {
    return (
        <div className="w-full h-full flex justify-center py-5 items-center text-center">
            <div>
                <div className="flex justify-center">
                    <Link to={"/"}><img src={img1} alt="" /></Link>
                </div>

                <div className="box_login">
                    <div className="text-start">
                        <p className="text-[20px] text-[#35446F] font-bold">Let's Get Started</p>
                        <p className="text-[14px] text-gray-400 font-medium">Reset to continue to Crypto</p>
                    </div>

                    <div className="flex mt-5">
                        <input type="email" placeholder="Register Email" className="md:w-[450px] bg-inherit rounded-lg border-2 border-white w-[100%] h-[45px] py-1 px-4"/>
                        <span className="-ml-8 pt-4"><img src={img2} alt="" /></span>
                    </div>

                    <div>
                        <button className="md:w-[450px] bg-blue-600 items-center font-semibold flex justify-center rounded-lg w-full h-[45px] text-center mt-5 text-white"><Link className="flex gap-1" to={"/"}>Reset Password</Link></button>
                    </div>

                    <div className='mt-5 text-blue-700 font-medium'>
                        <p><Link to={"/login"}>Back to Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}