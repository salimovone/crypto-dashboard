import React from 'react';
import img1 from '../../../assets/img/user.jpg'
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className='flex justify-center items-center h-full text-center'>
            <div>
                <div className='w-full flex justify-center'>
                    <img src={img1} alt="" className='rounded-full w-[120px]' />
                </div>
                <p className='text-[12px] mt-1'>John Doe</p>

                <div className='mt-5'>
                    <input type="text" placeholder='Enter your Password' className="md:w-[450px] bg-inherit rounded-lg border-2 border-white w-[100%] h-[45px] py-1 px-4 placeholder:text-black" />
                </div>

                <div className='mt-3'>
                    <Link className='text-blue-600 font-bold pt-5'>Sign in as a different user?</Link>
                </div>
            </div>
        </div>
    )
}
