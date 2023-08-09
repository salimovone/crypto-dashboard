import { TbArrowsDownUp } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../../views/BuySell/style.css'
import { useFormik } from "formik";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CiMenuKebab } from 'react-icons/ci'
import { deleteUsers, updateUsers } from "../../redux/table/tableReducer";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function BuySell() {

    const user = useSelector((state) => state.table.users)
    const dispatch = useDispatch()
    const [number, setnumber] = useState(5)
    const [number2, setNumber2] = useState(25)
    const [open, setOpen] = useState(false)
    const [modal, setModal] = useState(false)
    const [edit, setEdit] = useState({ type: false, data: null })

    const updateUser = (demo) => {
        setModal(true)
        setEdit({ type: true, data: demo })
    }

    const handleDelete = () => {
        dispatch(deleteUsers(open))
        // setOpen(false)
        setNumber2(number2 - 1)
    }

    const handlePlus = () => {
        if (number >= 25) {
            setnumber(number + 0)
            alert("Bundan boshqa table page yuq")
        } else {
            setnumber(number + 5)
        }
    }

    const handleMinus = () => {
        if (number <= 5) {
            setnumber(number - 0)
            alert("Bundan boshqa table page yuq")
        } else {
            setnumber(number - 5)
        }
    }

    useEffect(() => {
        if (edit.type) {
            formik.setValues({
                idNo: edit.data.idNo,
                type: edit.data.type,
                method: edit.data.method,
                amount: edit.data.amount,
                statuss: edit.data.statuss,
                id: edit.data.id,
                time: edit.data.time,
            })
        }
    }, [edit.type])

    const formik = useFormik({
        initialValues: {
            idNo: "",
            type: "",
            method: "",
            amount: "",
            statuss: "",
            id: "",
            time: ""
        },
        onSubmit: values => {
            if (edit.type) {
                const payload = {
                    idNo: values.idNo,
                    type: values.type,
                    amount: values.amount,
                    statuss: values.statuss,
                    method: values.method,
                    id: values.id,
                    time: values.time
                }
                dispatch(updateUsers(payload))
            } else {
                const payload = {
                    idNo: values.idNo,
                    type: values.type,
                    amount: values.amount,
                    statuss: values.statuss,
                    method: values.method,
                    id: values.id,
                    time: values.time
                }
                dispatch(deleteUsers(payload))
            }
            formik.resetForm()
            setEdit({ type: false, data: null })
            setModal(false)
        },
    });

    return (
        <>
            {/* <div className={`${open ? 'bggg h-[100%]  w-[100%] z-[10000000] flex justify-center items-center' : 'hidden'}`}>
                <div>
                    <div className="w-[300px] h-[200px] bg-white text-center flex justify-center items-center">
                        <div>
                            <p className="-mt-2 text-[30px]">Are You Sure?</p>

                            <div className="flex gap-5 mt-5 ml-5">
                                <button onClick={() => { handleDelete() }} className="text-red-700 font-semibold text-2xl">Ok</button>
                                <button onClick={() => setOpen(false)} className="text-green-500 font-semibold text-2xl">Cancel</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div> */}

            <div className={modal ? "w-[100%] h-[100%] bg-white z-[1000000] flex justify-center" : "hidden"}>
                <div>
                    <form onSubmit={formik.handleSubmit} className='bg-white p-10'>

                        <label htmlFor="">ID NO:</label>
                        <input
                            id="idNo"
                            name="idNo"
                            className='border-2 py-2 px-4 block border-red-500'
                            type="text"
                            placeholder='ID NO'
                            onChange={formik.handleChange}
                            value={formik.values.idNo}
                            required
                        />

                        <label htmlFor="" className="mt-5 pt-5">Currency Type:</label>
                        <input
                            id="type"
                            name="type"
                            className='border-2 py-2 px-4 block border-red-500'
                            type="text"
                            placeholder='Currency Type'
                            onChange={formik.handleChange}
                            value={formik.values.type}
                            required
                        />

                        <label htmlFor="" className="mt-3">Payment Medhod:</label>
                        <input
                            id="method"
                            name="method"
                            className='border-2 py-2 px-4 block border-red-500'
                            type="text"
                            placeholder='Payment Medhod'
                            onChange={formik.handleChange}
                            required
                            value={formik.values.method}
                        />

                        <label htmlFor="" className="mt-3">Trade Time:</label>
                        <input
                            id="time"
                            name="time"
                            className='border-2 py-2 px-4 block border-red-500'
                            type="text"
                            placeholder='Trade Time'
                            onChange={formik.handleChange}
                            required
                            value={formik.values.time}
                        />

                        <label htmlFor="" className="mt-3">Amount:</label>
                        <input
                            id="amount"
                            name="amount"
                            className='border-2 py-2 px-4 block border-red-500'
                            type="text"
                            placeholder='Amount'
                            onChange={formik.handleChange}
                            value={formik.values.amount}
                            required
                        />

                        <label htmlFor="" className="mt-3">Status:</label>
                        <input
                            id="statuss"
                            name="statuss"
                            className='border-2 py-2 px-4 block border-red-500'
                            type="text"
                            placeholder='Status'
                            onChange={formik.handleChange}
                            required
                            value={formik.values.statuss}
                        />

                        <button type="submit" className='bg-green-700 py-2 px-10 text-white font-medium mt-10'>Submit</button>
                    </form>
                </div>
            </div>

            <div class="relative overflow-x-scroll salom sm:rounded-lg h-full mt-14">
                <table class="w-[100%] text-sm text-left ">
                    <thead class="text-md text-[#35446F] uppercase bg-inherit pb-10">
                        <tr>
                            <th scope="col" class="px-4 py-3">
                                ID NO
                            </th>
                            <th scope="col" class="px-6 py-3 flex gap-1">
                                <TbArrowsDownUp className="mt-1" /> Currency type
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Payment Medhod
                            </th>
                            <th scope="col" class="px-6 py-3 flex gap-1">
                                <TbArrowsDownUp className="mt-1" />  Amount
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Trade Time
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3 flex gap-1">
                                <TbArrowsDownUp className="mt-1" />Action
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <TbArrowsDownUp />
                            </th>
                        </tr>
                    </thead>
                    <tbody className="border shadow-md h-full">
                        {
                            user.map((item) => (
                                <tr class="border-y dark:bg-gray-900 text-black dark:border-gray-700" key={item.id}>
                                    <th scope="row" class="px-4 py-4 font-medium text-blue-700 whitespace-nowrap dark:text-white">
                                        {item.idNo}
                                    </th>
                                    <td class="px-6 py-6 text-black text-[18px] flex gap-1">
                                        <img src={item.img} alt="" /> {item.type}
                                    </td>
                                    <td class="px-8 py-4 text-[18px]">
                                        {item.method}
                                    </td>
                                    <td class="px-6 py-4 text-blue-700 font-medium">
                                        {item.amount}
                                    </td>
                                    <td class="px-6 py-4 font-bold text-[#35446F]">
                                        {item.time} <br /> {item.time2}
                                    </td>
                                    <td class="px-6 py-4 text-green-500 font-semibold text-[17px]">
                                        {item.statuss}
                                    </td>
                                    <td class="px-6 py-4">

                                    </td>
                                    <td class="px-6 py-4">
                                        <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <Menu.Button className="inline-flex w-full justify-center px-3 py-2 text-sm font-semibold text-gray-900">
                                                    <CiMenuKebab />
                                                </Menu.Button>
                                            </div>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <div
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                    onClick={() => updateUser(item)}
                                                                >
                                                                    Edit
                                                                </div>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <div
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                    onClick={() => { handleDelete() }}
                                                                >
                                                                    Delete
                                                                </div>
                                                            )}
                                                        </Menu.Item>
                                                        <form method="POST" action="#">
                                                        </form>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <div className="grid grid-cols-2 w-[96%] pt-4 ml-3">
                    <div className="text-[#566787]">
                        <p>Showing {number} out of {number2} entries</p>
                    </div>

                    <div className="ml-80">
                        <div className="flex gap-2">
                            <button onClick={handleMinus}>Prevous</button>
                            <button className={`text-[0px] w-0 ${number === 5 && 'bg-blue-500  w-[30.1px] h-[30px] text-[19.1px] justify-center flex text-white'}`} onClick={() => setnumber(5)}>1</button>
                            <button className={`text-[0px] w-0 ${number === 10 && 'bg-blue-500 w-[30.1px] h-[30px] text-[19.1px] justify-center flex  text-white'}`} onClick={() => setnumber(10)}>2</button>
                            <button className={`text-[0px] w-0 ${number === 15 && 'bg-blue-500 w-[30.1px] h-[30px] text-[19.1px] justify-center flex  text-white'}`} onClick={() => setnumber(15)}>3</button>
                            <button className={`text-[0px] w-0 ${number === 20 && 'bg-blue-500 w-[30.1px] h-[30px] text-[19.1px] justify-center flex  text-white'}`} onClick={() => setnumber(20)}>4</button>
                            <button className={`text-[0px] w-0 ${number === 25 && 'bg-blue-500 w-[30.1px] h-[30px] text-[19.1px] justify-center flex  text-white'}`} onClick={() => setnumber(25)}>5</button>
                            <button onClick={handlePlus}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuySell