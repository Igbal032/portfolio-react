import { userActions } from "./user-slice";

export const fetchUser = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://igbalportfolio.herokuapp.com/ad1000/users");
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      return data;
    };
    try {
      const data = await fetchData();
      dispatch(userActions.replaceUser({ user: data.user }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const saveUser = (user) => {
  var formData = new FormData();
  var pdfData = user.cv;
  formData.append("pdfData", pdfData);
  formData.append("name",user.name)
  formData.append("surname",user.surname)
  formData.append("birthDay",user.birthDay)
  formData.append("about",user.about)
  formData.append("professinal",user.professinal)
  formData.append("email",user.email)
  formData.append("phone",user.phone)
  formData.append("contactContent",user.contactContent)
  return async (dispatch) => {
    const saveData = async () => {
      const response = await fetch("https://igbalportfolio.herokuapp.com/ad1000/users", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        return;
      }
      const data = await response.json();
      return data;
    };

    try {
      const data = await saveData();
      dispatch(userActions.create({ user: data.user }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUser = (user) => {
  var formData = new FormData();
  var pdfData = user.cv;
  formData.append("pdfData", pdfData);
  formData.append("userId",user.id)
  formData.append("name",user.name)
  formData.append("surname",user.surname)
  formData.append("birthDay",user.birthDay)
  formData.append("about",user.about)
  formData.append("professinal",user.professinal)
  formData.append("email",user.email)
  formData.append("phone",user.phone)
  formData.append("contactContent",user.contactContent)
  return async (dispatch) => {
    const updateData = async () => {
      const response = await fetch("https://igbalportfolio.herokuapp.com/ad1000/users", {
        method: "PUT",
        body: formData,
      });
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      return data;
    };
    const data = await updateData();
    dispatch(userActions.update({ user: data.updatedUser }));
  };
};

export const getCvBase64 = () => {
  return async (dispatch) => {
    const getData = async () => {
      const res = await fetch("https://igbalportfolio.herokuapp.com/upload");
      if (!res.ok) {
        return;
      }
      const data = await res.json();
      return data;
    };
    try {
      const data = await getData();
      dispatch(userActions.setCvBase64({ base64: data.base64 }));
    } catch (error) {
      console.log(error);
    }
  };
};
