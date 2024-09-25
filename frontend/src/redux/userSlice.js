// src/redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import UserData from "./data/Data";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: UserData,
    loading: false,
    error: null,
  },
  reducers: {
    registerRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { registerRequest, registerSuccess, registerFailure } =  userSlice.actions;

export default userSlice.reducer;
