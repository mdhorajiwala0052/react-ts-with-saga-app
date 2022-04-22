import { call, put, fork, takeLatest } from "redux-saga/effects";
import { fetchMovie, fetchMovieDetail } from "../../helpers/api";
import { getMovieDetail, getMovies, setMovies, setMovieDetail } from "../features/movieSlice";

function* onLoadMoviesAsync(action: any) { // worker saga
  try {
    const movieName = action.payload;
    const response = yield call(fetchMovie, movieName);
    if (response.status === 200) {
      // console.log('response.data', response.data)
      // yield put(setMovies([...response.data.Search]));
      yield put(setMovies({...response.data}));
    }
  } catch (e) {
    console.log("error", e);
  }
}

function* onLoadMovieDetailAsync(action: any) { // worker saga
  try {
    const movieId = action.payload;
    const response = yield call(fetchMovieDetail, movieId);
    if (response.status === 200) {
      // console.log('response.data', response.data)
      // yield put(setMovies([...response.data.Search]));
      yield put(setMovieDetail({...response.data}));
    }
  } catch (e) {
    console.log("error", e);
  }
}

function* onLoadMovies() { // watcher saga
    yield takeLatest(getMovies.type, onLoadMoviesAsync);
}

function* onLoadMovieDetail() { // watcher saga
  yield takeLatest(getMovieDetail.type, onLoadMovieDetailAsync);
}

export const movieSaga = [fork(onLoadMovies), fork(onLoadMovieDetail)];