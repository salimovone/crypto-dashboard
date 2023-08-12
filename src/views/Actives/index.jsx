import { CgClose } from "react-icons/cg";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers } from "../../redux/activities/activesReducer";

function Actives() {

    const users = useSelector((state) => state.active.users)
    const dispatch = useDispatch()


    const handleDelete = (id) => {
        dispatch(deleteUsers(id))
    }

    return (
        <>
            <div className="w-full p-10 mt-5">
                <div>
                    <div className="text-[24px] text-[#35446F] font-bold">Activities</div>
                    <div className="mt-10">
                        {
                            users.map((item) => (
                                <div key={item.id}>
                                    <div className="w-full py-2 ssss mt-3 px-3 flex justify-between">
                                        <div className="flex gap-2">
                                            <div className="w-[35px] h-[35px]">
                                                <img src={item.img} alt="" className="mt-1 rounded-full w-[35px] h-[35px]" />
                                                <div className="w-[35px] h-[35px]"></div>
                                            </div>

                                            <div>
                                                <div className="flex flex-wrap gap-2">
                                                    <p className="font-medium">{item.name1}</p>
                                                    <p className="ml-2 text-gray-400">{item.grey1}</p>
                                                    <p className="font-medium">{item.name2}</p>
                                                    <p className="text-gray-400">{item.grey2}</p>
                                                    <p className="font-medium">{item.name3}</p>
                                                    <p className="mr-1 text-gray-400">{item.grey3}</p>
                                                    <p className="text-blue-600 font-medium">{item.blue1}</p>
                                                </div>
                                                <p className="text-[12px]">{item.day}</p>
                                            </div>
                                        </div>

                                        <div className="icon1" onClick={() => handleDelete(item.id)}>
                                            <CgClose />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Actives