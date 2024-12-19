import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    pinEntered:false,
  },
  reducers: {
    setPinEntered: (state, action) => {
      state.pinEntered = action.payload;
    },
  },
});

// Export actions to be used in components
export const {
    setPinEntered,
} = walletSlice.actions;

// Export the reducer to configure in the store
export default walletSlice.reducer;
