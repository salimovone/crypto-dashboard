import { createSlice } from "@reduxjs/toolkit"
import img1 from '../../assets/img/icon/watch-icon-07.svg'
import img2 from '../../assets/img/icon/watch-icon-01.svg'
import img3 from '../../assets/img/icon/watch-icon-02.svg'
import img4 from '../../assets/img/icon/watch-icon-03.svg'
import img5 from '../../assets/img/icon/watch-icon-08.svg'

const initialState = {
    users: [
        {
            id: 1,
            idNo: "#4562665",
            type: 'Ethereum',
            method: 'Visa',
            amount: '$197,078,267,295',
            img: img1,
            time: '15 May 2022',
            statuss: 'Pending', 
            time2: '05:30 AM'
        },
        {
            id: 2,
            idNo: "#4562665",
            type: 'Ripple',
            method: 'Debit',
            img: img2,
            amount: '$ 103,892,495,504',
            time: `15 May 2022`,
            statuss: 'Pending', 
            time2: '05:30 AM'
        },
        {
            id: 3,
            idNo: "#4562665",
            type: 'Cardeno',
            method: 'Visa',
            img: img3,
            amount: '$ 63,391,183,730',
            time: `15 May 2022 0`,
            statuss: 'Pending', 
            time2: '05:30 AM'
        },
        {
            id: 4,
            idNo: "#4562665",
            type: 'NEO',
            method: 'Credit',
            img: img4,
            amount: '$ 10,901,285,520',
            time: `15 May 2022  0`,
            statuss: 'Pending',
            time2: '05:30 AM'
        },
        {
            id: 5,
            idNo: "#4562665",
            type: 'BTC',
            method: 'Visa',
            img: img5,
            amount: '$ 197,078,267,295',
            time: `15 May 2022 `,
            statuss: 'Pending',
            time2: '05:30 AM'
        },
    ]
}

export const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        deleteUsers: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload)
        },

        updateUsers: (state, action) => {
            let index = state.users.findIndex((i) => i.id === action.payload.id);
            const newValue = state.users;
            newValue[index] = action.payload;

            state.users = newValue
        }
    }
})

export const {deleteUsers, updateUsers} = tableSlice.actions
export default tableSlice.reducer