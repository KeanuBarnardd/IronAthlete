import { configureStore } from "@reduxjs/toolkit";
import { menuItemReducer } from "./menuItemSlice";

const store = configureStore({
  reducer: {
    memuItemStore: menuItemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
