import React from 'react'
import img1 from '../../../assets/img/icon/setting-icon-01.svg'

export default () => {
    return (
        <div className='w-full p-[20px]'>
            <div className='flex gap-3'>
                <div><img src={img1} alt="" className='w-[44px] mt-1' /><p className='w-[44px]'></p></div>
                <div>
                    <p className='text-[20px] text-[#35446F] font-bold'>Localization</p>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>

            <div className='xl:w-[70%] w-full grid gap-7 md:grid-cols-2 mt-10'>
                <div>
                    <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Default Country *</p>
                    <select id="countries" class="border-2 pl-3 text-[14px] text-gray-600 border-white h-[40px] w-full  bg-inherit rounded-lg">
                        <option selected>USA</option>
                        <option value="US">United States</option>
                    </select>
                </div>

                <div>
                    <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Date Format *</p>
                    <select id="countries" class="border-2 pl-3 text-[14px] text-gray-600 border-white h-[40px] w-full  bg-inherit rounded-lg">
                        <option selected>15 May 2016</option>
                        <option value="US">2016/05/15</option>
                    </select>
                </div>

                <div>
                    <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Timezone *</p>
                    <select id="countries" class="border-2 pl-3 text-[14px] text-gray-600 border-white h-[40px] w-full  bg-inherit rounded-lg">
                        <option selected>(UTC +5:30) Antarctica/Palmer</option>
                    </select>
                </div>

                <div>
                    <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Default Language *</p>
                    <select id="countries" class="border-2 pl-3 text-[14px] text-gray-600 border-white h-[40px] w-full  bg-inherit rounded-lg">
                        <option selected>French</option>
                        <option value="US">English</option>
                    </select>
                </div>

                <div>
                    <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Currency Code *</p>
                    <select id="countries" class="border-2 pl-3 text-[14px] text-gray-600 border-white h-[40px] w-full  bg-inherit rounded-lg">
                        <option selected>USD</option>
                        <option value="US">Pound</option>
                        <option value="US">Evro</option>
                    </select>
                </div>

                <div>
                    <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Currency Symbol *</p>
                    <input type="text" value={"$"} className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                </div>
            </div>

            <div className='flex xl:w-[70%] w-full mt-5 justify-end'>
                <button className='w-[200px] h-[40px] bg-blue-700 hover:bg-red-400 rounded-lg text-white'>Save Changes</button>
            </div>
        </div>
    )
}
