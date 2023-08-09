import React from "react";
import './style.css'
import TableTop from '../../../components/Table-top'
import Table from '../../../components/BuySell-Table'

function View() {
    return (
        <>
            <div className="container_viewTransaction">
                <div>
                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                        <div className="transaction_card text-center flex justify-center">
                            <div className="text-center">
                                <div className="flex justify-center">
                                    <p className="text-[28px] w-[40%] text-blue-600 font-medium border-b-2 border-blue-600">5648</p>
                                </div>
                                <p className="mt-1">Transactions in last 24h</p>
                            </div>
                        </div>

                        <div className="transaction_card text-center flex justify-center">
                            <div className="text-center">
                                <div className="flex justify-center">
                                    <p className="text-[28px] w-[40%] text-red-500 font-medium border-b-2 border-red-500">5648</p>
                                </div>
                                <p className="mt-1">Transactions per hour</p>
                            </div>
                        </div>

                        <div className="transaction_card text-center flex justify-center">
                            <div className="text-center">
                                <div className="flex justify-center">
                                    <p className="text-[28px] w-[40%] text-green-500 font-medium border-b-2 border-green-500">5648</p>
                                </div>
                                <p className="mt-1">Largest Transactions</p>
                            </div>
                        </div>

                        <div className="transaction_card text-center flex justify-center">
                            <div className="text-center">
                                <div className="flex justify-center">
                                    <p className="text-[28px] w-[60%] text-[#35446F] font-medium border-b-2 border-[#35446F]">5648</p>
                                </div>
                                <p className="mt-1">Total Received</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <TableTop/>
                </div>

                <div>
                    <Table/>
                </div>
            </div>
        </>
    )
}

export default View