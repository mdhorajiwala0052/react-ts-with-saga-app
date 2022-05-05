import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieState } from "../../types";

const initialState = {
  movieList: [],
  movieDetail: {},
  loading: false,
} as MovieState;

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getMovies: (state, action: PayloadAction<string>) => {
      // state.keyword = action.payload;
      state.loading = true;
      return;
    },
    setMovies: (state, action: PayloadAction<Array<Object>>) => {
      state.loading = false;
      state.movieList = action.payload;
    },
    getMovieDetail: (state, action: PayloadAction<string>) => {
      state.loading = true;
      return;
    },
    setMovieDetail: (state, action: PayloadAction<Array<Object>>) => {
      state.loading = false;
      state.movieDetail = action.payload;
    },
  },
});

export const { getMovies, setMovies, getMovieDetail, setMovieDetail } =
  movieSlice.actions;

export default movieSlice.reducer;
