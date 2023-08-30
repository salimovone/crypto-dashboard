import React from 'react'
import img1 from '../../../assets/img/icon/setting-icon-03.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useFormik } from "formik";
import { addRole } from '../../../redux/Roles/RoleReducer';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Switch } from '@material-tailwind/react';
import { data } from './data';

export default () => {

    const Roles = useSelector((state) => state.roles.roles)
    const [open, setOpen] = useState(false)
    const [edit, setEdit] = useState({ type: false, data: null })
    const dispatch = useDispatch()

    useEffect(() => {
        if (edit.type) {
            formik.setValues({
                title: edit.data.title
            })
        }
    }, [edit.type])

    const formik = useFormik({
        initialValues: {
            title: ""
        },
        onSubmit: values => {
            if (edit.type) {
                const payload = {
                    title: values.title
                }
            } else {
                const payload = {
                    title: values.title
                }
                dispatch(addRole(payload))
            }

            formik.resetForm()
            setEdit({ type: false, data: null })
            setOpen(false)
        },
    });

    return (
        <div>
            <div className={open ? "w-[100%] h-[100%] z-50 absolute top-0  flex justify-center items-center left-0" : "hidden"}>
                <div className="bg-white p-10 rounded-lg shadow-lg">
                    <div className="flex justify-end">
                        <button className="text-red-500 text-[25px] -mt-5 pb-5" onClick={() => setOpen(false)}><AiFillCloseCircle /></button>
                    </div>
                    <form onSubmit={formik.handleSubmit} className=''>
                        <div className="flex justify-between gap-5">
                            <div>
                                <label htmlFor="">Role:</label>
                                <input
                                    id="title"
                                    name="title"
                                    className='border rounded-lg py-2 px-4 block border-[#234ce3]'
                                    type="text"
                                    placeholder='Role'
                                    onChange={formik.handleChange}
                                    value={formik.values.title}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className='bg-[#234ce3] rounded-lg py-2 px-10 text-white font-medium mt-10'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='w-full p-[20px]'>
                <div className='flex gap-3'>
                    <div><img src={img1} alt="" className='w-[44px] mt-1' /><p className='w-[44px]'></p></div>
                    <div>
                        <p className='text-[20px] text-[#35446F] font-bold'>Roles & Permissions</p>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div>
                    <div className='flex gap-5 flex-wrap mt-5'>
                        {
                            Roles.map((item) => (
                                <div className='w-[150px] h-[75px] bg-white rounded-lg flex justify-center items-center'>
                                    {item.title}
                                </div>
                            ))
                        }

                        <div className='w-[150px] h-[75px] border-dashed border rounded-lg border-blue-500 flex justify-center items-centers'>
                            <button onClick={() => setOpen(true)}>+ Add Roles</button>
                        </div>
                    </div>
                </div>

                <div className='payment_card mt-10 pb-10'>
                    <div className='border-b py-5'>
                        <p className='text-[18px] font-semibold text-gray-600'>Module Access</p>
                    </div>

                    <div className='flex justify-between h-[70px] px-5 items-center border-b'>
                        <div className='w-full'>
                            <p className='font-medium'>Employee</p>
                            <p className='text-green-500'>Active</p>
                        </div>

                        <div className='flex items-center'>
                            <Switch></Switch>
                        </div>
                    </div>

                    <div className='flex justify-between h-[70px] px-5 items-center border-b'>
                        <div className='w-full'>
                            <p className='font-medium'>Holidays</p>
                            <p className='text-green-500'>Active</p>
                        </div>

                        <div className='flex items-center'>
                            <Switch></Switch>
                        </div>
                    </div>

                    <div className='flex justify-between h-[70px] px-5 items-center border-b'>
                        <div className='w-full'>
                            <p className='font-medium'>Leave Request</p>
                            <p className='text-red-500'>Disabled</p>
                        </div>

                        <div className='flex items-center'>
                            <Switch></Switch>
                        </div>
                    </div>

                    <div className='flex justify-between h-[70px] px-5 items-center border-b'>
                        <div className='w-full'>
                            <p className='font-medium'>Event</p>
                            <p className='text-green-500'>Active</p>
                        </div>

                        <div className='flex items-center'>
                            <Switch></Switch>
                        </div>
                    </div>

                    <div className='flex justify-between h-[70px] mb-5 px-5 items-center border-b'>
                        <div className='w-full'>
                            <p className='font-medium'>Chat</p>
                            <p className='text-green-500'>Active</p>
                        </div>

                        <div className='flex items-center'>
                            <Switch></Switch>
                        </div>
                    </div>
                </div>

                <div className='payment_card'>
                    <div className='text-[20px] text-gray-500 font-semibold'>
                        <p>Module Permission</p>
                    </div>
                    <div className='mt-3'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <div style={{ background: item.bg }} className='py-3 px-3 font-bold'>
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
