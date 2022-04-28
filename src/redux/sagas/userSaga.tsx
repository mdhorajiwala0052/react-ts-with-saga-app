import { call, put, takeLatest, fork } from "redux-saga/effects";
import {
  registerFailure,
  registerInitiate,
  registerRequest,
  registerSuccess,
} from "../features/userSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
const getUserName = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await res.json();
  const random_number: any = Math.floor(Math.random() * 11);
  return result[random_number].name;
};

function* fetchUser(action: any) {
  try {
    const name = yield call(getUserName);
    yield put({ type: "UPDATE_NAME_SUCCESS", payload: name });
    //   const user = yield call(Api.fetchUser, action.payload.userId);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e: any) {
    // yield put({type: "USER_FETCH_FAILED", message: e.message});
    console.log("error", e);
  }
}

function* userSingupAsync(action: any) {
  yield put(registerRequest());
  const userDetail = action.payload;
  try {
    const user = yield call(
      createUserWithEmailAndPassword,
      auth,
      userDetail.email,
      userDetail.password
    );
    // const user = yield createUserWithEmailAndPassword(
    //   auth,
    //   userDetail.email,
    //   userDetail.password
    // ).then((res: any) => {
    //   return res.user;
    // });
    //  const name = yield call(getUserName);
    yield put(registerSuccess(user));
  } catch (e: any) {
    console.log("error", e.message);
    yield put(registerFailure(e.message));
  }
}

function* watchRegisterSaga() {
  yield takeLatest(registerInitiate.type, userSingupAsync);
}

export const userSaga = [fork(watchRegisterSaga)];
