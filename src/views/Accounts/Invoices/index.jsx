import React from 'react'
import Navbar from '../../../components/Navbar'
import InvoiceTable from '../../../components/Accounts/InvoicesTable'

export default () => {
    return (
        <div>
            <Navbar />

            <div className='p-[30px]'>
                <InvoiceTable/>
            </div>
        </div>
    )
}
