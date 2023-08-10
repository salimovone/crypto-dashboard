import { createSlice } from "@reduxjs/toolkit"
import img1 from '../../assets/img/user.jpg'

const initialState = {
    users: [
        {
            id: 1,
            img: img1,
            name1: "Lesley Grauer",
            grey1: "buy new coin",
            blue1: "BTC",
            day: "4 mins ago"
        },
        {
            id: 2,
            img: img1,
            name1: "Jeffery Lalor",
            grey1: "added",
            name2: "Loren Gatlin",
            grey2: "and",
            name3: "Tarah Shropshire",
            grey3: " to project",
            blue1: "Crypto",
            day: "6 mins ago",
        },
        {
            id: 3,
            img: img1,
            name1: "Catherine Manseau",
            grey1: "completed task",
            blue1: "Crypto coin sell with payment gateway",
            day: "12 mins ago"
        },
        {
            id: 4,
            img: img1,
            name1: "Bernardo Galaviz ",
            grey1: "changed the task name",
            blue1: "Crypto",
            day: "1 day ago"
        },
        {
            id: 5,
            img: img1,
            name1: "Mike Litorus",
            grey1: "added new task",
            blue1: "video conferencing",
            day: "2 days ago"
        },
        {
            id: 6,
            img: img1,
            name1: "Jeffery Lalor",
            grey1: "added",
            name2: "Jeffrey Warden",
            grey2: "and",
            name3: "Bernardo Galaviz",
            grey3: " to the task of",
            blue1: "Private chat module",
            day: "7 days` ago",
        }
    ]
}

export const activitiesSlice = createSlice({
    name: "active",
    initialState,
    reducers: {
        deleteUsers: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload)
        },
    }
})

export const { deleteUsers } = activitiesSlice.actions
export default activitiesSlice.reducer