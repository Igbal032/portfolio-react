import { skillActions } from "./skill-slice";

export const fetchSkills = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://igbalportfolio.herokuapp.com/skills");
      if (!response.ok) {
        return;
      }
      const data = response.json();
      return data;
    };
    try {
      const data = await fetchData();
      dispatch(skillActions.replaceSkills({ skills: data.skills }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const saveSkill = (skill) => {
  return async (dispatch) => {
    const saveData = async () => {
      const response = await fetch("https://igbalportfolio.herokuapp.com/ad1000/skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderNo: skill.orderNo,
          skillName: skill.name,
          skillPercentage: skill.persentage,
        }),
      });
      if (!response.ok) {
        return;
      }
      const data = response.json();
      return data;
    };
    try {
      const data = await saveData();
      dispatch(skillActions.create({ skill: data.skill }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const editSkill = (skill) => {
  return async (dispatch) => {
    const editData = async () => {
      const response = await fetch("https://igbalportfolio.herokuapp.com/ad1000/skills", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderNo: skill.orderNo,
          skillId: skill.id,
          skillName: skill.name,
          skillPercentage: skill.persentage,
        }),
      });
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      return data;
    };
    try {
      const data = await editData();
      console.log(data);
      dispatch(skillActions.update({ skill: data.updatedSkill }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteSkill = (skill) => {
  return async (dispatch) => {
    const deleteData = async () => {
      const response = await fetch("https://igbalportfolio.herokuapp.com/ad1000/skills", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          skillId: skill.id,
        }),
      });
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      return data;
    };
    try {
      const data = await deleteData();
      dispatch(skillActions.delete({ skillId: data.skill._id }));
    } catch (error) {
      console.log(error);
    }
  };
};
