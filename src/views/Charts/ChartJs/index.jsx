import React from 'react'
import Navbar from '../../../components/Navbar'
import BarChart from '../../../components/Charts/ChartJSComponent/BarChart'
import Transparency from '../../../components/Charts/ChartJSComponent/Transparency'
import GradientBarChart from '../../../components/Charts/ChartJSComponent/GradientBarChart'
import HorizontalBarChart from '../../../components/Charts/ChartJSComponent/HorizontalBarChart'
import HorizontalBarChartStyle2 from '../../../components/Charts/ChartJSComponent/HorizontalBarChartStyle2'
import LineChart from '../../../components/Charts/ChartJSComponent/LineChart'
import DonutChart from '../../../components/Charts/ChartJSComponent/DonutChart'
import PieChart from '../../../components/Charts/ChartJSComponent/PieChart'

export default () => {
  return (
    <div>
      <Navbar />

      <div className='mt-5 px-5 grid grid-cols-1 md:grid-cols-2 gap-5'>

        <div className='transaction_card h-[200px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Bar Chart</div>
          <BarChart />
        </div>

        <div className='transaction_card h-[200px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Transparency</div>
          <Transparency />
        </div>

        <div className='transaction_card h-[250px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Gradient Bar Chart</div>
          <GradientBarChart />
        </div>

        <div className='transaction_card h-[250px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Horizontal Bar Chart</div>
          <HorizontalBarChart />
        </div>

        <div className='transaction_card h-[250px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Horizontal Bar Chart</div>
          <HorizontalBarChartStyle2 />
        </div>

        <div className='transaction_card h-[250px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Line Chart</div>
          <LineChart />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Donut Chart</div>
          <DonutChart />
        </div>

        <div className='transaction_card h-[400px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Pie Chart</div>
          <PieChart />
        </div>

        <div className='transaction_card h-[250px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Line Chart</div>
          <LineChart />
        </div>

      </div>
    </div>
  )
}
