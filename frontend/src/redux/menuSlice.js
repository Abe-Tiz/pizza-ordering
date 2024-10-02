
import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: {
      name: "",
      toppings: [],
      price: "",
      photo: "",
    },
    loading: false,
    error: null,
  },
  reducers: {
    addMenuItemRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    addMenuItemSuccess: (state, action) => {
      state.loading = false;
      state.menu = action.payload;
    },
    addMenuItemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // fetch menu
    fetchMenuRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMenuSuccess: (state, action) => {
      state.loading = false;
      state.menu = action.payload;
      console.log("slice:",state.menu);
    },
    fetchMenuFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delete menu
    deleteMenuRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteMenuSuccess: (state, action) => {
      state.loading = false;
      state.menu = action.payload;
      console.log("slice:",state.menu);
    },
    deleteMenuFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addMenuItemRequest,
  addMenuItemSuccess,
  addMenuItemFailure,
  fetchMenuRequest,
  fetchMenuSuccess,
  fetchMenuFailure,
  deleteMenuRequest,
  deleteMenuSuccess,
  deleteMenuFailure,
} = menuSlice.actions;

export default menuSlice.reducer;
