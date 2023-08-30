import React from 'react'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import CompanySettings from '../../components/Settings/CompanySettings'
import Localization from '../../components/Settings/Localization'
import ThemeSettings from '../../components/Settings/ThemeSettings'
import RolesPermissions from '../../components/Settings/Roles&Permissions'
import Configurations from '../../components/Settings/Configurations'
import SalarySettings from '../../components/Settings/SalarySettings'
import Notifications from '../../components/Settings/Notifications'
import ChangePassword from '../../components/Settings/ChangePassword'

export default () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <Navbar />

            <div className='w-full p-[30px] flex gap-5 flex-wrap font-semibold'>
                <button onClick={() => setCount(0)} className={`${count === 0 ? "border-b-[3px] px-[20px] text-blue-800 border-blue-700" : ""}`}>Company Settings</button>
                <button onClick={() => setCount(1)} className={`${count === 1 ? "border-b-[3px] px-[20px] text-blue-800 border-blue-700" : ""}`}>Localization</button>
                <button onClick={() => setCount(2)} className={`${count === 2 ? "border-b-[3px] px-[20px] text-blue-800 border-blue-700" : ""}`}>Theme Settings</button>
                <button onClick={() => setCount(3)} className={`${count === 3 ? "border-b-[3px] px-[20px] text-blue-800 border-blue-700" : ""}`}>Roles & Permissions</button>
                <button onClick={() => setCount(4)} className={`${count === 4 ? "border-b-[3px] px-[20px] text-blue-800 border-blue-700" : ""}`}>Configurations</button>
                <button onClick={() => setCount(5)} className={`${count === 5 ? "border-b-[3px] px-[20px] text-blue-800 border-blue-700" : ""}`}>Salary Settings</button>
                <button onClick={() => setCount(6)} className={`${count === 6 ? "border-b-[3px] px-[20px] text-blue-800 border-blue-700" : ""}`}>Notifications</button>
                <button onClick={() => setCount(7)} className={`${count === 7 ? "border-b-[3px] px-[20px] text-blue-800 border-blue-700" : ""}`}>Change Password</button>
            </div>

            {
                count === 0 ? (
                    <CompanySettings />
                ) : ""
            }

            {
                count === 1 ? (
                    <Localization />
                ) : ""
            }

            {
                count === 2 ? (
                    <ThemeSettings />
                ) : ""
            }

            {
                count === 3 ? (
                    <RolesPermissions />
                ) : ""
            }

            {
                count === 4 ? (
                    <Configurations />
                ) : ""
            }

            {
                count === 5 ? (
                    <SalarySettings />
                ) : ""
            }

            {
                count === 6 ? (
                    <Notifications />
                ) : ""
            }

            {
                count === 7 ? (
                    <ChangePassword />
                ) : ""
            }

        </div>
    )
}
