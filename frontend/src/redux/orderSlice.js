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
        status:""
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
  },
});

export const {
  addOrderItemRequest,
  addOrderItemSuccess,
  addOrderItemFailure,
} = orderSlice.actions;

export default orderSlice.reducer;
