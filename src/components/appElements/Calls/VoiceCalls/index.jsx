import React from 'react'
import img1 from '../../../../assets/img/profile/avatar-01.jpg'
import img2 from '../../../../assets/img/icon/clock.svg'
import { useState } from 'react'
import img3 from '../../../../assets/img/icon/voice-icon-01.svg'
import img4 from '../../../../assets/img/icon/voice-icon-02.svg'
import img5 from '../../../../assets/img/icon/voice-icon-03.svg'

export default () => {

    const [demo, setDemo] = useState(0)

    const data = [
        {
            id: 1,
            img: img3,
            border: "2px solid #fff",
            bg: "inherit"
        },
        {
            id: 2,
            img: img4,
            bg: "#234ce3",
            border: "1px solid #234ce3",
        },
        {
            id: 3,
            img: img5,
            border: "2px solid #fff",
            bg: "inherit"
        },
    ]

    return (
        <div className='w-full'>
            <div className='CallsVoice py-5 w-full flex text-center justify-center'>
                <div>
                    <div className='flex justify-center'>
                        <img src={img1} alt="" className='w-[80px] h-[80px] rounded-full' />
                    </div>

                    <div className='mt-2'>
                        <p className='text-[18px] font-bold'>Bernardo James</p>
                        <p className='font-semibold text-gray-600'>Senior Developer</p>
                    </div>

                    <div className='border-2 border-white rounded-md mt-5 bg-inherit px-5 py-2'>
                        <div className='flex gap-2'>
                            <img src={img2} alt="" className='mt-1' />
                            <p className='text-[23px] font-bold text-[#35446F]'>00:10:10</p>
                        </div>
                    </div>

                    <div className='flex gap-5 mt-5'>
                        {
                            data.map((item) => (
                                <button key={item.id} className='p-3 rounded-md' style={{background: item.bg, border: item.border}}>
                                    <img src={item.img} alt="" />
                                </button>
                            ))
                        }
                    </div>

                    <div>
                        <button className='w-[150px] h-[46px] bg-red-500 hover:bg-blue-800 text-white rounded-lg mt-5 font-semibold'>End Call</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
