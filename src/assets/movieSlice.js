import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { nowPlaying: null, mainTrailer: null },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addMainTrailer: (state, action) => {
      state.mainTrailer = action.payload;
    },
  },
});

export const { addMovies, addMainTrailer } = movieSlice.actions;

export default movieSlice.reducer;
