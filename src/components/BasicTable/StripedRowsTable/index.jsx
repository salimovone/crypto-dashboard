import React from 'react'

export default () => {
    return (
        <div>
            <div className='payment_card mt-5'>
                <div>
                    <p className='font-bold'>Striped Rows</p>
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
                            <tr className='border-y Tables_bg'>
                                <td className='py-1  pl-2'>John</td>
                                <td className='py-1 '>Doe</td>
                                <td className='py-1  text-blue-700 font-bold'>[email protected]</td>
                            </tr>

                            <tr className='border-y'>
                                <td className='py-1 pl-2'>Mary</td>
                                <td className='py-1'>Moe</td>
                                <td className='py-1 text-blue-700 font-bold'>[email protected]</td>
                            </tr>

                            <tr className='border-y Tables_bg'>
                                <td className='py-1 pl-2'>July</td>
                                <td className='py-1'>Dooley</td>
                                <td className='py-1 text-blue-700 font-bold'>[email protected]</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
