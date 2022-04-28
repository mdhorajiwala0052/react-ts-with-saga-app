import { all } from "redux-saga/effects";
import { movieSaga } from "./movieSaga";
import { userSaga } from "./userSaga";

export default function* rootSaga() {
  yield all([...movieSaga, ...userSaga]);
}
