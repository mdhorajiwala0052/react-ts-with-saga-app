import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieState {
    movieList: Array<Object>;
    movieDetail: Object;
    keyword: string;
}

const initialState = {
    movieList: [],
    movieDetail: {},
    keyword: ""
} as MovieState;

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        getMovies: (state, action: PayloadAction<string>) => {
            state.keyword = action.payload;
        },
        setMovies: (state, action) => {
            state.movieList = action.payload;
        }
    }
});

  
export const { getMovies, setMovies } = movieSlice.actions;

export default movieSlice.reducer;
