import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/img/logo.png'

export default () => {
    return (
        <div className='w-full h-full flex justify-center items-center text-center'>
            <div className='box_login'>
                <p className='text-[32px]'>Change Password</p>

                <div className="flex justify-center mt-5">
                    <Link to={"/"}><img src={img1} alt="" /></Link>
                </div>

                <div className='text-start mt-6'>
                    <label>Current Password</label>
                    <div>
                        <input type="text" className="md:w-[450px] bg-inherit rounded-lg border-2 border-white w-[100%] h-[45px] py-1 px-4" />
                    </div>
                </div>

                <div className='text-start mt-6'>
                    <label htmlFor="">New Password</label>
                    <div>
                        <input type="text" className="md:w-[450px] bg-inherit rounded-lg border-2 border-white w-[100%] h-[45px] py-1 px-4" />
                    </div>
                </div>

                <div className='text-start mt-6'>
                    <label htmlFor="">New Repeat Password</label>
                    <div>
                        <input type="text" className="md:w-[450px] bg-inherit rounded-lg border-2 border-white w-[100%] h-[45px] py-1 px-4" />
                    </div>
                </div>

                <button><Link to={"/"} className="md:w-[450px] bg-blue-600 items-center font-semibold flex justify-center rounded-lg w-full h-[45px] text-center mt-5 text-white">Change Password</Link></button>
            </div>
        </div>
    )
}
