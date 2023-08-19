import React from 'react'
import PaymentTable from '../../../components/Accounts/PaymentTable'
import Navbar from '../../../components/Navbar'

export default () => {
    return (
        <div>
            <Navbar />

            <div className='mt-3 w-full h-full p-[30px]'>
                <div className='payment_card'>
                    <div>
                        <p className='text-[20px] text-[#35446F] font-bold'>Payments</p>
                    </div>
                    <div className='w-full xl:overflow-x-hidden overflow-x-scroll mt-5 pb-2'>
                        <PaymentTable />
                    </div>
                </div>
            </div>
        </div>
    )
}
