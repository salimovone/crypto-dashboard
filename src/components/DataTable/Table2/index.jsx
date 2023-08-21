import React from 'react'

export default () => {

    const data = [
        {
            id: 1,
            name: "Charde Marshall",
            position: "Accountant",
            office: "Tokyo",
            age: 33,
            date: "2008/11/28",
            salary: "$162,700"
        },
        {
            id: 2,
            name: "Angelica Ramos",
            position: "Javascript Developer",
            office: "London",
            age: 19,
            date: "2009/10/09",
            salary: "$1,300,300"
        },
        {
            id: 3,
            name: "Dai Rios",
            position: "Personnel Lead",
            office: "New York",
            age: 23,
            date: "2008/01/12",
            salary: "$10,000"
        },
        {
            id: 9,
            name: "Hellos world",
            position: "Senior Javascript Developer",
            office: "Edinburgh",
            age: 22,
            date: "2007/12/03",
            salary: "$107,060"
        },
        {
            id: 4,
            name: "Neymar Greer",
            position: "Software Engineer",
            office: "London",
            age: 41,
            date: "2012/10/13",
            salary: "$132,000"
        },
        {
            id: 5,
            name: "Brenden Wagner",
            position: "Integration Specialist",
            office: "Tokyo",
            age: 28,
            date: "2011/06/07",
            salary: "$206,000"
        },
        {
            id: 6,
            name: "Karim Benzema",
            position: "Software Engineer",
            office: "Al Ittihad",
            age: 52,
            date: "2011/05/01",
            salary: "$876,098"
        },
        {
            id: 7,
            name: "N'golo Kante",
            position: "Sales Assistant",
            office: "Al Itthad",
            age: 28,
            date: "2011/05/01",
            salary: "$80,000"
        },
        {
            id: 8,
            name: "Gavin Joyce",
            position: "Developer",
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
