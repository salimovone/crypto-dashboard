import React from 'react'
import Navbar from '../../Navbar'
import img1 from '../../../assets/img/icon/setting-icon-02.svg'

export default () => {
    return (
        <div>
            <div className='w-full p-[20px]'>
                <div className='flex gap-3'>
                    <div><img src={img1} alt="" className='w-[44px] mt-1' /><p className='w-[44px]'></p></div>
                    <div>
                        <p className='text-[20px] text-[#35446F] font-bold'>Theme Settings</p>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className='xl:w-[70%] w-full mt-10'>
                    <div>
                        <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Website Name *</p>
                        <select id="countries" class="border-2 pl-3 text-[14px] text-gray-600 border-white h-[40px] w-full  bg-inherit rounded-lg">
                            <option selected>crypto</option>
                            <option value="US">crypto 1</option>
                        </select>
                    </div>
                </div>

                <div className='xl:w-[60%] w-full mt-10'>
                    <div>
                        <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Logo *</p>
                        <div className='flex gap-3'>
                            <input type="text" className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                            <button className='w-[250px] h-[40px] bg-[#6282BA] text-white rounded-lg'>Upload Logo</button>
                        </div>
                        <p className='text-[14px] pl-1 pt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className='xl:w-[60%] w-full mt-10'>
                    <div>
                        <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Favicon *</p>
                        <div className='flex gap-3'>
                            <input type="text" className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                            <button className='w-[250px] h-[40px] bg-[#6282BA] text-white rounded-lg'>Upload Logo</button>
                        </div>
                        <p className='text-[14px] pl-1 pt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className='flex xl:w-[70%] w-full mt-5 justify-end'>
                    <button className='w-[200px] h-[40px] bg-blue-800 hover:bg-red-400 rounded-lg text-white'>Save Changes</button>
                </div>
            </div>
        </div>
    )
}
