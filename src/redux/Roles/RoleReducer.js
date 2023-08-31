import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    roles: [
        {
            id: 1,
            title: "Administrator",
        },
        {
            id: 2,
            title: "Staff",
        },
        {
            id: 3,
            title: "Accontant",
        },
    ]
}

export const rolesSlice = createSlice({
    name: "roles",
    initialState,

    reducers: {
        addRole: (state, action) => {
            state.roles = [...state.roles, action.payload];
        }
    }
})

export const { addRole } = rolesSlice.actions
export default rolesSlice.reducer