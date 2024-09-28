import { createSlice } from "@reduxjs/toolkit";

const roleSlice = createSlice({
  name: "role",
  initialState: {
    role: {
      name: "",
      permission: []
    },
    loading: false,
    error: null, 
  },   
  reducers: {
    addRoleRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    addRoleSuccess: (state, action) => {
      state.loading = false;
      state.role = action.payload;
    },
    addRoleFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addRoleRequest, addRoleSuccess, addRoleFailure } = roleSlice.actions;

export default roleSlice.reducer;
