import React from 'react'
import img1 from '../../../assets/img/icon/setting-icon-05.svg'
import { Switch } from '@material-tailwind/react'

export default () => {
    return (
        <div className='w-full p-5'>
            <div className='flex gap-3'>
                <div>
                    <img src={img1} alt="" className='w-[44px] mt-2' />
                    <p className='w-[44px]'></p>
                </div>
                <div>
                    <p className='text-[20px] text-[#35446F] font-bold'>Notifications</p>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>

            <div className='p-[15px] rounded-md xl:w-[70%] w-full pb-5 mt-5'>
                <div className='flex justify-between h-[70px] px-5 items-center border-y'>
                    <div className='w-full'>
                        <p className='font-medium'>Employee</p>
                        <p className='text-green-500'>Active</p>
                    </div>

                    <div className='flex items-center'>
                        <Switch></Switch>
                    </div>
                </div>

                <div className='flex justify-between h-[70px] px-5 items-center border-b'>
                    <div className='w-full'>
                        <p className='font-medium'>Holidays</p>
                        <p className='text-green-500'>Active</p>
                    </div>

                    <div className='flex items-center'>
                        <Switch></Switch>
                    </div>
                </div>

                <div className='flex justify-between h-[70px] px-5 items-center border-b'>
                    <div className='w-full'>
                        <p className='font-medium'>Leave Request</p>
                        <p className='text-red-500'>Disabled</p>
                    </div>

                    <div className='flex items-center'>
                        <Switch></Switch>
                    </div>
                </div>

                <div className='flex justify-between h-[70px] px-5 items-center border-b'>
                    <div className='w-full'>
                        <p className='font-medium'>Event</p>
                        <p className='text-green-500'>Active</p>
                    </div>

                    <div className='flex items-center'>
                        <Switch></Switch>
                    </div>
                </div>

                <div className='flex justify-between h-[70px] mb-5 px-5 items-center border-b'>
                    <div className='w-full'>
                        <p className='font-medium'>Chat</p>
                        <p className='text-green-500'>Active</p>
                    </div>

                    <div className='flex items-center'>
                        <Switch></Switch>
                    </div>
                </div>
            </div>

            <div className='flex xl:w-[70%] w-full mt-5 justify-end'>
                <button className='w-[200px] h-[40px] bg-blue-700 hover:bg-red-400 rounded-lg text-white'>Save Changes</button>
            </div>
        </div>
    )
}
