import { createSlice } from "@reduxjs/toolkit";
const initialState = { experiences: [] };

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    replaceExperience(state, action) {
      state.experiences = action.payload.experiences;
    },
    create(state, action) {
      state.experiences = [...state.experiences, action.payload.newEx];
    },
    update(state, action) {
      const updatedEx = action.payload.updatedEx;
      const copyExperiences = [...state.experiences];
      const index = state.experiences.findIndex(
        (ex) => ex._id === updatedEx._id
      );
      copyExperiences[index] = updatedEx;
      state.experiences = copyExperiences;
    },
    delete(state, action) {
      const exId = action.payload.exId;
      let copyArray = [...state.experiences];
      let afterRemoveEx = copyArray.filter((ex) => ex._id !== exId);
      state.experiences = afterRemoveEx;
    },
    get(state) {},
    getAll(state) {},
  },
});

export const experienceAction = experienceSlice.actions;
export default experienceSlice;
