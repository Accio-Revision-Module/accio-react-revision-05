import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.error = null;
      state.data = [];
    },
    success: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    error: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export const { loading, success, error } = userSlice.actions;
export default userSlice.reducer;
