import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import MovieReducer from "./features/movieSlice";
import rootSaga from "./sagas/rootSaga";
import UserReducer from "./features/userSlice";
import AlertReducer from "./features/alertSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movie: MovieReducer,
    user: UserReducer,
    alert: AlertReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
