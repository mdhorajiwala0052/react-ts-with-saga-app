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
    registerInitiate: (state, action: PayloadAction<string>) => {
      return;
    },
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    registerFailure: (state, action: PayloadAction<string>) => {
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
} = userSlice.actions;

export default userSlice.reducer;
