import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  text: string;
  color: string;
}

const initialState = {
  text: "",
  color: "",
} as IState;

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<any>) => {
      state.text = action.payload.text;
      state.color = action.payload.color;
      //   return action.payload;
    },
    resetAlert: (state) => {
      state.text = "";
    },
  },
});

export const { setAlert, resetAlert } = alertSlice.actions;

export default alertSlice.reducer;
