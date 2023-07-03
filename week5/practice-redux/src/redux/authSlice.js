import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginToggle: (state) => {
      return !state;
    },
  },
});

export const { loginToggle } = authSlice.actions;
export default authSlice.reducer;
