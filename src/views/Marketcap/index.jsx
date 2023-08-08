import './style.css'
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import img1 from '../../assets/img/icon/watch-icon-08.svg'
import img2 from '../../assets/img/icon/watch-icon-03.svg'
import img3 from '../../assets/img/icon/watch-icon-02.svg'
import img4 from '../../assets/img/icon/watch-icon-01.svg'
import img5 from '../../assets/img/icon/watch-icon-07.svg'
import { AiOutlineDownload } from "react-icons/ai";
import Table from '../../components/BuySell-Table'

function Marketcap() {

    const [alls, setAlls] = useState(5)

    const data = [
        { name: 'JAN', series1: 45 },
        { name: 'Feb', series1: 60 },
        { name: 'Mar', series1: 75 },
        { name: 'Apr', series1: 51 },
        { name: 'May', series1: 42 },
        { name: 'Jun', series1: 42 },
        { name: 'Jul', series1: 30 },
    ];

    return (
        <>
            <div className="w-full flex justify-center items-center mt-16">
                <div className="container_market">
                    <div>
                        <div className='border p-5'>
                            <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 xl:ml-9 xl:gap-32 lg:gap-10'>
                                <div>
                                    <p className='text-[20px] font-medium text-[#35446F]'>Market Cap</p>
                                </div>

                                <div className='flex gap-2'>
                                    <button onClick={() => setAlls(5)} className={`w-[45px] h-[45px] bg-[#e3e9ff] flex justify-center items-center rounded-md ${alls === 5 ? "bg-[blue]" : ""}`}>
                                        <img src={img1} alt="" className={`w-[20px] h-[20px] ${alls === 5 ? "img1" : ""}`} />
                                    </button>
                                    <button onClick={() => setAlls(10)} className={`w-[45px] h-[45px] bg-[#e3e9ff] flex justify-center items-center rounded-md ${alls === 10 ? "bg-[blue]" : ""}`}>
                                        <img src={img2} alt="" className={`w-[20px] h-[20px] ${alls === 10 ? "img1" : ""}`} />
                                    </button>
                                    <button onClick={() => setAlls(15)} className={`w-[45px] h-[45px] bg-[#e3e9ff] flex justify-center items-center rounded-md ${alls === 15 ? "bg-[blue]" : ""}`}>
                                        <img src={img3} alt="" className={`w-[20px] h-[20px] ${alls === 15 ? "img1" : ""}`} />
                                    </button>
                                    <button onClick={() => setAlls(20)} className={`w-[45px] h-[45px] bg-[#e3e9ff] flex justify-center items-center rounded-md ${alls === 20 ? "bg-[blue]" : ""}`}>
                                        <img src={img4} alt="" className={`w-[20px] h-[20px] ${alls === 20 ? "img1" : ""}`} />
                                    </button>
                                    <button onClick={() => setAlls(25)} className={`w-[45px] h-[45px] bg-[#e3e9ff] flex justify-center items-center rounded-md ${alls === 25 ? "bg-[blue]" : ""}`}>
                                        <img src={img5} alt="" className={`w-[20px] h-[20px] ${alls === 25 ? "img1" : ""}`} />
                                    </button>
                                </div>

                                <div>
                                    <div className="flex gap-2">
                                        <div><input type="text" placeholder='8-2-2023 - 8-8-2023' className="h-[40px] pl-5 w-[90%] md:w-[180px] rounded-xl border-2 bg-inherit border-white" /></div>
                                        <div className="rounded-lg w-[40px] text-[22px] text-blue-600 flex justify-center items-center h-[40px]  border-2 border-white">
                                            <AiOutlineDownload />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ResponsiveContainer width={"100%"} height={370} className="xl:-ml-5 mt-10">
                                <LineChart
                                    width={600}
                                    height={400}
                                    data={data}
                                    margin={{
                                        top: 0,
                                        right: 20,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="5" />
                                    <XAxis dataKey="name" className='text-[13px]' />
                                    <YAxis />
                                    <Tooltip />
                                    <Line connectNulls type="monotone" dataKey="series1" strokeWidth={5} stroke="#4266E6" fill="#8884d8" />
                                </LineChart>
                            </ResponsiveContainer>
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
                    </div>

                    <div className="mt-5 w-[100%]">
                        <Table/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Marketcap