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
  googleSignInRequest,
  googleSingInSuccess,
  googleSignInFailure,
} from "../features/userSlice";
import { setAlert } from "../features/alertSlice";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleAuthProvider } from "../../firebase";

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

    switch (error) {
      case "auth/email-already-in-use":
        yield put(
          setAlert({
            text: "Email already in use",
            color: "danger",
          })
        );
        break;
      case "auth/invalid-email":
        yield put(
          setAlert({
            text: "Invalid email",
            color: "danger",
          })
        );
        break;
      case "auth/weak-password":
        yield put(
          setAlert({
            text: "Weak password",
            color: "danger",
          })
        );
        break;
      default:
        yield put(
          setAlert({
            text: "Something went wrong",
            color: "danger",
          })
        );
        break;
    }

    // yield put(
    //   setAlert({
    //     text: error,
    //     color: "danger",
    //   })
    // );
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
    const code = JSON.parse(JSON.stringify(e.code));
    switch (code) {
      case "auth/user-not-found":
        yield put(
          setAlert({
            text: "User not found",
            color: "danger",
          })
        );
        break;
      case "auth/wrong-password":
        yield put(
          setAlert({
            text: "Invalid email or password",
            color: "danger",
          })
        );
        break;
      default: // "auth/invalid-email"
        yield put(
          setAlert({
            text: code,
            color: "danger",
          })
        );
        break;
    }

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

function* googleSignInAsync() {
  try {
    const { user } = yield call(signInWithPopup, auth, googleAuthProvider);
    yield put(googleSingInSuccess(user));
    yield put(
      setAlert({
        text: "User loggoed in successfully",
        color: "success",
      })
    );
  } catch (e: any) {
    console.log("e", e);
    // const code = JSON.parse(JSON.stringify(e.code));
    // switch (code) {
    //   case "auth/user-not-found":
    //     yield put(
    //       setAlert({
    //         text: "User not found",
    //         color: "danger",
    //       })
    //     );
    //     break;
    //   case "auth/wrong-password":
    //     yield put(
    //       setAlert({
    //         text: "Invalid email or password",
    //         color: "danger",
    //       })
    //     );
    //     break;
    //   default: // "auth/invalid-email"
    //     yield put(
    //       setAlert({
    //         text: code,
    //         color: "danger",
    //       })
    //     );
    //     break;
    // }

    yield put(googleSignInFailure(e.message));
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

function* watchGoogleSignInSaga() {
  yield takeLatest(googleSignInRequest.type, googleSignInAsync);
}

export const userSaga = [
  fork(watchRegisterSaga),
  fork(watchLogoutSaga),
  fork(watchLoginSaga),
  fork(watchGoogleSignInSaga),
];
