import React from 'react'
import Navbar from '../../../components/Navbar'
import BarChart from '../../../components/Charts/FlotChartComponent/BarChart'
import BarChart2 from '../../../components/Charts/FlotChartComponent/BarChart2'
import LineChart from '../../../components/Charts/FlotChartComponent/LineChart'
import LineChartPOints from '../../../components/Charts/FlotChartComponent/LineChartPOints'
import AreaChart from '../../../components/Charts/ApexChartsComponent/AreaChart'
import AreaChartPoints from '../../../components/Charts/FlotChartComponent/AreaChart'
import DonutChart from '../../../components/Charts/ChartJSComponent/DonutChart'
import PieChart from '../../../components/Charts/ChartJSComponent/PieChart'

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
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Bar Chart</div>
          <BarChart2 />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Bar Chart</div>
          <LineChart />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Bar Chart</div>
          <LineChartPOints />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Area Chart</div>
          <AreaChart />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Area Chart</div>
          <AreaChartPoints />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Donut Chart</div>
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
