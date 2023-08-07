import { configureStore } from "@reduxjs/toolkit";

import themeSlice from "./theme/themeSlice";
import responsiveSlice from "./responsive/responsiveSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    responsive: responsiveSlice,
  },
});
