import { BsCameraVideo } from "react-icons/bs"; 
import { MdKeyboardVoice } from "react-icons/md"; 
import React from "react";
import img1 from '../../../../assets/img/call.jpg'
import img2 from '../../../../assets/img/call-01.jpg'
import img3 from '../../../../assets/img/call-02.jpg'
import img4 from '../../../../assets/img/call-03.jpg'
import icon1 from '../../../../assets/img/icon/call-icon-01.svg'
import icon2 from '../../../../assets/img/icon/call-icon-02.svg'
import icon3 from '../../../../assets/img/icon/call-icon-03.svg'

export const users = [
    {
        id: 1,
        img: img1,
        width: "100%",
    },
    {
        id: 2,
        img: img2,
        width: "216px",
        mt: "-30px",
        icon: <MdKeyboardVoice />,
        userName: "Laura Strattenberg"
    },
    {
        id: 3,
        img: img3,
        width: "216px",
        mt: "-30px",
        icon: <MdKeyboardVoice />,
        userName: "Laura Strattenberg"
    },
    {
        id: 4,
        img: img4,
        width: "216px",
        mt: "-30px",
        icon: <MdKeyboardVoice />,
        userName: "Laura Strattenberg"
    },
]

export const button = [
    {
        id: 1,
        button: icon1
    },
    {
        id: 2,
        button1: <BsCameraVideo className="text-[20px]"/>
    },
    {
        id: 3,
        text: 'End Call',
        color: 'white',
        bg: 'red',
        paddingy: '3px',
        paddingx: '5px'
    },
    {
        id: 4,
        button: icon2
    },
    {
        id: 5,
        button: icon3
    },
]