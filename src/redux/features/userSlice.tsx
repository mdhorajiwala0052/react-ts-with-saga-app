import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../types";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerInitiate: (state, action: PayloadAction<object>) => {
      return;
    },
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action: PayloadAction<object | null>) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    registerFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setUser: (state, action: PayloadAction<object | null>) => {
      state.currentUser = action.payload;
    },
    loginInitiate: (state, action: PayloadAction<object>) => {
      return;
    },
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action: PayloadAction<object | null>) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutInitiate: (state) => {
      return;
    },
    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
    },
    logoutFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  registerInitiate,
  registerRequest,
  registerSuccess,
  registerFailure,
  setUser,
  logoutInitiate,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  loginInitiate,
  loginRequest,
  loginSuccess,
  loginFailure,
} = userSlice.actions;

export default userSlice.reducer;
