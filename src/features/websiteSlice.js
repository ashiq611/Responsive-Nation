import { createSlice } from "@reduxjs/toolkit";

const websiteSlice = createSlice({
  name: "website",
  initialState: {
    url: "",
  },
  reducers: {
    setWebsiteUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { setWebsiteUrl } = websiteSlice.actions;
export const selectWebsiteUrl = (state) => state.website.url;

export default websiteSlice.reducer;
