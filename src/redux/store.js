import { configureStore } from '@reduxjs/toolkit'

import themeSlice from './theme/themeSlice'


export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
})