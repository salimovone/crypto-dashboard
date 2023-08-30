import React from 'react'

export default (props) => {
    return (
        <div>
            <div>
                <div>
                    <p className='pt-2'>Large Progress Bars</p>
                </div>
                <div className='w-full rounded-full bg-[#E9ECEF] mt-5' style={{ height: props.height }}>
                    <div className='h-full w-[13%] bg-[#0D6EFD] rounded-l-full'></div>
                </div>
            </div>

            <div className='mt-2'>
                <div className='w-full rounded-full bg-[#E9ECEF] mt-5' style={{ height: props.height }}>
                    <div className='h-full w-[25%] bg-[#2750E4] rounded-l-full'></div>
                </div>
            </div>

            <div className='mt-2'>
                <div className='w-full rounded-full bg-[#E9ECEF] mt-5' style={{ height: props.height }}>
                    <div className='h-full w-[50%] bg-[#00D3C7] rounded-l-full'></div>
                </div>
            </div>

            <div className='mt-2'>
                <div className='w-full rounded-full bg-[#E9ECEF] mt-5' style={{ height: props.height }}>
                    <div className='h-full w-[75%] bg-[#FFBC34] rounded-l-full'></div>
                </div>
            </div>

            <div className='mt-2'>
                <div className='w-full rounded-full bg-[#E9ECEF] mt-5' style={{ height: props.height }}>
                    <div className='h-full w-[100%] bg-[#F62D51] rounded-full'></div>
                </div>
            </div>
        </div>
    )
}
