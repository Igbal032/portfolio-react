import { experienceAction } from "../store/experience-slice";

export const fetchExperiences = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://igbalportfolio.herokuapp.com/experiences");
      if (!response.ok) {
        return;
      }
      const data = response.json();
      return data;
    };
    try {
      const exps = await fetchData();
      dispatch(
        experienceAction.replaceExperience({ experiences: exps.experiences })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const editExperience = (ex) => {
  return async (dispatch) => {
    const editData = async () => {
      const response = await fetch("https://igbalportfolio.herokuapp.com/ad1000/experiences", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          experienceId: ex.id,
          orderNo: ex.orderNo,
          title: ex.title,
          start: ex.start,
          end: ex.end,
          description: ex.description,
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
      dispatch(experienceAction.update({ updatedEx: data.updatedExperience }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const saveExperience = (ex) => {
  return async (dispatch) => {
    const saveData = async () => {
      const response = await fetch("https://igbalportfolio.herokuapp.com/ad1000/experiences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderNo: ex.orderNo,
          title: ex.title,
          start: ex.start,
          end: ex.end,
          description: ex.description,
        }),
      });

      if(!response.ok){
        return;
      }
      const data = await response.json();
      return data;
    };
    try {
      const data = await saveData();
      dispatch(experienceAction.create({newEx: data.experience}))
    } catch (error) {
      console.log(error)
    }
  };
};


export const deleteExperience = (ex) => {
  return async (dispatch) => {
    const deleteData = async () => {
      const response = await fetch("https://igbalportfolio.herokuapp.com/ad1000/experiences", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          experienceId: ex.id
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
      dispatch(experienceAction.delete({ exId: data.experience._id }));
    } catch (error) {
      console.log(error);
    }
  };
};