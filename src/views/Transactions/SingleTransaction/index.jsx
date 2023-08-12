import { BiLeftArrowAlt } from "react-icons/bi";
import React from 'react'
import { Link } from 'react-router-dom'

export default () => {

    return (
        <>
            <div className='container_single'>
                <div>
                    <Link to={"/viewTransaction"} className="flex gap-1 text-red-500 font-bold"><BiLeftArrowAlt className="mt-1" /> Back</Link>
                </div>

                <div className="mt-5 grid md:grid-cols-2 xl:grid-cols-10 gap-5">
                    <div className="p-5 ssss grid xl:col-span-6">
                        <div className="pb-5 border-b">
                            <p className="text-[20px] text-[#35446F] font-semibold">Summary</p>
                        </div>

                        <div className="mt-5">
                            <p>Address</p>
                            <p className="text-blue-500">2dxg 25 454 8 4113 2457d2 1564 d1321 d35d5zxd5  4d545d v4v34 d54v5 d4v5 d4 x54d</p>
                        </div>

                        <div className="grid md:grid-cols-2 mt-5">
                            <div>
                                <p>Hash 160</p>
                                <p className="text-blue-500">3df2 dfd s24 4784 54d4 45d 5sf4 54df 545d</p>
                            </div>

                            <div>
                                <p>Confirmations</p>
                                <p className="text-blue-500">Related Tags - Unspent Outputs</p>
                            </div>
                        </div>

                    </div>

                    <div className="grid xl:col-span-4 ssss">

                    </div>
                </div>
            </div>
        </>
    )
}
