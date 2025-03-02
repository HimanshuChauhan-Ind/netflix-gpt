import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
  },
  reducers: {
    setGPTSeatch: (state) => {
      state.gptSearch = !state.gptSearch;
    },
  },
});

export const { setGPTSeatch } = gptSlice.actions;

export default gptSlice.reducer;
