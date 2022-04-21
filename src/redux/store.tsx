import { configureStore } from "@reduxjs/toolkit"; 
import logger from "redux-logger";
import  createSagaMiddleware  from "redux-saga";
import MovieReducer from "./features/movieSlice";
import rootSaga from "./sagas/rootSaga";


const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer: {
        movie: MovieReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});


sagaMiddleware.run(rootSaga);

export default store;
