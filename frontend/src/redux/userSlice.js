import { createSlice } from "@reduxjs/toolkit";
import UserData from "./data/Data";
import Customer from "./data/Customer";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: UserData,
    customer: Customer,
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

    // get admin in each restaurant
    FetchRestaurantRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    FetchRestaurantSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    FetchRestaurantFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Login slice
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Create customer
    CUSTOMER_CREATE_REQUEST: (state) => {
      state.loading = true;
      state.error = null;
    },
    CUSTOMER_CREATE_SUCCESS: (state, action) => {
      state.loading = false;
      state.customer = action.payload;
    },
    CUSTOMER_CREATE_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // LOGIN customer
    CUSTOMER_LOGIN_REQUEST: (state) => {
      state.loading = true;
      state.error = null;
    },
    CUSTOMER_LOGIN_SUCCESS: (state, action) => {
      state.loading = false;
      state.customer = action.payload;
    },
    CUSTOMER_LOGIN_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  FetchRestaurantRequest,
  FetchRestaurantSuccess,
  FetchRestaurantFailure,
  
  CUSTOMER_CREATE_REQUEST,
  CUSTOMER_CREATE_SUCCESS,
  CUSTOMER_CREATE_FAILURE,

  CUSTOMER_LOGIN_REQUEST,
  CUSTOMER_LOGIN_SUCCESS,
  CUSTOMER_LOGIN_FAILURE,
} = userSlice.actions;

export default userSlice.reducer;
