import React from 'react'
import Navbar from '../../../components/Navbar'
import StripedRowsTable from '../../../components/BasicTable/StripedRowsTable'
import BasicTable from '../../../components/BasicTable/basicTable'
import BorderedTable from '../../../components/BasicTable/BorderedTable'
import HoverTable from '../../../components/BasicTable/HoverRowsTable'
import ContextualClassesTable from '../../../components/BasicTable/ContextualClassesTable'
import ResponsiveTables from '../../../components/BasicTable/ResponsiveTables'

export default () => {
    return (
        <div>
            <Navbar />
            <div className='p-[30px]'>
                <div>
                    <div>
                        <p className='text-[23px] font-bold text-[#35446F]'>Basic Tables</p>
                    </div>

                    <div className='grid lg:grid-cols-2 gap-5'>
                        <div className='w-full overflow-x-scroll whitespace-nowrap xl:overflow-x-hidden'>
                            <BasicTable/>
                        </div>

                        <div className='w-full overflow-x-scroll whitespace-nowrap xl:overflow-x-hidden'>
                            <StripedRowsTable />
                        </div>

                        <div className='w-full overflow-x-scroll whitespace-nowrap xl:overflow-x-hidden'>
                            <BorderedTable/>
                        </div>

                        <div className='w-full overflow-x-scroll whitespace-nowrap xl:overflow-x-hidden'>
                            <HoverTable/>
                        </div>

                        <div className='w-full overflow-x-scroll whitespace-nowrap xl:overflow-x-hidden' >
                            <ContextualClassesTable/>
                        </div>

                        <div className='w-full overflow-x-scroll whitespace-nowrap xl:overflow-x-hidden'>
                            <ResponsiveTables/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
