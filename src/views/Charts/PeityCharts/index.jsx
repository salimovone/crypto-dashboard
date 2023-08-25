import React from 'react'
import Navbar from '../../../components/Navbar'
import DonutChart from '../../../components/Charts/PietyChartComponent/DonuChart'
import DonuChart from '../../../components/Charts/PietyChartComponent/DonutChart'
import DonutChart2 from '../../../components/Charts/PietyChartComponent/DonutChart2'
import DonutChart3 from '../../../components/Charts/PietyChartComponent/DonutChart3'
import PieChart from '../../../components/Charts/PietyChartComponent/PieChart'
import PieChart2 from '../../../components/Charts/PietyChartComponent/PieChart2'
import PieChart3 from '../../../components/Charts/PietyChartComponent/PieChart3'
import LineChart1 from '../../../components/Charts/PietyChartComponent/LineChart1'
import LineChart2 from '../../../components/Charts/PietyChartComponent/LineChart2'
import BarChart1 from '../../../components/Charts/PietyChartComponent/BarChart1'
import BarChart2 from '../../../components/Charts/PietyChartComponent/BarChart2'
import BarChart3 from '../../../components/Charts/PietyChartComponent/BarChart3'
import SettingColours1 from '../../../components/Charts/PietyChartComponent/SettingColours1'
import SettingColours2 from '../../../components/Charts/PietyChartComponent/SettingColours2'
import SettingColours3 from '../../../components/Charts/PietyChartComponent/SettingColours3'
import PieChart1 from '../../../components/Charts/PietyChartComponent/PieChart1'

export default () => {
  return (
    <div>
      <Navbar />

      <div className='mt-5 px-5'>

        <div className='transaction_card md:h-[230px] h-[560px] transition-all lg:h-[150px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Donut Chart</div>
          <div className='w-full h-full grid md:grid-cols-3 grid-cols-1 lg:grid-cols-6 mt-1'>
            <DonutChart />
            <DonuChart />
            <DonutChart2 />
            <DonutChart3 />
            <DonuChart />
            <DonutChart2 />
          </div>
        </div>

        <div className='transaction_card md:h-[320px] h-[800px] transition-all lg:h-[200px] xl:h-[220px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Pie Chart</div>
          <div className='w-full h-full grid md:grid-cols-3 grid-cols-1 lg:grid-cols-6 mt-1'>
            <PieChart />
            <PieChart2 />
            <PieChart3 />
            <PieChart />
            <PieChart2 />
            <PieChart3 />
          </div>
        </div>

        <div className='transaction_card md:h-[320px] h-[560px] transition-all lg:h-[150px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Line Chart</div>
          <div className='w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-1 pb-5'>
            <LineChart1 />
            <LineChart2 />
            <LineChart1 />
          </div>
        </div>

        <div className='transaction_card md:h-[320px] h-[560px] transition-all lg:h-[150px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Bar Chart</div>
          <div className='w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-1 pb-5'>
            <BarChart1 />
            <BarChart2 />
            <BarChart3 />
          </div>
        </div>

        <div className='transaction_card md:h-[300px] h-[700px] transition-all lg:h-[200px] xl:h-[190px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Data attributes</div>
          <div className='w-full h-full grid md:grid-cols-3 grid-cols-1 lg:grid-cols-6 mt-1'>
            <PieChart />
            <PieChart2 />
            <PieChart3 />
            <PieChart />
            <PieChart2 />
            <PieChart3 />
          </div>
        </div>

        <div className='transaction_card md:h-[320px] h-[570px] transition-all lg:h-[200px] w-full'>
          <div className='text-xl font-bold text-left text-[var(--main-color)]'>Setting Colours Dynamically</div>
          <div className='w-full h-full grid grid-cols-1 lg:grid-cols-4 gap-5 mt-1 pb-5'>
            <SettingColours1 />
            <SettingColours2 />
            <SettingColours3 />
            <PieChart1 />
          </div>
        </div>

      </div>
    </div>
  )
}
