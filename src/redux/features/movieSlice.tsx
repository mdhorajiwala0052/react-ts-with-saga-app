import { createSlice } from "@reduxjs/toolkit";

interface MovieState {
    movieList: Array<Object>;
    movieDetail: Object;
}

const initialState = {
    movieList: [],
    movieDetail: {},
} as MovieState;

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        getMovies(name) {
            return name;
        },
        setMovies: (state, action) => {
            state.movieList = action.payload;
        }
    }
});

  
export const { getMovies, setMovies } = movieSlice.actions;

export default movieSlice.reducer;
