import React from 'react'
import img1 from '../../../assets/img/icon/setting-icon.svg'

export default () => {
    return (
        <div className='w-full p-[20px]'>
            <div>
                <div className='flex gap-3'>
                    <div><img src={img1} alt="" className='w-[44px] mt-1' /><p className='w-[44px]'></p></div>
                    <div>
                        <p className='text-[20px] text-[#35446F] font-bold'>Company Settings</p>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className='xl:w-[70%] w-full grid gap-5 md:grid-cols-2 mt-10'>
                    <div>
                        <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Company Name *</p>
                        <input type="text" className='w-full pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                    </div>

                    <div>
                        <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Contact Person *</p>
                        <input type="text" className='w-full pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                    </div>
                </div>

                <div className='xl:w-[70%] w-full mt-5'>
                    <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Address *</p>
                    <input type="text" className='w-full pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                </div>

                <div className='xl:w-[70%] w-full grid gap-5 md:grid-cols-2 mt-10'>
                    <div>
                        <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Country *</p>
                        <select id="countries" class="border-2 text-[14px] text-gray-600 border-white h-[40px] w-full  bg-inherit rounded-lg">
                            <option selected>USA</option>
                            <option value="US">United States</option>
                        </select>
                    </div>

                    <div>
                        <p className='text-[14px] pl-2 font-bold text-[#35446F]'>City *</p>
                        <input type="text" className='w-full pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                    </div>
                </div>

                <div className='xl:w-[70%] w-full grid gap-5 md:grid-cols-2 mt-10'>
                    <div>
                        <p className='text-[14px] pl-2 font-bold text-[#35446F]'>State/Province *</p>
                        <select id="countries" class="border-2 text-[14px] text-gray-600 border-white h-[40px] w-full  bg-inherit rounded-lg">
                            <option selected>California</option>
                            <option value="US">Alaska</option>
                        </select>
                    </div>

                    <div>
                        <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Postal Code * *</p>
                        <input type="text" className='w-full pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                    </div>
                </div>

                <div className='xl:w-[70%] w-full grid gap-5 md:grid-cols-2 mt-10'>
                    <div>
                        <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Email *</p>
                        <input type="text" className='w-full pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                    </div>

                    <div>
                        <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Phone Number *</p>
                        <input type="text" className='w-full pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                    </div>
                </div>

                <div className='xl:w-[70%] w-full grid gap-5 md:grid-cols-2 mt-10'>
                    <div>
                        <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Mobile Number *</p>
                        <input type="text" className='w-full pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                    </div>

                    <div>
                        <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Fax *</p>
                        <input type="text" className='w-full pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                    </div>
                </div>

                <div className='xl:w-[70%] w-full mt-5'>
                    <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Website Url *</p>
                    <input type="text" value={"https://www.example.com"} className='w-full pl-2 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                </div>

                <div className='flex xl:w-[70%] w-full mt-5 justify-end'>
                    <button className='w-[200px] h-[40px] bg-blue-700 hover:bg-red-400 rounded-lg text-white'>Save Changes</button>
                </div>
            </div>
        </div>
    )
}
