import React from 'react'

export default () => {

    const data = [
        {
            id: 1,
            firstName: "Anna",
            lastName: "Pitt",
            age: 35,
            city: "New York",
            country: "USA"
        },
        {
            id: 2,
            firstName: "Anna",
            lastName: "Pitt",
            age: 35,
            city: "New York",
            country: "USA"
        },
        {
            id: 3,
            firstName: "Anna",
            lastName: "Pitt",
            age: 35,
            city: "New York",
            country: "USA"
        },
        {
            id: 4,
            firstName: "Anna",
            lastName: "Pitt",
            age: 35,
            city: "New York",
            country: "USA"
        },
        {
            id: 5,
            firstName: "Anna",
            lastName: "Pitt",
            age: 35,
            city: "New York",
            country: "USA"
        },
        {
            id: 6,
            firstName: "Anna",
            lastName: "Pitt",
            age: 35,
            city: "New York",
            country: "USA"
        },
        {
            id: 7,
            firstName: "Anna",
            lastName: "Pitt",
            age: 35,
            city: "New York",
            country: "USA"
        },
        {
            id: 8,
            firstName: "Anna",
            lastName: "Pitt",
            age: 35,
            city: "New York",
            country: "USA"
        },
        {
            id: 9,
            firstName: "Anna",
            lastName: "Pitt",
            age: 35,
            city: "New York",
            country: "USA"
        },

    ]

    return (
        <div>
            <div className='payment_card mt-5'>
                <div>
                    <p className='font-bold'>Contextual Classes</p>
                </div>

                <div className='overflow-x-scroll whitespace-nowrap mt-5 xl:overflow-x-hidden'>
                    <table className='w-full pl-2'>
                        <thead>
                            <tr>
                                <th className='text-left pb-3 lg:pl-2'>#</th>
                                <th className='text-left pb-3 lg:pl-2'>Firstname</th>
                                <th className='text-left pb-3 lg:pl-2'>Lastname</th>
                                <th className='text-left pb-3 lg:pl-2'>Age</th>
                                <th className='text-left pb-3 lg:pl-2'>City</th>
                                <th className='text-left pb-3 lg:pl-2'>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item) => (
                                    <tr className='border-y' key={item.id}>
                                        <td className='py-2 pl-2'>1</td>
                                        <td className='py-2 pl-2'>{item.firstName}</td>
                                        <td className='py-2 pl-2'>{item.lastName}</td>
                                        <td className='py-2 pl-2'>{item.age}</td>
                                        <td className='py-2 pl-2'>{item.city}</td>
                                        <td className='py-2 pl-2'>{item.country}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
