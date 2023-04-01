import { createSlice } from "@reduxjs/toolkit";

export const validActiveNavs = {
  HOME: "HOME",
  FRIENDS: "FRIENDS",
  WATCH: "WATCH",
  SHOP: "SHOP",
  MENU: "MENU",
  GROUPS: "GROUPS",
};

const navLinkSlice = createSlice({
  name: "navLinkActive",
  initialState: { value: validActiveNavs.HOME },
  reducers: {
    changeActiveState(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeActiveState } = navLinkSlice.actions;
export default navLinkSlice.reducer;
