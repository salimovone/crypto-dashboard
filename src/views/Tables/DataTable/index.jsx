import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import Table1 from '../../../components/DataTable/Table1'
import Table2 from '../../../components/DataTable/Table2'
import Table3 from '../../../components/DataTable/Table3'

export default () => {

    const [number, setnumber] = useState(5)
    const [number2, setNumber2] = useState(30)

    const handlePlus = () => {
        if (number >= 30) {
            setnumber(number + 0)
        } else {
            setnumber(number + 5)
        }
    }

    const handleMinus = () => {
        if (number <= 5) {
            setnumber(number - 0)
        } else {
            setnumber(number - 5)
        }
    }

    return (
        <div>
            <Navbar />

            <div className='p-[30px]'>
                <div>
                    <p className='text-[21px] font-bold text-[#35446F]'>Data Tables</p>
                </div>

                <div className='payment_card mt-5'>
                    <div className='w-full overflow-x-scroll xl:overflow-x-hidden'>
                        {
                            number === 5 ? (
                                <div>
                                    <Table1 />
                                </div>
                            ) : ""
                        }

                        {
                            number === 10 ? (
                                <div>
                                    <Table2 />
                                </div>
                            ) : ""
                        }

                        {
                            number === 15 ? (
                                <div>
                                    <Table1 />
                                </div>
                            ) : ""
                        }

                        {
                            number === 20 ? (
                                <div>
                                    <Table2 />
                                </div>
                            ) : ""
                        }

                        {
                            number === 25 ? (
                                <div>
                                    <Table1 />
                                </div>
                            ) : ""
                        }

                        {
                            number === 30 ? (
                                <div>
                                    <Table3 />
                                </div>
                            ) : ""
                        }
                    </div>

                    <div className="flex flex-wrap justify-between w-[100%] pt-4">
                        <div className="text-[#566787]">
                            <p>Showing {number} out of {number2} entries</p>
                        </div>


                        <div>
                            <div className="flex gap-4">
                                <button onClick={handleMinus}>Prevous</button>
                                <button className={`${number === 5 && 'bg-blue-500  w-[30.1px] h-[30px] text-[19.1px] justify-center flex text-white'}`} onClick={() => setnumber(5)}>1</button>
                                <button className={`${number === 10 && 'bg-blue-500 w-[30.1px] h-[30px] text-[19.1px] justify-center flex  text-white'}`} onClick={() => setnumber(10)}>2</button>
                                <button className={`${number === 15 && 'bg-blue-500 w-[30.1px] h-[30px] text-[19.1px] justify-center flex  text-white'}`} onClick={() => setnumber(15)}>3</button>
                                <button className={`${number === 20 && 'bg-blue-500 w-[30.1px] h-[30px] text-[19.1px] justify-center flex  text-white'}`} onClick={() => setnumber(20)}>4</button>
                                <button className={`${number === 25 && 'bg-blue-500 w-[30.1px] h-[30px] text-[19.1px] justify-center flex  text-white'}`} onClick={() => setnumber(25)}>5</button>
                                <button className={`${number === 30 && 'bg-blue-500 w-[30.1px] h-[30px] text-[19.1px] justify-center flex  text-white'}`} onClick={() => setnumber(30)}>6</button>
                                <button onClick={handlePlus}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
