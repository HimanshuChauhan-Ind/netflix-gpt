import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    setGPTSeatch: (state) => {
      state.gptSearch = !state.gptSearch;
    },
    setGPTMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { setGPTSeatch, setGPTMovies } = gptSlice.actions;

export default gptSlice.reducer;
