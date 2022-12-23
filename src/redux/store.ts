import { configureStore } from "@reduxjs/toolkit";

import { navidadSlice } from "./navidad";

export const store = configureStore({
  reducer: {
    [navidadSlice.name]: navidadSlice.reducer,
  },
});

export type navidadState = ReturnType<typeof store.getState>;
