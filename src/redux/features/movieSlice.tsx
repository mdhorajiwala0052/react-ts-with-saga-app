import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieState {
    movieList: Array<Object>;
    movieDetail: Object;
}

const initialState = {
    movieList: [],
    movieDetail: {}
} as MovieState;

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        getMovies: (state, action: PayloadAction<string>) => {
            // state.keyword = action.payload;
            return;
        },
        setMovies: (state, action: PayloadAction<Array<Object>>) => {
            state.movieList = action.payload;
        },
        getMovieDetail: (state, action: PayloadAction<string>) => {
            return;
        },
        setMovieDetail: (state, action: PayloadAction<Array<Object>>) => {
            state.movieDetail = action.payload;
        },
    }
});

  
export const { getMovies, setMovies, getMovieDetail, setMovieDetail } = movieSlice.actions;

export default movieSlice.reducer;
