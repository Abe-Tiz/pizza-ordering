import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: {
      name: "",
      toppings: [],
      price: "",
      photo: "",
      quantity: 0,
      status: "",
      customer_id: 0,
    },
    loading: false,
    error: null,
  },
  reducers: {
    addOrderItemRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    addOrderItemSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    addOrderItemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // fetch order
    fetchOrderRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchOrderSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    fetchOrderFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // fetch individual customer order
    fetchSpecificOrderRequest: (state,action) => {
      state.loading = true;
      state.error = null;
      console.log("Fetching specific order with payload:", action.payload);
    },
    fetchSpecificOrderSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload;
      console.log("slice:",action.payload)
    },
    fetchSpecificOrderFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addOrderItemRequest,
  addOrderItemSuccess,
  addOrderItemFailure,
  fetchOrderRequest,
  fetchOrderSuccess,
  fetchOrderFailure,
  fetchSpecificOrderRequest,
  fetchSpecificOrderSuccess,
  fetchSpecificOrderFailure,
} = orderSlice.actions;

export default orderSlice.reducer;
