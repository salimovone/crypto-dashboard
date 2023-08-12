import { AiOutlineCheckCircle } from "react-icons/ai"; 
import { AiOutlineArrowRight } from "react-icons/ai";
import React from 'react'
import TransactionTable from "../../../components/TransactionTable";

function Search() {

    return (
        <>
            <div className='container_search mt-16'>
                <div>
                    <p className='text-[22px] font-semibold text-[#35446F]'>Search for: Transactions</p>
                </div>

                <div className='grid xl:grid-cols-10 lg:grid-cols-2 gap-5 mt-10'>
                    <div className='grid xl:col-span-4 transaction_card  w-[100%] p-[25px]'>
                        <div>
                            <p className="flex font-semibold text-[18px]">Transactions Id</p>
                            <div className="e1 flex gap-1 md:gap-5 mt-3 text-blue-700 font-semibold">
                                <p>db12458rtfd1254</p>
                                <p className="mt-1 text-black"><AiOutlineArrowRight /></p>
                                <p>cde124587rtyg15468</p>
                            </div>

                            <div className="mt-5">
                                <button className="w-full text-white font-semibold text-[18px] hover:bg-[#fe3f51] py-3 bg-[#00b2ff] rounded-lg">0.35473875 BTC</button>
                                <button className="w-full mt-5 rounded-lg font-semibold text-[18px] text-white bg-[#fe3f51] hover:bg-[#00b2ff] py-3">0.35473875 BTC</button>
                            </div>
                            
                            <div className="text-green-500 font-semibold text-[18px] justify-end mt-5 flex gap-1">
                                <p className="mt-1"><AiOutlineCheckCircle /></p>
                                <p>45 Confirmation</p>
                            </div>
                        </div>
                    </div>

                    <div className='grid transaction_card xl:col-span-6  w-[100%] p-[25px]'>
                        <div>
                            <p className="flex text-[21px] xl:-mt-3 pb-3 text-[#35446F] font-bold">Deteils</p>
                        </div>

                        <div className="flex flex-wrap gap-10 xl:pr-14 xl:ml-10 mt-3">
                            <div>
                                <p>Size</p>
                                <p>125 (bytes)</p>
                            </div>

                            <div>
                                <p>Lock Time</p>
                                <p>Block: 123456</p>
                            </div>

                            <div>
                                <p>Confirmations</p>
                                <p>25 Confirmations</p>
                            </div>

                            <div>
                                <p>Received Time</p>
                                <p>2019-02-05 13:57:30</p>
                            </div>

                            <div className="text-start">
                                <p>Included In Blocks</p>
                                <p>1236458 ( 2018-02-05 14:01:53 + 4 minutes )</p>
                            </div>

                            <div>
                                <p>Weight</p>
                                <p>1235</p>
                            </div>



                            <div>
                                <p>Visualize</p>
                                <u className="text-[#00b2ff]">View Tree Chart</u>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid xl:grid-cols-10 gap-5 mt-10'>
                    <div className='grid xl:col-span-4'>
                    </div>

                    <div className='grid xl:col-span-6'>
                        <TransactionTable/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search