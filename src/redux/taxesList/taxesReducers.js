import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taxes: [
        {
            id: 1,
            name: "VAT",
            percentage: "14%",
            status: "Inactive",
            bg: "rgba(255,255,255,.2)",
            statusBg: "#ffe5e6",
            border: "1px solid transparent"
        },
        {
            id: 2,
            name: "GST",
            percentage: "30%",
            status: "Active",
            bg: "rgba(255,255,255,.4)",
            shadow: "0 0 3px #e5e5e5",
            border: "1px solid transparent",
            statusBg: "rgba(13,191,10,.13)",
        },
    ]
}


export const taxesSlice = createSlice({
    name: "taxe",
    initialState,
    reducers: {
        deleteTaxes: (state, action) => {
            state.taxes = state.taxes.filter((user) => user.id !== action.payload)
        },

        updateTaxes: (state, action) => {
            let index = state.taxes.findIndex((i) => i.id === action.payload.id);
            const newValue = state.taxes;
            newValue[index] = action.payload;
      
            state.taxes = newValue;
          },
      
        addTaxes: (state, action) => {
            state.taxes = [...state.taxes, action.payload];
        },
    }
})

export const { deleteTaxes, updateTaxes, addTaxes } = taxesSlice.actions;
export default taxesSlice.reducer;