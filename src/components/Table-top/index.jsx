import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

function Table() {
    return (
        <>
            <div>
                <div className="pt-10">
                    <div>
                        <p className="text-[24px] text-[#35446f]">Recent Buying Cryptocurrency</p>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-1 xl:gap-0 lg:gap-5 gap-5 xl:grid-cols-5 mt-5">
                    <div>
                        <p className="text-[#35446f] font-medium">Latest actions <br /> (Showing 01 to 06 of 100)</p>
                    </div>

                    <div>
                        <input type="date" className="h-[40px] w-[85%] lg:w-auto bg-inherit px-8 rounded-xl border border-blue-600" />
                    </div>
                    <div>
                        <input type="date" className="h-[40px]  w-[85%] bg-inherit px-8 rounded-xl border border-blue-600" />
                    </div>

                    <div>
                        <select id="countries" class="border px-8 w-[85%] h-[40px] bg-inherit border-blue-600 rounded-lg">
                            <option selected>Status</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>

                    <div className="flex gap-2">
                        <p className="pt-2">SortBy:</p>
                        <div><input type="date" className="h-[40px] w-[80%] bg-inherit px-10 lg:px-6 rounded-xl border border-blue-600" /></div>
                        <div className="rounded-full icons_buySell w-[40px] xl:-ml-8 text-[22px] text-blue-600 flex justify-center items-center h-[40px]  border border-blue-600">
                            <AiOutlineDownload />
                        </div>
                    </div>
                </div>

                <div className="flex pt-10 gap-1">
                    <p>Show</p>
                    <div className="-mt-[2px]"><select id="countries" class="border p-1 bg-inherit border-blue-600 rounded-lg">
                        <option selected>10</option>
                        <option value="US">25</option>
                        <option value="CA">50</option>
                        <option value="FR">100</option>
                    </select></div>
                    <p>entired</p>
                </div>
            </div>
        </>
    )
}

export default Table