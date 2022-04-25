import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import createSagaMiddleware from 'redux-saga'
// import userReducer from './reducers/userReducer';
// import userSaga from './redux/sagas/userSaga';

import { Provider } from "react-redux";
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
// create the saga middleware
// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: userReducer,
//   middleware: [...getDefaultMiddleware(), sagaMiddleware]
// });

// // then run the saga
// sagaMiddleware.run(userSaga)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
