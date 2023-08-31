import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    alerts: [
        {
            id: 1,
            title: "Warning! There was a problem with your network connection.",
            color: "#ffbc34",
        },
        {
            id: 2,
            title: "Error! A problem has been occurred while submitting your data.",
            color: "#f62d51",
        },
        {
            id: 3,
            title: "Success! Your message has been sent successfully.",
            color: "#D1E7DD",
        },
        {
            id: 4,
            title: "Note! Please read the comments carefully.",
            color: "#CFF4FC",
        },
    ]
}

export const AlertSlice = createSlice({
    name: "alerts",
    initialState,
    reducers: {
        deleteAlert: (state, action) => {
            state.alerts = state.alerts.filter(
                (alerts) => alerts.id !== action.payload
            );
        }
    }
})

export const { deleteAlert } = AlertSlice.actions
export default AlertSlice.reducer