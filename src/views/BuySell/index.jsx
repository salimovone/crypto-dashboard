import { AiOutlineDownload } from "react-icons/ai";
import { TbArrowsExchange2 } from "react-icons/tb";
import React, { useState } from "react";
import './style.css'
import Table from '../../components/BuySell-Table'

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
                                    <label for="countries" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">Select Crypto (Min-value:0.001 BTC)</label>
                                    <select id="countries" class="bg-inherit border-[3px] px-1 w-full h-[40px] border-white rounded-lg">
                                        <option selected>BTC</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="countries" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">
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
                                    <label for="countries" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">Select Crypto (Min-value:0.001 BTC)</label>
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
                                    <div className="grid grid-cols-2 xl:w-[400px] h-auto gap-5 p-1 border-white border-[3px] rounded-2xl">
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

                                    <div className="grid grid-cols-2 xl:w-[400px] gap-5 p-1 border-white rounded-2xl border-[3px]">
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

                    <div>
                        <div className="pt-10">
                            <div>
                                <p className="text-[24px] text-[#35446f]">Recent Buying Cryptocurrency</p>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 md:grid-cols-1 xl:gap-0 lg:gap-5 gap-5 xl:grid-cols-5 mt-5">
                            <div>
                                <p className="text-[#35446f] font-medium">Latest actions <br /> (Showing 01 to 06 of 100)</p>
                            </div>

                            <div>
                                <input type="date" className="h-[40px] w-[85%] lg:w-auto px-8 rounded-xl border border-blue-600" />
                            </div>
                            <div>
                                <input type="date" className="h-[40px]  w-[85%] px-8 rounded-xl border border-blue-600" />
                            </div>

                            <div>
                                <select id="countries" class="border px-8 w-[85%] h-[40px] bg-inherit border-blue-600 rounded-lg">
                                    <option selected>Status</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>

                            <div className="flex gap-2">
                                <p className="pt-2">SortBy:</p>
                                <div><input type="date" className="h-[40px] w-[80%] px-10 lg:px-6 rounded-xl border border-blue-600" /></div>
                                <div className="rounded-full icons_buySell w-[40px] xl:-ml-8 text-[22px] text-blue-600 flex justify-center items-center h-[40px]  border border-blue-600">
                                    <AiOutlineDownload />
                                </div>
                            </div>
                        </div>

                        <div className="flex pt-10 gap-1">
                            <p>Show</p>
                            <div className="-mt-[2px]"><select id="countries" class="border p-1 bg-inherit border-blue-600 rounded-lg">
                                <option selected>10</option>
                                <option value="US">25</option>
                                <option value="CA">50</option>
                                <option value="FR">100</option>
                            </select></div>
                            <p>entired</p>
                        </div>

                        <div className="mt-5 w-[100%]">
                            <Table/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuySell