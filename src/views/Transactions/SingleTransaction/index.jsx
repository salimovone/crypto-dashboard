import { BiArrowBack } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../../../components/Navbar";

export default () => {

    const data = [
        {
            id: 1,
            title: "No. Transactions",
            count: '54',
            bg: "rgba(255,255,255,.2)"
        },
        {
            id: 2,
            title: "Total Received",
            count: '95.123456789 BTC',
            bg: "rgba(255,255,255,.4)"
        },
        {
            id: 3,
            title: "Total Balance",
            count: '0 BTC',
            bg: "rgba(255,255,255,.2)"
        },
    ]

    const cards = [
        {
            id: 1,
            date: "2017-12-03 13:57:30",
            title: "Transaction Key",
            text: "2dx g254 548 4113 2457 d21564 d1321d35 d5zxd54 d545d v4v34d 54v5 d4v5d 4x54d",
            icon: <BiArrowBack />,
            text1: "db12458rtfd1254",
            text2: "cde124587rtyg15468",
            button1: "12 Confirmation",
            button2: "1.124589756 BTC",
            text3: "0.35473875 BTC"
        },
        {
            id: 2,
            date: "2017-12-03 13:57:30",
            title: "Transaction Key",
            text: "2dx g254 548 4113 2457 d21564 d1321d35 d5zxd54 d545d v4v34d 54v5 d4v5d 4x54d",
            icon: <BiArrowBack />,
            text1: "db12458rtfd1254",
            text2: "cde124587rtyg15468",
            button1: "12 Confirmation",
            button2: "1.124589756 BTC",
            text3: "0.35473875 BTC"
        },
        {
            id: 3,
            date: "2017-12-03 13:57:30",
            title: "Transaction Key",
            text: "2dx g254 548 4113 2457 d21564 d1321d35 d5zxd54 d545d v4v34d 54v5 d4v5d 4x54d",
            icon: <BiArrowBack />,
            text1: "db12458rtfd1254",
            text2: "cde124587rtyg15468",
            button1: "12 Confirmation",
            button2: "1.124589756 BTC",
            text3: "0.35473875 BTC"
        },
        {
            id: 4,
            date: "2017-12-03 13:57:30",
            title: "Transaction Key",
            text: "2dx g254 548 4113 2457 d21564 d1321d35 d5zxd54 d545d v4v34d 54v5 d4v5d 4x54d",
            icon: <BiArrowBack />,
            text1: "db12458rtfd1254",
            text2: "cde124587rtyg15468",
            button1: "12 Confirmation",
            button2: "1.124589756 BTC",
            text3: "0.35473875 BTC"
        },
        {
            id: 5,
            date: "2017-12-03 13:57:30",
            title: "Transaction Key",
            text: "2dx g254 548 4113 2457 d21564 d1321d35 d5zxd54 d545d v4v34d 54v5 d4v5d 4x54d",
            icon: <BiArrowBack />,
            text1: "db12458rtfd1254",
            text2: "cde124587rtyg15468",
            button1: "12 Confirmation",
            button2: "1.124589756 BTC",
            text3: "0.35473875 BTC"
        },
        {
            id: 6,
            date: "2017-12-03 13:57:30",
            title: "Transaction Key",
            text: "2dx g254 548 4113 2457 d21564 d1321d35 d5zxd54 d545d v4v34d 54v5 d4v5d 4x54d",
            icon: <BiArrowBack />,
            text1: "db12458rtfd1254",
            text2: "cde124587rtyg15468",
            button1: "12 Confirmation",
            button2: "1.124589756 BTC",
            text3: "0.35473875 BTC"
        },
    ]

    return (
        <>
            <Navbar />
            <div className='container_single'>
                <div>
                    <Link to={"/viewTransaction"} className="flex gap-1 text-red-500 font-bold"><BiLeftArrowAlt className="mt-1" /> Back</Link>
                </div>

                <div className="mt-5 grid md:grid-cols-2 xl:grid-cols-10 gap-5">
                    <div className="p-5 w-[100%] ssss grid xl:col-span-6">
                        <div className="pb-5 border-b">
                            <p className="text-[20px] text-[#35446F] font-semibold">Summary</p>
                        </div>

                        <div className="mt-5">
                            <p>Address</p>
                            <p className="text-blue-500">2dxg 25 454 8 4113 2457d2 1564 d1321 d35d5zxd5  4d545d v4v34 d54v5 d4v5 d4 x54d</p>
                        </div>

                        <div className="grid md:grid-cols-2 mt-5">
                            <div>
                                <p>Hash 160</p>
                                <p className="text-blue-500">3df2 dfd s24 4784 54d4 45d 5sf4 54df 545d</p>
                            </div>

                            <div>
                                <p>Confirmations</p>
                                <p className="text-blue-500">Related Tags - Unspent Outputs</p>
                            </div>
                        </div>

                    </div>

                    <div className="grid xl:col-span-4 overflow-x-scroll whitespace-nowrap xl:overflow-x-hidden w-[100%] overflow-hidden ssss">
                        <table class="text-sm text-gray-500">
                            <thead class="text-xs border-b  text-gray-700 uppercase">
                                <tr>
                                    <th scope="col" class="px-6 py-6 font-medium text-[18px] text-[#35446F]">
                                        Summary
                                    </th>
                                    <th scope="col" class="px-20 py-6">
                                        <u className='text-blue-700 text-[15px]'>View Tree Chart</u>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) => (
                                        <tr class="border-b" key={item.id} style={{ backgroundColor: item.bg }}>
                                            <td scope="row" class="px-6 py-4 font-medium text-[#35446F] whitespace-nowrap">
                                                {item.title}
                                            </td>
                                            <td class="px-6 xl:ml-11 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                {item.count}
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <div className="mt-5">
                        <p className="text-[22px] font-bold text-[#35446F]">Recent transactions</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10">
                            {
                                cards.map((elem) => (
                                    <div key={elem.id} className="container2 w-full">
                                        <div>
                                            <button className="p-2 text-white text-[15px] font-medium bg-red-500 rounded-md">{elem.date}</button>
                                            <div className="mt-3">
                                                <p className="text-[#35446F] text-[16px]">{elem.title}</p>
                                                <p className="mt-1 text-sm">{elem.text}</p>
                                            </div>

                                            <div className="e1 flex bg-[rgba(227,233,255,.4)] justify-center py-1 gap-1 md:gap-5 mt-3 text-blue-700 font-semibold">
                                                <p>{elem.text1}</p>
                                                <p className="mt-1 text-black">{elem.icon}</p>
                                                <p>{elem.text2}</p>
                                            </div>

                                            <div className="grid xl:grid-cols-3 gap-5 md:grid-cols-2 mt-5">
                                                <button className="p-2 bg-[#00b2ff] rounded-lg hover:bg-[#0dbf0a] text-white">{elem.button1}</button>
                                                <button className="p-2 bg-[#0dbf0a] rounded-lg hover:bg-[#00b2ff] text-white">{elem.button2}</button>
                                                <button>{elem.text3}</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
