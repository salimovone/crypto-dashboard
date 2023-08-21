import React from 'react'

export default () => {

    const data = [
        {
            id: 1,
            firstName: "Default",
            lastName: "Defaultson",
            bg: "inherit",
        },
        {
            id: 2,
            firstName: "Primary",
            lastName: "Doe",
            bg: "#cfe2ff",
        },
        {
            id: 3,
            firstName: "Secondary",
            lastName: "Moe",
            bg: "#cbccce",
        },
        {
            id: 4,
            firstName: "Success",
            lastName: "Dooley",
            bg: "#d1e7dd",
        },
        {
            id: 5,
            firstName: "Danger",
            lastName: "Refs",
            bg: "#dfc2c4",
        },
        {
            id: 6,
            firstName: "Warning",
            lastName: "Activeson",
            bg: "#e6dbb9",
        },
        {
            id: 7,
            firstName: "Info",
            lastName: "Activeson",
            bg: "#badce3",
        },
        {
            id: 8,
            firstName: "Light",
            lastName: "Activeson",
            bg: "#f8f9fa",
        },
        {
            id: 9,
            firstName: "Dark",
            color: "white",
            lastName: "Activeson",
            bg: "#212529",
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
                                <th className='text-left pb-3 lg:pl-2'>Firstname</th>
                                <th className='text-left pb-3 lg:pl-2'>Lastname</th>
                                <th className='text-left pb-3 lg:pl-2'>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item) => (
                                    <tr className='border-y' style={{background: item.bg, color: item.color}} key={item.id}>
                                        <td className='py-2 pl-2'>{item.firstName}</td>
                                        <td className='py-2 pl-2 '>{item.lastName}</td>
                                        <td className='py-2 pl-2 text-blue-700 font-bold' style={{color: item.color}}>[email protected]</td>
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
