import { IoMdArrowDropdown } from "react-icons/io"; 
import { BiCalendar } from "react-icons/bi"; 
import React from 'react'
import { Main } from './style'

const HeadIntro = (props) => {
  return (
    <Main {...props}>
      <div className="text-xl font-semibold flex items-center">Welcome, <span className='text-blue-600'>Soeng Souy</span></div>
      <div className='flex gap-2 flex-wrap'>
        <button className="hIntro-red-button max-md:w-full">Wallet : 56, 444658</button>
        <div className="hIntro-btn-book flex items-center max-md:w-full"><BiCalendar /> <span>8-1-2023 - 8-31-2023</span>  <IoMdArrowDropdown /></div>
      </div>
    </Main>
  )
}

export default HeadIntro