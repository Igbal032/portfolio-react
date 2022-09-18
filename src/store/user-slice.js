import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    name: "",
    surname: "",
    birthDay: "",
    about: "",
    professinal: "",
    email: "",
    phone: "",
    contactContent: "",
    cv: ""
  },
  cvBase64:""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    replaceUser(state, action) {
      state.user = action.payload.user;
    },
    create(state,action) {
      state.user = action.payload.user
    },
    update(state, action) {
      state.user = action.payload.user;
    },
    delete(state) {},
    setCvBase64(state, action){
      state.cvBase64 = action.payload.base64
    }
  },
});

export const userActions = userSlice.actions;
export default userSlice;
