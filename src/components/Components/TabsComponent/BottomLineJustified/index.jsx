import React, { useState } from 'react'

export default () => {

    const [count, setCount] = useState(0)

    return (
        <div className='payment_card'>
            <div>
                <p className='font-bold'>Bottom Line Justified</p>
            </div>

            <div className='flex justify-between mt-3 px-5 border-b-2'>
                <button onClick={() => setCount(0)} className={`w-full h-[40px] ${count === 0 ? "border-b-2 border-blue-700" : ""}`}>Home</button>
                <button onClick={() => setCount(1)} className={`w-full h-[40px] ${count === 1 ? "border-b-2 border-blue-700" : ""}`}>Profile</button>
                <button onClick={() => setCount(2)} className={`w-full h-[40px] ${count === 2 ? "border-b-2 border-blue-700" : ""}`}>Messages</button>
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
