
import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
      menu: {
          name: "",
          toppings: [],
          price: "",
          photo:""
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
  },
});

export const { addMenuItemRequest, addMenuItemSuccess, addMenuItemFailure } =
  menuSlice.actions;

export default menuSlice.reducer;
