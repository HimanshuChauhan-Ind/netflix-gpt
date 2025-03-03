import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
    movies: [],
  },
  reducers: {
    setGPTSeatch: (state) => {
      state.gptSearch = !state.gptSearch;
    },
    setGPTMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setGPTSeatch, setGPTMovies } = gptSlice.actions;

export default gptSlice.reducer;
