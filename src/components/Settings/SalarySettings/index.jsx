import React from 'react'
import img1 from '../../../assets/img/icon/setting-icon-05.svg'

export default () => {
    return (
        <div className='w-full p-[20px]'>
            <div className='flex gap-3'>
                <div>
                    <img src={img1} alt="" className='w-[44px] mt-2' />
                    <p className='w-[44px]'></p>
                </div>
                <div>
                    <p className='text-[20px] text-[#35446F] font-bold'>Salary Settings</p>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div className='xl:w-[70%] w-full grid gap-7 md:grid-cols-2 mt-5'>
                <div>
                    <p className='text-[14px] pl-2 font-bold text-[#35446F]'>DA (%) *</p>
                    <input type="text" className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                </div>

                <div>
                    <p className='text-[14px] pl-2 font-bold text-[#35446F]'>HRA (%) *</p>
                    <input type="text" className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                </div>

                <div className='mt-5'>
                    <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Employee Share (%)</p>
                    <input type="text" className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                </div>

                <div className='mt-5'>
                    <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Organization Share (%)</p>
                    <input type="text" className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                </div>

                <div className='mt-2'>
                    <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Employee Share (%)</p>
                    <input type="text" className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                </div>

                <div className='mt-2'>
                    <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Organization Share (%)</p>
                    <input type="text" className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                </div>
            </div>

            <div className='flex xl:w-[70%] w-full mt-10 justify-end'>
                <button className='w-[200px] h-[40px] bg-blue-700 hover:bg-red-400 rounded-lg text-white'>Save Changes</button>
            </div>
        </div>
    )
}
