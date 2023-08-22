import React from 'react'

export default () => {
    return (
        <div>
            <div className='payment_card mt-5'>
                <div>
                    <p className='font-bold'>Bordered Table</p>
                </div>

                <div className='overflow-x-scroll whitespace-nowrap mt-5 xl:overflow-x-hidden'>
                    <table className='w-full border border-t-black pl-2'>
                        <thead>
                            <tr>
                                <th className='text-left pb-3 lg:pl-2 border-t-black border'>Firstname</th>
                                <th className='text-left pb-3 lg:pl-2 border-t-black border'>Lastname</th>
                                <th className='text-left pb-3 lg:pl-2 border-t-black border'>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-y'>
                                <td className='py-2 pl-2 border'>John</td>
                                <td className='py-2 pl-2  border'>Doe</td>
                                <td className='py-2 pl-2 text-blue-700 font-bold'>[email protected]</td>
                            </tr>

                            <tr className='border-y'>
                                <td className='py-2 pl-2 border'>Mary</td>
                                <td className='py-2 pl-2  border'>Moe</td>
                                <td className='py-2 pl-2  border text-blue-700 font-bold'>[email protected]</td>
                            </tr>

                            <tr className='border-y'>
                                <td className='py-2  pl-2 border'>July</td>
                                <td className='py-2 pl-2  border'>Dooley</td>
                                <td className='py-2 pl-2  border text-blue-700 font-bold'>[email protected]</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
