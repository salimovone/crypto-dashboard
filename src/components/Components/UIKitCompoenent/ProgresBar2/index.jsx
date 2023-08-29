import React from 'react'

export default (props) => {
    return (
        <div>
            <div>
                <div>
                    <p className='pt-7'></p>
                </div>
                <div className='w-full rounded-full bg-[#E9ECEF] mt-5' style={{ height: props.height }}>
                    <div className='h-full w-[13%] ProgressBarBg1 rounded-l-full'></div>
                </div>
            </div>

            <div className='mt-2'>
                <div className='w-full rounded-full bg-[#E9ECEF] mt-5' style={{ height: props.height }}>
                    <div className='h-full w-[25%] ProgressBarBg2 rounded-l-full'></div>
                </div>
            </div>

            <div className='mt-2'>
                <div className='w-full rounded-full bg-[#E9ECEF] mt-5' style={{ height: props.height }}>
                    <div className='h-full w-[50%] ProgressBarBg3  rounded-l-full'></div>
                </div>
            </div>

            <div className='mt-2'>
                <div className='w-full rounded-full bg-[#E9ECEF] mt-5' style={{ height: props.height }}>
                    <div className='h-full w-[75%] ProgressBarBg4 rounded-l-full'></div>
                </div>
            </div>

            <div className='mt-2'>
                <div className='w-full rounded-full bg-[#E9ECEF] mt-5' style={{ height: props.height }}>
                    <div className='h-full w-[100%] ProgressBarBg5 rounded-full'></div>
                </div>
            </div>
        </div>
    )
}
