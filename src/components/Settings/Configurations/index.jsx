import React from 'react'
import img1 from '../../../assets/img/icon/setting-icon-04.svg'
import { useState } from 'react'

export default () => {

    const [count, setCount] = useState(1)

    return (
        <div className='w-full p-[20px]'>
            <div className='flex gap-3'>
                <div><img src={img1} alt="" className='w-[44px] mt-1' /><p className='w-[44px]'></p></div>
                <div>
                    <p className='text-[20px] text-[#35446F] font-bold'>Configurations</p>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div className='flex gap-5 mt-5'>
                <button onClick={() => setCount(1)} className={`font-bold w-[150px] h-[40px] rounded-lg ${count === 1 ? "text-white bg-blue-700" : "text-black bg-white"}`}>Email Settings</button>
                <button onClick={() => setCount(2)} className={`font-bold w-[150px] h-[40px] rounded-lg ${count === 2 ? "text-white bg-blue-700" : "text-black bg-white"}`}>Invoice Settings</button>
            </div>

            {
                count === 1 ? (
                    <div>
                        <div className='flex gap-3 mt-5'>
                            <div>
                                <input type="radio" /> <span>PHP Mail</span>
                            </div>
                            <div>
                                <input type="radio" name="" id="" /> <span>SMTP</span>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <p className='text-[18px] font-semibold text-[#7B6F6F]'>PHP Email Settings</p>
                        </div>

                        <div className='xl:w-[70%] w-full grid gap-7 md:grid-cols-2 mt-5'>
                            <div>
                                <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Email From Address *</p>
                                <input type="text" className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                            </div>

                            <div>
                                <p className='text-[14px] pl-2 font-bold text-[#35446F]'>Emails From Name *</p>
                                <input type="text" className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                            </div>

                            <div>
                                <p className='text-[14px] pl-2 font-bold text-[#35446F]'>SMTP HOST *</p>
                                <input type="text" className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                            </div>

                            <div>
                                <p className='text-[14px] pl-2 font-bold text-[#35446F]'>SMTP USER *</p>
                                <input type="text" className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                            </div>

                            <div>
                                <p className='text-[14px] pl-2 font-bold text-[#35446F]'>SMTP PASSWORD *</p>
                                <input type="text" className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                            </div>

                            <div>
                                <p className='text-[14px] pl-2 font-bold text-[#35446F]'>SMTP PORT *</p>
                                <input type="text" className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                            </div>

                            <div>
                                <p className='text-[14px] pl-2 font-bold text-[#35446F]'>SMTP Security *</p>
                                <select id="countries" class="border-2 pl-3 text-[14px] text-gray-600 border-white h-[40px] w-full  bg-inherit rounded-lg">
                                    <option selected>None</option>
                                    <option value="US">TLS</option>
                                </select>
                            </div>

                            <div>
                                <p className='text-[14px] pl-2 font-bold text-[#35446F]'>SMTP Authentication Domain *</p>
                                <input type="text" className='w-full pl-3 pt-1 rounded-lg bg-inherit border-[3px] border-white h-[40px]' />
                            </div>
                        </div>

                        <div className='flex xl:w-[70%] w-full mt-5 justify-end'>
                            <button className='w-[200px] h-[40px] bg-blue-700 hover:bg-red-400 rounded-lg text-white'>Save Changes</button>
                        </div>
                    </div>
                ) : ""
            }


            {
                count === 2 ? (
                    <div>
                        <div className='xl:w-[60%] w-full mt-10'>
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

                        <div className='flex xl:w-[70%] w-full mt-5 justify-end'>
                            <button className='w-[200px] h-[40px] bg-blue-800 hover:bg-red-400 rounded-lg text-white'>Save Changes</button>
                        </div>
                    </div>
                ) : ""
            }
        </div>
    )
}
