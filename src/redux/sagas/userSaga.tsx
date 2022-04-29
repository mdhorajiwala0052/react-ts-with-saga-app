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
  } catch (e: any) {
    console.log("error", e.message);
    yield put(registerFailure(e.message));
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
