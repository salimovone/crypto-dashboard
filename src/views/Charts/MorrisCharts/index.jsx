import React from 'react'
import Navbar from '../../../components/Navbar'
import BarChart from '../../../components/Charts/MorrisChartComponent/BarChart'
import LineGarphCharts from '../../../components/Charts/MorrisChartComponent/LineGraphCharts'
import LineGarphChart2 from '../../../components/Charts/MorrisChartComponent/LineGraphCharts2'
import AreaGraphCharts from '../../../components/Charts/MorrisChartComponent/AreaGraphCharts'
import DonutGraphChart from '../../../components/Charts/MorrisChartComponent/DonutGraphChart'

export default () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='mt-5 px-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='transaction_card h-[400px] w-full'>
            <div className='text-xl font-bold text-left text-[var(--main-color)]'>Bar Graph</div>
              <BarChart />
          </div>

          <div className='transaction_card h-[400px] w-full'>
            <div className='text-xl font-bold text-left text-[var(--main-color)]'>Bar Graph</div>
              <LineGarphCharts/>
          </div>

          <div className='transaction_card h-[400px] w-full'>
            <div className='text-xl font-bold text-left text-[var(--main-color)]'>Bar Graph</div>
              <LineGarphChart2/>
          </div>

          <div className='transaction_card h-[400px] w-full'>
            <div className='text-xl font-bold text-left text-[var(--main-color)]'>Bar Graph</div>
              <AreaGraphCharts/>
          </div>

          <div className='transaction_card h-[400px] w-full'>
            <div className='text-xl font-bold text-left text-[var(--main-color)]'>Bar Graph</div>
              <DonutGraphChart/>
          </div>
        </div> 
      </div>
    </>
  )
}
