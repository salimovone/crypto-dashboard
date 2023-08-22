import { BiDotsVerticalRounded } from "react-icons/bi";
import React from "react";
import { Main } from "./style";
import search from "../../../assets/img/icon/search-normal.svg";
import { data } from "./data";
import { useDispatch, useSelector } from "react-redux";
import {
  checkAllBtn,
  deleteFromTrash,
  moveToTrash,
  restoreFromTrash,
} from "../../../redux/app/appSlice";

const Searchbar = () => {
  const dispatch = useDispatch();
  const pageName = useSelector((state) => state.app.pageName);

  const deleteFunc = (prop) => {
    if (prop === "trash") {
      if (pageName !== "trash") {
        dispatch(moveToTrash());
      } else {
        dispatch(deleteFromTrash());
      }
    }
    if (prop === "restore" && pageName === "trash") {
      dispatch(restoreFromTrash());
    }
  };
  return (
    <Main>
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          onChange={(e) => dispatch(checkAllBtn(e.target.checked))}
        />
        <button>
          <BiDotsVerticalRounded />
        </button>
        <div className="inp-box flex gap-2 p-2">
          <img src={search} alt="" />
          <input type="text" placeholder="Search here" />
        </div>
      </div>

      <ul className="flex items-center gap-5">
        {data.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer"
            onClick={() => deleteFunc(item.trash)}
          >
            <img src={item.icon} alt="" />
          </li>
        ))}
      </ul>
    </Main>
  );
};

export default Searchbar;
