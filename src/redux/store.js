import { configureStore } from '@reduxjs/toolkit'

// import themeSlice from './theme/themeSlice'
import tableSlice from './table/tableReducer'


export const store = configureStore({
  reducer: {
    table: tableSlice
  },
})