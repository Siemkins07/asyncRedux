import { createSlice } from "@reduxjs/toolkit";

const initialUiStore = { isCartVisible: false, notification: null };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiStore,
  reducers: {
    toggle(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
