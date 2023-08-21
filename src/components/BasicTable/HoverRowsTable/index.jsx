import React from 'react'

export default () => {
    return (
        <div>
            <div className='payment_card mt-5'>
                <div>
                    <p className='font-bold'>Hover Rows</p>
                </div>

                <div className='overflow-x-scroll whitespace-nowrap mt-5 xl:overflow-x-hidden'>
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <th className='text-left pb-3 lg:pl-0 pl-1'>Firstname</th>
                                <th className='text-left pb-3 lg:pl-0 pl-1'>Lastname</th>
                                <th className='text-left pb-3 lg:pl-0 pl-1'>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-y hover:bg-gray-300'>
                                <td className='py-2 pl-1'>John</td>
                                <td className='py-2'>Doe</td>
                                <td className='py-2 text-blue-700 font-bold'>[email protected]</td>
                            </tr>

                            <tr className='border-y hover:bg-gray-300'>
                                <td className='py-1 pl-1'>Mary</td>
                                <td className='py-1'>Moe</td>
                                <td className='py-2 text-blue-700 font-bold'>[email protected]</td>
                            </tr>

                            <tr className='border-y hover:bg-gray-300'>
                                <td className='py-2 pl-1'>July</td>
                                <td className='py-2'>Dooley</td>
                                <td className='py-2 text-blue-700 font-bold'>[email protected]</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
