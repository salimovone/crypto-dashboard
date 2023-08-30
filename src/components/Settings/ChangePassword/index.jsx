import React from 'react'
import img1 from '../../../assets/img/icon/setting-icon-05.svg'

export default () => {
    return (
        <div className='w-full p-5'>
            <div className='flex gap-3'>
                <div>
                    <img src={img1} alt="" className='w-[44px] mt-1' />
                    <p className='w-[44px]'></p>
                </div>
                <div>
                    <p className='text-[20px] text-[#35446F] font-bold'>Configurations</p>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div className='xl:w-[70%] w-full mt-14'>
                <div>
                    <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Old password *</p>
                    <input type="text" required className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                </div>

                <div className='mt-7'>
                    <p className='text-[14px] pl-2 font-bold text-[#35446F]'>New password *</p>
                    <input type="text" required className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                </div>

                <div className='mt-7'>
                    <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Confirm password *</p>
                    <input type="text" required className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                </div>

                <div className='flex mt-5 justify-end'>
                    <button type='submit' className='w-[200px] h-[40px] bg-blue-800 hover:bg-red-400 rounded-lg text-white'>Update Password</button>
                </div>
            </div>

        </div>
    )
}
