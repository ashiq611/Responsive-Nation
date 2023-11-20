import { createSlice } from "@reduxjs/toolkit";

const deviceSlice = createSlice({
  name: "device",
  initialState: {
    width: 375, // Default width for mobile
  },
  reducers: {
    setDeviceWidth: (state, action) => {
      state.width = action.payload;
    },
  },
});

export const { setDeviceWidth } = deviceSlice.actions;
export const selectDeviceWidth = (state) => state.device.width;

export default deviceSlice.reducer;
