import React from 'react'

export default () => {

    const users = [
        {
            id: 1,
            title: "Total Input",
            btc: "1.123456789 BTC",
            bg: "rgba(255,255,255,.2)"
        },
        {
            id: 2,
            title: "Total Output",
            btc: "0.123456789 BTC",
        },
        {
            id: 3,
            title: "Fees",
            btc: "0.987456321 BTC",
            bg: "rgba(255,255,255,.2)"
        },
        {
            id: 4,
            title: "Fee per byte",
            btc: "12,142.147 sat/B"
        },
        {
            id: 5,
            title: "Fee per weight unit",
            btc: "0.123456789 BTC",
            bg: "rgba(255,255,255,.2)"
        },
        {
            id: 6,
            title: "Estimated BTC Transacted",
            btc: "0.123456789 BTC"
        },
        {
            id: 7,
            title: "Visualize",
            btc: "Show scripts & coinbase",
            bg: "rgba(255,255,255,.2)"
        },
        {
            id: 8,
            title: "Included In Blocks",
            btc: "1236458 ( 2018-02-05 14:01:53 + 4 minutes )"
        },
        {
            id: 9,
            title: "Confirmations",
            btc: "25 Confirmations",
            bg: "rgba(255,255,255,.2)"
        },
    ]

    return (
        <>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs border-b  text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-6 text-[20px] text-[#35446F]">
                                Summary
                            </th>
                            <th scope="col" class="px-20 py-6">
                                <u className='text-blue-700 text-[16px]'>View Tree Chart</u>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item) => (
                                <tr class="bg-white border-b" key={item.id} style={{backgroundColor: item.bg}}>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {item.title}
                                    </th>
                                    <td class="px-6 py-4">
                                        {item.btc}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}
