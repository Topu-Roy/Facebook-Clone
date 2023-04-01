import { configureStore } from "@reduxjs/toolkit";
import navLinkSlice from "./navLinkSlice";
import profileSlice from "./profileSlice";

const store = configureStore({
  reducer: {
    navActive: navLinkSlice,
    profileName: profileSlice,
  },
});

export default store;
