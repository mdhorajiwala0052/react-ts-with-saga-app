import { call, put, fork, takeLatest } from "redux-saga/effects";
import { fetchMovie } from "../../helpers/api";
import { getMovies, setMovies } from "../features/movieSlice";

function* onLoadMoviesAsync(action: any) { // worker saga
  try {
    const movieName = action.payload;
    const response = yield call(fetchMovie, movieName);
    if (response.status === 200) {
      yield put(setMovies([...response.data]));
    }
  } catch (e) {
    console.log("error", e);
  }
}

function* onLoadMovies() { // watcher saga
    yield takeLatest(getMovies.type, onLoadMoviesAsync);
}

export const movieSaga = [fork(onLoadMovies)];