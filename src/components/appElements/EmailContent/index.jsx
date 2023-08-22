import { AiFillStar } from "react-icons/ai";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkBtn, starBtn } from "../../../redux/app/appSlice";

const EmailContent = () => {
  const dispatch = useDispatch()
  const emailUserList = useSelector((state) => state.app.emailUserList);

  return (
    <div className="w-full bg-[#fff5] overflow-x-scroll">
      <table cellPadding={15} className="w-full">
        <tbody>
          {emailUserList.map((item) => (
            <tr key={item.id} className="border-b">
              <td>
                <input
                  type="checkbox"
                  onChange={() => dispatch(checkBtn(item.id))}
                  checked={item.checked}
                />
              </td>
              <td>
                <button
                  onClick={() => dispatch(starBtn(item.id))}
                  className={item.starred?'text-yellow-300':'text-gray-300'}
                >
                  <AiFillStar />
                </button>
              </td>
              <td className="flex gap-3">
                <img
                  src={item.image}
                  className="w-12 h-12 rounded-full"
                  alt=""
                />
                <div className="inline-block">
                  <h5 className="text-[#35446f] font-bold text-sm">
                    {item.name}{" "}
                    <span
                      className={`text-[${item.color}] bg-[${item.color}] bg-opacity-25 rounded-md px-1`}
                    >
                      {item.job}
                    </span>
                  </h5>
                  <p className="text-[#6586bf] text-xs font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </td>
              <td className="place-self-end font-bold text-[#6586bf]">08:42</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmailContent;
