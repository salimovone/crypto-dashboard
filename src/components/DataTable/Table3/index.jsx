import React from 'react'

export default () => {

    const data = [
        {
            id: 1,
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: 33,
            date: "2008/11/28",
            salary: "$162,700"
        },
        {
            id: 2,
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: 47,
            date: "2009/10/09",
            salary: "$1,200,000"
        },
        {
            id: 3,
            name: "Ashton Cox",
            position: "Junior Technical Author",
            office: "San Francisco",
            age: 66,
            date: "2009/01/12",
            salary: "$86,000"
        },
        {
            id: 6,
            name: "Bruno Nash",
            position: "Software Engineer",
            office: "New York",
            age: 31,
            date: "2011/05/01",
            salary: "$145,000"
        },
        {
            id: 7,
            name: "Caesar Vance",
            position: "Sales Assistant",
            office: "New York",
            age: 46,
            date: "2011/05/01",
            salary: "$145,000"
        },
        {
            id: 8,
            name: "Cedric Kelly",
            position: "Senior Javascript Developer",
            office: "Edinburgh",
            age: 22,
            date: "	2011/12/06",
            salary: "$433,060"
        },
    ]

    return (
        <div>
            <div>
                <div>
                    <p className='font-bold'>Default Datatable</p>
                    <p className='mt-5'>This is the most basic example of the datatables with zero configuration. Use the <span className='text-red-500'>.datatable</span> class to initialize datatables.</p>
                </div>

                <div className='mt-5 relative overflow-x-scroll  xl:overflow-x-hidden'>
                    <table className="w-[1100px] xl:w-[1220px] xl:overflow-x-hidden overflow-x-scroll">
                        <thead>
                            <tr>
                                <th className='text-left pb-2 pl-2'>Name</th>
                                <th className='text-left pb-2'>Position</th>
                                <th className='text-left pb-2'>Office</th>
                                <th className='text-left pb-2 pr-5'>Age</th>
                                <th className='text-left pb-2'>Start Date</th>
                                <th className='text-left pb-2'>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className='py-2 border-y pl-2'>{item.name}</td>
                                    <td className='py-2 border-y'>{item.position}</td>
                                    <td className='py-2 border-y'>{item.office}</td>
                                    <td className='py-2 border-y'>{item.age}</td>
                                    <td className='py-2 border-y'>{item.date}</td>
                                    <td className='py-2 border-y'>{item.salary}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
