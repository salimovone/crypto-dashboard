import { BiError } from "react-icons/bi"; 
import React from "react";
import { Link } from "react-router-dom";

function Eror500() {
    return (
        <>
            <div className="w-full h-full flex justify-center items-center text-center">
                <div>
                    <p className="text-[150px] text-blue-700">500</p>
                    <div className="flex gap-1 text-[20px] text-[#4F5155] font-medium"><BiError className="text-[29px]" /> <span>Oops! Something went wrong</span></div>
                    <p>The page you requested was not found.</p>
                    <button className="mt-4 py-1 bg-blue-700 rounded-md text-white hover:bg-red-600 px-3"><Link to={"/"}>Go to Home</Link></button>
                </div>
            </div>
        </>
    )
}

export default Eror500