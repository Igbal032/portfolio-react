import { configureStore } from "@reduxjs/toolkit";
import experienceSlice from "./experience-slice";
import messageSlice from "./message-slice";
import skillSlice from "./skill-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    exps: experienceSlice.reducer,
    skill: skillSlice.reducer,
    user: userSlice.reducer,
    message: messageSlice.reducer
  }
});

export default store;
