import React from 'react'
import { button, users } from './data'
import { MdKeyboardVoice } from "react-icons/md";

export default () => {
    return (
        <div className='w-full CallsVoice'>
            <div className='p-5 w-full h-full'>
                <div className='flex flex-wrap gap-5'>
                    {
                        users.map((item) => (
                            <div key={item.id}>
                                <div className='flex items-center text-white justify-end relative'>
                                    <div className='bg-[#35446F] p-1 rounded-xl'>
                                        {item.icon}
                                    </div>
                                </div>

                                <div style={{ width: item.width, marginTop: item.mt }}>
                                    <img src={item.img} alt="" />
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='flex gap-5 justify-center mt-10'>
                    {
                        button.map((item) => (
                            <button key={item.id} style={{ color: item.color, background: item.bg }} className={`p-3 rounded-md border-2 border-white`}>
                                {item.text}
                                <img src={item.button} alt="" />
                                {item.button1}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
