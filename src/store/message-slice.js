import { createSlice } from "@reduxjs/toolkit";

const initialState = { messages: [] };

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    replaceMessages(state, action) {
      state.messages = action.payload.messages;
    },
    create(state, action) {
      state.messages = [...state.messages, action.payload.message];
    },
    delete(state, action) {
      const msjId = action.payload.msjId;
      let copyArray = [...state.messages];
      let afterRemovemessage = copyArray.filter((msj) => msj._id !== msjId);
      state.messages = afterRemovemessage;
    },
  },
});

export const messageAction = messageSlice.actions;
export default messageSlice;
