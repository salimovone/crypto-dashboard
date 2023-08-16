import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { TbArrowsDownUp } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../../views/BuySell/style.css'
import { useFormik } from "formik";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CiMenuKebab } from 'react-icons/ci'
import { addUsers, deleteUsers, updateUsers } from "../../redux/table/tableReducer";

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
        setOpen(false)
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
                    // img:,
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
                dispatch(addUsers(payload))
            }

            formik.resetForm()
            setEdit({ type: false, data: null })
            setModal(false)
        },
    });

    return (
        <div className="w-max p-14 bg-red-500">
            <div className={`${open ? 'top-0 left-0 h-[100%]  w-[100%]  absolute  z-50 flex justify-center items-center' : 'hidden'}`}>
                <div>
                    <div className="w-[300px] h-[150px] bg-white rounded-lg shadow-lg text-center flex justify-center items-center">
                        <div>
                            <p className="-mt-2 text-[30px]">Are You Sure?</p>

                            <div className="flex gap-5 mt-5 ml-5">
                                <button onClick={() => { handleDelete() }} className="text-white py-[8px] px-[30px] bg-[#234ce3] rounded-lg font-semibold text-2xl">Ok</button>
                                <button onClick={() => setOpen(false)} className="text-[#234ce3] font-semibold text-2xl">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={modal ? "w-[100%] h-[100%] z-50 absolute top-0  flex justify-center items-center left-0" : "hidden"}>
                <div className="bg-white rounded-lg">
                    <form onSubmit={formik.handleSubmit} className='bg-white p-10 rounded-lg shadow-lg'>
                        <div className="flex justify-end">
                            <button className="text-red-500 text-[25px] -mt-5 pb-5" onClick={() => setModal(false)}><AiFillCloseCircle /></button>
                        </div>
                        <div className="flex justify-between gap-5">
                            <div>
                                <label htmlFor="">ID NO:</label>
                                <input
                                    id="idNo"
                                    name="idNo"
                                    className='border rounded-lg py-2 px-4 block border-[#234ce3]'
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
                                    className='border rounded-lg py-2 px-4 block border-[#234ce3]'
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
                                    className='border rounded-lg py-2 px-4 block border-[#234ce3]'
                                    type="text"
                                    placeholder='Payment Medhod'
                                    onChange={formik.handleChange}
                                    required
                                    value={formik.values.method}
                                />
                            </div>

                            <div> <label htmlFor="" className="mt-3">Trade Time:</label>
                                <input
                                    id="time"
                                    name="time"
                                    className='border rounded-lg py-2 px-4 block border-[#234ce3]'
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
                                    className='border rounded-lg py-2 px-4 block border-[#234ce3]'
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
                                    className='border rounded-lg py-2 px-4 block border-[#234ce3]'
                                    type="text"
                                    placeholder='Status'
                                    onChange={formik.handleChange}
                                    required
                                    value={formik.values.statuss}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className='bg-[#234ce3] rounded-lg py-2 px-10 text-white font-medium mt-10'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* <div>
            <button className='mt-5 bg-green-600 -mb-5 py-2 px-10 rounded-lg text-white font-semibold' onClick={() => handldkls()}>Add user</button>
            </div> */}

            <div class="relative  overflow-x-scroll  xl:overflow-x-hidden sm:rounded-lg  h-full mt-14 z-30">
                <table class="w-[1100px] xl:w-[1220px] text-sm text-left overflow-x-scroll">
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
                    <tbody className="border shadow-md h-full bg-[rgba(255,255,255,.4)]">
                        {
                            user.map((item) => (
                                <tr class="border-y " key={item.id}>
                                    <th scope="row" class="px-4 py-4 font-medium text-blue-700 whitespace-nowrap">
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
                                                                        'flex px-4 py-2 text-sm gap-1'
                                                                    )}
                                                                    onClick={() => updateUser(item)}
                                                                >
                                                                    <BiEditAlt className="mt-1" />Edit
                                                                </div>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <div
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'flex gap-1 px-4 py-2 text-sm'
                                                                    )}
                                                                    onClick={() => { setOpen(item.id) }}
                                                                >
                                                                    <AiFillDelete className="mt-1" />Delete
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
            </div>

            <div className="flex flex-wrap justify-between px-[20px] w-[100%] pt-4 md:ml-3">
                <div className="text-[#566787]">
                    <p>Showing {number} out of {number2} entries</p>
                </div>

                <div className="md:ml-80">
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
    )
}

export default BuySell