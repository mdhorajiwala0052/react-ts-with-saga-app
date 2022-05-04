import { call, put, takeLatest, fork } from "redux-saga/effects";
import {
  registerFailure,
  registerInitiate,
  registerRequest,
  registerSuccess,
  loginInitiate,
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutInitiate,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} from "../features/userSlice";
import { setAlert } from "../features/alertSlice";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";

function* userSingupAsync(action: any) {
  yield put(registerRequest());
  const userDetail = action.payload;
  try {
    const { user } = yield call(
      createUserWithEmailAndPassword,
      auth,
      userDetail.email,
      userDetail.password
    );
    yield put(registerSuccess(user));
    yield put(
      setAlert({
        text: "User registered successfully",
        color: "success",
      })
    );
  } catch (e: any) {
    const error = JSON.parse(JSON.stringify(e.code));
    // console.log("error", JSON.parse(JSON.stringify(e.code)));
    yield put(registerFailure(error));
    yield put(
      setAlert({
        text: error,
        color: "danger",
      })
    );
  }
}

function* userLoginAsync(action: any) {
  yield put(loginRequest());
  const userDetail = action.payload;
  try {
    const { user } = yield call(
      signInWithEmailAndPassword,
      auth,
      userDetail.email,
      userDetail.password
    );
    yield put(loginSuccess(user));
    yield put(
      setAlert({
        text: "User loggoed in successfully",
        color: "success",
      })
    );
  } catch (e: any) {
    console.log("error", e.message);
    yield put(loginFailure(e.message));
  }
}

function* userLogoutAsync(action: any) {
  yield put(logoutRequest());
  try {
    yield call(signOut, auth);
    yield put(logoutSuccess());
    yield put(
      setAlert({
        text: "User loggoed out successfully",
        color: "success",
      })
    );
  } catch (e: any) {
    console.log("error", e.message);
    yield put(logoutFailure(e.message));
  }
}

function* watchRegisterSaga() {
  yield takeLatest(registerInitiate.type, userSingupAsync);
}

function* watchLoginSaga() {
  yield takeLatest(loginInitiate.type, userLoginAsync);
}

function* watchLogoutSaga() {
  yield takeLatest(logoutInitiate.type, userLogoutAsync);
}

export const userSaga = [
  fork(watchRegisterSaga),
  fork(watchLogoutSaga),
  fork(watchLoginSaga),
];
