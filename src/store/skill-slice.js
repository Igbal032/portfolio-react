import { createSlice } from "@reduxjs/toolkit";

const initialState = { skills: [] };

const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    replaceSkills(state, action) {
      state.skills = action.payload.skills;
    },
    create(state, action) {
      state.skills = [...state.skills, action.payload.skill];
    },
    update(state, action) {
      const updatedSkill = action.payload.skill;
      const oldSkillIndex = state.skills.findIndex(
        (w) => w._id === updatedSkill._id
      );
      let copyArray = [...state.skills];
      copyArray[oldSkillIndex] = updatedSkill;
      state.skills = copyArray;
    },
    delete(state, action) {
      const skillId = action.payload.skillId;
      let copyArray = [...state.skills];
      let afterRemoveSkill = copyArray.filter((skill) => skill._id !== skillId);
      state.skills = afterRemoveSkill;
    },
    get(state) {},
    getAll(state) {},
  },
});

export const skillActions = skillSlice.actions;
export default skillSlice;
