import React from 'react'
import Navbar from '../../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import ProvidentTable from '../../../components/Accounts/ProvidentTable';

export default () => {

    const navigate = useNavigate()

    return (
        <div>
            <Navbar/>
            <div className='mt-3 w-full h-full p-[30px]'>
                <div className='payment_card'>
                    <div className='flex justify-between'>
                        <p className='text-[20px] text-[#35446F] font-bold'>Provident Fund</p>
                        <button className='py-1 px-4 bg-blue-500 text-white font-medium rounded-2xl' onClick={() => {
                            navigate("/TaxesAddUsers");
                        }}>+ Add Provident Fund</button>
                    </div>
                    <div className='w-full xl:overflow-x-hidden whitespace-nowrap overflow-x-scroll mt-10 pb-2'>
                        <ProvidentTable/>
                    </div>
                </div>
            </div>
        </div>
    )
}
