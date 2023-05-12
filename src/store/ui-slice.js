import { createSlice } from "@reduxjs/toolkit";

const initialUiStore = { isCartVisible: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiStore,
  reducers: {
    toggle(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
