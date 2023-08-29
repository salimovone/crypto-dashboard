import React, { useState } from 'react'

export default () => {

    const [count, setCount] = useState(0)

    return (
        <div className='payment_card'>
            <div>
                <p className='font-bold'>Basic Tabs</p>
            </div>

            <div className='flex mt-3 gap-5 border-b-2'>
                <button onClick={() => setCount(0)} className={`${count === 0 ? "bg-white w-[70px] h-[40px]" : ""}`}>Home</button>
                <button onClick={() => setCount(1)} className={`${count === 1 ? "bg-white w-[70px] h-[40px]" : ""}`}>Profile</button>
                <button onClick={() => setCount(2)} className={`${count === 2 ? "bg-white w-[80px] h-[40px]" : ""}`}>Messages</button>
            </div>

            {
                count === 0 ? (
                    <p className='mt-2'>Tab content 1</p>
                ) : ""
            }

            {
                count === 1 ? (
                    <p className='mt-2'>Tab content 2</p>
                ) : ""
            }

            {
                count === 2 ? (
                    <p className='mt-2'>Tab content 3</p>
                ) : ""
            }

        </div>
    )
}
