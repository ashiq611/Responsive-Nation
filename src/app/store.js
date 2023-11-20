import { configureStore } from "@reduxjs/toolkit";
import websiteReducer from "../features/websiteSlice";
import deviceReducer from "../features/deviceSlice";

export const store = configureStore({
  reducer: {
    website: websiteReducer,
    device: deviceReducer,
  },
});
