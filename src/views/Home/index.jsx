import React from 'react'
import HeadIntro from '../../components/HeadIntro'
import { cardData } from './data'
import HeadCard from '../../components/HeadCard'
import { Ul } from './style'
import HeadBtcIndex from '../../components/HeadBtcIndex'
import Dashchart from '../../components/DashChart'

const Dashboard = () => {
  return (
    <div className='w-full h-[205vh]  p-[30px] pt-16'>
      <HeadIntro />
      <div className="flex flex-wrap justify-between">
        {cardData.map((item, index)=><HeadCard key={index} {...item} />)}
      </div>
      <Ul className='mt-5'>
        {Array(7).fill(0).map((item, index)=>(
          <HeadBtcIndex key={index} index={index} />
        ))}
      </Ul>
      <Dashchart />
    </div>
  )
}

export default Dashboard
