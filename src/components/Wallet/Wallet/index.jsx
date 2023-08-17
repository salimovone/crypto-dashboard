import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Img from "../../../assets/img/card-icon.png";
import { useFormik } from "formik";
import { addWallet, updateWallet } from "../../../redux/wallet/walletReducer";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import LeftPie from "./LeftDiagram";
import Rightpie from "./RightDiagram";

export default () => {
  const wallet = useSelector((state) => state.wallet.wallets);
  console.log(wallet);

  const dispatch = useDispatch();
  const [edit, setEdit] = useState({ type: false, data: null });
  const [modal, setModal] = useState(false);

  const updateUser = (demo) => {
    setModal(true);
    setEdit({ type: true, data: demo });
  };

  useEffect(() => {
    if (edit.type) {
      formik.setValues({
        balance: edit.data.balance,
        validTHRU: edit.data.validTHRU,
        holder: edit.data.holder,
      });
    }
  }, [edit.type]);

  const formik = useFormik({
    initialValues: {
      balance: "",
      validTHRU: "",
      holder: "",
      bgColor:
        "linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.05) 97.35%,rgba(255,255,255,0) 160.66%),#234CE3",
    },
    onSubmit: (values) => {
      if (edit.type) {
        const payload = {
          balance: values.balance,
          validTHRU: values.validTHRU,
          holder: values.holder,
          bgColor: values.bgColor,
        };
        dispatch(updateWallet(payload));
      } else {
        const payload = {
          id: Date.now(),
          balance: values.balance,
          validTHRU: values.validTHRU,
          holder: values.holder,
          bgColor:
            "linear-gradient(51.64deg,rgba(255,255,255,0) 34.2%,rgba(255,255,255,0.05) 97.35%,rgba(255,255,255,0) 160.66%),#234CE3",
        };
        dispatch(addWallet(payload));
      }

      formik.resetForm();
      setEdit({ type: false, data: null });
      setModal(false);
    },
  });

  return (
    <div>
      <div
        className={`absolute left-0 top-0 h-screen w-full flex justify-center items-center ${
          modal ? "block" : "hidden"
        }`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white p-10 rounded-lg shadow-lg"
        >
          <div className="flex justify-end">
            <button
              className="text-red-500 text-[25px] -mt-5 pb-5"
              onClick={() => setModal(false)}
            >
              <AiFillCloseCircle />
            </button>
          </div>
          <div className="flex justify-center">
            <div>
              <label htmlFor="">Balance</label>
              <input
                id="balance"
                name="balance"
                className="border rounded-lg py-2 px-4 block border-[#234ce3]"
                type="text"
                placeholder="Balance"
                onChange={formik.handleChange}
                value={formik.values.balance}
              />

              <label htmlFor="">Valid Thru</label>
              <input
                id="validTHRU"
                name="validTHRU"
                className="border rounded-lg py-2 px-4 block border-[#234ce3]"
                type="text"
                placeholder="Valid Thru"
                onChange={formik.handleChange}
                value={formik.values.validTHRU}
              />

              <label htmlFor="" className="mt-3">
                Holder
              </label>
              <input
                id="holder"
                name="holder"
                className="border rounded-lg py-2 px-4 block border-[#234ce3]"
                type="text"
                placeholder="Holder"
                onChange={formik.handleChange}
                value={formik.values.holder}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#234ce3] rounded-lg py-2 px-10 text-white font-medium mt-10"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="w-full px-[20px] mt-[20px]">
        <div>
          <button
            onClick={() => {
              setModal(true);
            }}
            className="text-[14px] transition-all hover:bg-[#fe3f51] text-white bg-[#234ce3] rounded-lg w-full  md:w-[160px] h-[38px] font-bold flex items-center justify-center gap-[7px]"
          >
            <BiWallet className="text-[18px]" /> Add New Wallet
          </button>
        </div>
        <div className="w-full flex flex-col xl:flex-row gap-[20px] mt-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[20px]">
            {wallet.map((item) => (
              <div
                key={item.id}
                className="p-[20px] pb-3 w-full rounded-lg"
                style={{
                  background: item.bgColor,
                  boxShadow:
                    "0 4px 9px rgba(35,76,227,.3), inset 0 0 15px rgba(255,255,255,.35)",
                }}
              >
                <div className="flex justify-between">
                  <div>
                    <div className="text-[16px] text-white font-bold">
                      Main Balance
                    </div>
                    <div className="text-[24px] text-white font-bold">
                      {item.balance}
                    </div>
                  </div>
                  <div>
                    <img src={Img} className="w-[90px]" alt="" />
                  </div>
                </div>
                <div className="flex items-center gap-[25px] mt-6">
                  <div>
                    <div className="uppercase text-xs text-white font-semibold">
                      valid thru
                    </div>
                    <div className="text-md text-white font-bold">
                      {item.validTHRU}
                    </div>
                  </div>
                  <div>
                    <div className="uppercase text-xs text-white font-semibold">
                      card holder
                    </div>
                    <div className="text-md text-white font-bold">
                      {item.holder}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-5 flex-col xl:flex-row">
            <div className="p-5 transaction_card w-full flex justify-center">
              <LeftPie />
            </div>
            <div className="p-5 transaction_card w-full flex justify-center">
              <Rightpie />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
