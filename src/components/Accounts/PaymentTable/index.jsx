import React from 'react'

export default () => {

    const data = [
        {
            id: 1,
            invoice: '#INV-0001',
            patiend: "Charles Ortega",
            payment: "Paypal",
            paid: "8 Aug 2017",
            amount: "$500",
            bg: "rgba(255,255,255,.2)"
        },
        {
            id: 2,
            invoice: '#INV-0002',
            patiend: "Charles Ortega",
            payment: "Paypal",
            paid: "8 Aug 2017",
            amount: "$500",
            bg: "rgba(255,255,255,.4)",
            shadow: "0 0 3px #e5e5e5"
        },
        {
            id: 3,
            invoice: '#INV-0003',
            patiend: "Charles Ortega",
            payment: "Paypal",
            paid: "8 Aug 2017",
            amount: "$500",
            bg: "rgba(255,255,255,.2)"
        },
    ]

    return (
        <div>
            <div className='overflow-x-scroll xl:w-full w-[1100px] relative'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <td className='py-3 font-semibold px-5'>Invoice ID</td>
                            <th className='py-3 px-5'>Patient</th>
                            <th className='py-3 px-5'>Payment Type</th>
                            <th className='py-3 px-5'>Paid Date</th>
                            <th className='py-3 px-5'>Paid Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                data.map((item) => (
                                    <tr key={item.id} className={`border-y text-center`} style={{background: item.bg, boxShadow: item.shadow}}>
                                        <td className='py-3 text-left px-5 text-blue-700 font-bold'>{item.invoice}</td>
                                        <td className='py-3 px-5'>{item.patiend}</td>
                                        <td className='py-3 px-5'>{item.payment}</td>
                                        <td className='py-3 px-5'>{item.paid}</td>
                                        <td className='py-3 px-5'>{item.amount}</td>
                                    </tr>
                                ))
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
