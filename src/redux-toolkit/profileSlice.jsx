import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profileName",
  initialState: { value: "Topu Roy" },
  reducers: {
    changeName(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeName } = profileSlice.actions;
export default profileSlice.reducer;
