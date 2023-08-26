import React from 'react'
import Navbar from '../../../components/Navbar'
import BarChart from '../../../components/Charts/C3ChartComponent/BarChart'
import BarChart2 from '../../../components/Charts/C3ChartComponent/BarChart2'
import BarChart3 from '../../../components/Charts/C3ChartComponent/BarChart3'
import BarChart4 from '../../../components/Charts/C3ChartComponent/BarChart4'
import LineChart from '../../../components/Charts/ApexChartsComponent/AreaChart'
import PieChart from '../../../components/Charts/MorrisChartComponent/DonutGraphChart'
import DonutChart from '../../../components/Charts/ChartJSComponent/DonutChart'
import LineChart2 from '../../../components/Charts/C3ChartComponent/LineChart'

export default () => {
  return (
    <div>
      <Navbar />

      <div className='mt-5 px-5 grid grid-cols-1 md:grid-cols-2 gap-5'>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Bar Chart</div>
          <BarChart />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Multiple Bar Chart</div>
          <BarChart2 />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Horizontal Bar Chart</div>
          <BarChart3 />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Line Chart</div>
          <BarChart4 />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Line Chart</div>
          <LineChart2 />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Line Chart</div>
          <LineChart />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Pie Chart</div>
          <PieChart />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Pie Chart</div>
          <DonutChart />
        </div>

      </div>
    </div>
  )
}
