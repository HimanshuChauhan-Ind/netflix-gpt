import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { nowPlaying: null, mainTrailer: null },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMainTrailer: (state, action) => {
      state.mainTrailer = action.payload;
    },
  },
});

export const {
  addMovies,
  addMainTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
