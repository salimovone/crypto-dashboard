import { TbArrowsExchange2 } from "react-icons/tb";
import React, { useState } from "react";
import './style.css'
import Table from '../../components/BuySell-Table'
import Tables from '../../components/Table-top'

function BuySell() {
    const [bgbottom, setBgbottom] = useState('actives')

    return (
        <>
            <div className="w-full xl:w-auto flex justify-center pt-16 overflow-hidden">
                <div className="container_buySell">
                    <div>
                        <div>
                            <div className="flex gap-5">
                                <button onClick={() => setBgbottom('actives')} className={`${bgbottom === 'actives' ? 'border-b-[3px] border-blue-500 w-24 text-center' : 'w-24 text-center'}`}>Buy Crypto</button>
                                <button onClick={() => setBgbottom('actives2')} className={`${bgbottom === 'actives2' ? 'border-b-[3px] border-blue-500 w-24 text-center' : 'w-24 text-center'}`}>Sell Crypto</button>
                            </div>

                            <div className="text-gray-500 mt-3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                        <div className="select_buySell">
                            <div className="grid lg:grid-cols-3 gap-10 pt-5">
                                <div>
                                    <label for="countries" class="block mb-2 text-sm  font-medium text-gray-900">Select Crypto (Min-value:0.001 BTC)</label>
                                    <select id="countries" class="bg-inherit border-[3px] px-1 w-full h-[40px] border-white rounded-lg">
                                        <option selected>BTC</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="countries" class="block mb-2 text-sm  font-medium text-gray-900">
                                        BTC Choose payment method
                                    </label>
                                    <select id="countries" class="bg-inherit border-[3px] px-1 w-full h-[40px] border-white rounded-lg">
                                        <option selected>BTC</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="countries" class="block mb-2 text-sm  font-medium text-gray-900">Select Crypto (Min-value:0.001 BTC)</label>
                                    <select id="countries" class="bg-inherit border-[3px] px-1 w-full h-[40px] border-white rounded-lg">
                                        <option selected>Accaount Password</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <div className="grid lg:grid-cols-3 lg:gap-0 gap-5 pt-10">
                                    <div className="grid grid-cols-2 xl:w-full h-auto gap-5 p-1 border-white border-[3px] rounded-2xl">
                                        <div>
                                            <select id="countries" class="border-[3px] px-1 w-full h-[40px] bg-white border-white rounded-lg">
                                                <option selected>BTC</option>
                                                <option value="US">United States</option>
                                                <option value="CA">Canada</option>
                                                <option value="FR">France</option>
                                                <option value="DE">Germany</option>
                                            </select>
                                        </div>

                                        <div>
                                            <input type="text" className="h-[40px] bg-inherit" />
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center ">
                                        <div className={`w-[30px] h-[30px] rounded-full text-white bg-green-500 hover:bg-red-500 transition-all`}>
                                            <div className="w-full h-full hover:bg-blue-700 rounded-full flex justify-center items-center">
                                                <TbArrowsExchange2 className="text-[20px]" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 xl:w-full gap-5 p-1 border-white rounded-2xl border-[3px]">
                                        <div>
                                            <select id="countries" class="border-[3px] px-2 w-full h-[40px] bg-white border-white rounded-lg">
                                                <option selected>BTC</option>
                                                <option value="US">United States</option>
                                                <option value="CA">Canada</option>
                                                <option value="FR">France</option>
                                                <option value="DE">Germany</option>
                                            </select>
                                        </div>

                                        <div>
                                            <input type="text" className="h-[40px] bg-inherit" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="pt-5">
                                    <button className="w-[200px] text-[20px] rounded-xl hover:bg-red-500 transition-all h-[50px] bg-blue-600 text-white">Buy Crupto</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Tables />

                    <div className="mt-5 w-[100%]">
                        <Table />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuySell