import React from 'react'
import Navbar from '../../../components/Navbar'
import img1 from '../../../assets/img/logo.png'

export default () => {
    return (
        <div>
            <Navbar />

            <div className='w-full h-full p-[30px]'>
                <div className='flex justify-between'>
                    <p className='text-[24px] font-semibold text-[#35446F]'>Payslip</p>
                    <div>
                        <button className='py-1 px-2 bg-white border rounded-l-md border-black'>CSV</button>
                        <button className='py-1 px-2 bg-white border border-black'>PDF</button>
                        <button className='py-1 px-2 bg-white border border-black rounded-r-md'>Print</button>
                    </div>
                </div>

                <div className='payment_card mt-10'>
                    <div>
                        <u className='text-[20px] flex justify-center'>PAYSLIP FOR THE MONTH OF JULY 2018</u>
                    </div>

                    <div className='mt-5 md:flex justify-between'>
                        <div className='text-base'>
                            <img src={img1} alt="" />
                            <p className='mt-5'>Crypto</p>
                            <p>Example Address,</p>
                            <p>Example Address</p>
                        </div>

                        <div className='flex justify-end md:mt-0 mt-3'>
                            <div>
                                <p className='text-[26px]'>PAYSLIP #49029</p>
                                <p>Salary Month: July, 2018</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-7'>
                        <p className='font-medium'>Albina Simonis</p>
                        <p>Staff</p>
                        <p>Employee ID: NS-0001</p>
                        <p>Joining Date: 7 May 2015</p>
                    </div>

                    <div className='mt-10 grid gap-10 md:grid-cols-2'>
                        <div>
                            <p className='text-[20px] font-semibold'>Earnings</p>

                            <table className='w-full'>
                                <div className='border mt-2 border-t-black'>
                                    <tr className='h-[40px] pl-5 w-full flex items-center border'>Basic Salary $6500</tr>
                                    <tr className='h-[40px] pl-5 w-full flex items-center border'>House Rent Allowance (H.R.A.) $55</tr>
                                    <tr className='h-[40px] pl-5 w-full flex items-center border'>Conveyance $55</tr>
                                    <tr className='h-[40px] pl-5 w-full flex items-center border'>Other Allowance $55</tr>
                                    <tr className='h-[40px] pl-5 w-full flex items-center border'>Total Earnings $55</tr>
                                </div>
                            </table>
                        </div>

                        <div>
                            <p className='text-[20px] font-semibold'>Deductions</p>

                            <table className='w-full'>
                                <div className='border-t-black border mt-2'>
                                    <tr className='h-[40px] pl-5 w-full flex items-center border'>Tax Deducted at Source (T.D.S.) $0</tr>
                                    <tr className='h-[40px] pl-5 w-full flex items-center border'>Provident Fund $0</tr>
                                    <tr className='h-[40px] pl-5 w-full flex items-center border'>ESI $0</tr>
                                    <tr className='h-[40px] pl-5 w-full flex items-center border'>Loan $300</tr>
                                    <tr className='h-[40px] pl-5 w-full flex items-center border'>Total Deductions $59698</tr>
                                </div>
                            </table>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <p className='font-bold'>Net Salary: $59698 <span className='font-normal'>(Fifty nine thousand six hundred and ninety eight only.)</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
