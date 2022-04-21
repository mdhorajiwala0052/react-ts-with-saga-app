import { call, put, takeLatest } from 'redux-saga/effects'
// import Api from '...'


const getUserName = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const result = await res.json()
    const random_number: any = Math.floor(Math.random() * 11);
    return result[random_number].name
}


function* fetchUser(action: any) {
   try {
    const name = yield call(getUserName);
     yield put({ type: "UPDATE_NAME_SUCCESS", payload:name });
    //   const user = yield call(Api.fetchUser, action.payload.userId);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e: any) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
      console.log('error', e)
   }
}


function* userSaga() {
  yield takeLatest("UPDATE_NAME", fetchUser);
}

export default userSaga;