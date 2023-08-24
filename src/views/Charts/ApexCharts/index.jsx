import React from 'react'
import ApexSimpleCharts from '../../../components/Charts/ApexChartsComponent/ApexSimpleCharts'
import Navbar from '../../../components/Navbar'
import AreaChart from '../../../components/Charts/ApexChartsComponent/AreaChart'
import ColumnCharts from '../../../components/Charts/ApexChartsComponent/ColumnCharts'
import ColumnStackedCharts from '../../../components/Charts/ApexChartsComponent/ColumnStackedChart'
import BarChart from '../../../components/Charts/ApexChartsComponent/BarCharts'
import MixedChart from '../../../components/Charts/ApexChartsComponent/MixedCharts'
import DonutChart from '../../../components/Charts/ApexChartsComponent/DonutChart'
import RadialChart from '../../../components/Charts/ApexChartsComponent/RadialCharts'

export default () => {
  return (
    <div>
      <Navbar />
      <div className='mt-5 px-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Apex Simple</div>
          <ApexSimpleCharts />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Area Chart</div>
          <AreaChart />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Column Chart</div>
          <ColumnCharts />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Column Stacked Chart</div>
          <ColumnStackedCharts />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Bar Chart</div>
          <BarChart />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Mixed Chart</div>
          <MixedChart />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Donut Chart</div>
          <DonutChart />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Radial Chart</div>
          <RadialChart />
        </div>
      </div>

    </div>
  )
}
