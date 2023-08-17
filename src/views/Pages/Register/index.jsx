import React from 'react'
import img1 from '../../../assets/img/logo.png'
import { Link } from "react-router-dom";
import img2 from '../../../assets/img/icon/lock-icon-02.svg'
import img3 from '../../../assets/img/icon/lock-icon-01.svg'
import img5 from '../../../assets/img/icon/lock-icon-03.svg'
import img6 from '../../../assets/img/icon/lock-icon-04.svg'

export default () => {
    return (
        <div>
            <div className="w-full h-screen flex justify-center py-5 items-center text-center">
                <div>
                    <div className="flex justify-center">
                        <Link to={"/"}><img src={img1} alt="" /></Link>
                    </div>

                    <div className="box_login">
                        <div className="text-start">
                            <p className="text-[20px] text-[#35446F] font-bold">Let's Get Started</p>
                            <p className="text-[14px] text-gray-400 font-medium">Sign in to continue to Crypto</p>
                        </div>

                        <div className="flex mt-5">
                            <input type="text" placeholder="Username" className="md:w-[450px] rounded-lg bg-inherit border-2 border-white w-[100%] h-[45px] py-1 px-4" />
                            <span className="-ml-6 pt-4"><img src={img3} alt="" /></span>
                        </div>

                        <div className="flex mt-5">
                            <input type="email" placeholder="Register Email" className="md:w-[450px] bg-inherit rounded-lg border-2 border-white w-[100%] h-[45px] py-1 px-4" />
                            <span className="-ml-8 pt-4"><img src={img2} alt="" /></span>
                        </div>

                        <div className="flex mt-5">
                            <input type="email" placeholder="Password" className="md:w-[450px] bg-inherit rounded-lg border-2 border-white w-[100%] h-[45px] py-1 px-4" />
                            <span className="-ml-8 pt-4"><img src={img5} alt="" /></span>
                        </div>

                        <div className="flex mt-5">
                            <input type="email" placeholder="Register Email" className="md:w-[450px] bg-inherit rounded-lg border-2 border-white w-[100%] h-[45px] py-1 px-4" />
                            <span className="-ml-8 pt-4"><img src={img6} alt="" /></span>
                        </div>

                        <div className="flex mt-5 gap-1">
                            <div className="flex gap-1">
                                <input type="checkbox" />
                                <p>I have read and agree the </p>
                            </div>

                            <div>
                                <Link className="text-blue-600">Terms & Conditions</Link>
                            </div>
                        </div>

                        <div>
                            <button className="md:w-[450px] bg-blue-600 items-center font-semibold flex justify-center rounded-lg w-full h-[45px] text-center mt-5 text-white"><Link to={"/"}>Sign Up</Link></button>
                        </div>

                        <div className="mt-5">
                            <p>Don't have an account? <span className="text-blue-700 font-medium"><Link to={"/login"}>Sign In</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
