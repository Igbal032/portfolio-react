import { messageAction } from "./message-slice";
export const fetchMessage = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await fetch("https://igbalportfolio.herokuapp.com/ad1000/messages");
      if (!response.ok) {
        return;
      }
      const data = response.json();
      return data;
    };
    try {
      const data = await getData();
      dispatch(messageAction.replaceMessages({ messages: data.messages }));
    } catch (error) {}
  };
};

export const createMessage = (msj) => {
  return async (dispatch) => {
    const saveData = async () => {
      const response = await fetch("https://igbalportfolio.herokuapp.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: msj.name,
          email: msj.email,
          phone: msj.phone,
          content: msj.content,
        }),
      });

      if (!response.ok) {
        return;
      }
      const data = await response.json();
      return data;
    };
    try {
      const data = await saveData();
      dispatch(messageAction.create({ message: data.message }));
    } catch (error) {}
  };
};

export const deleteMessage = (msjId) => {
  return async (dispatch) => {
    const deleteData = async () => {
      const response = await fetch("https://igbalportfolio.herokuapp.com/ad1000/messages", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          msjId: msjId,
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
      dispatch(messageAction.delete({ msjId: data.msj._id }));
    } catch (error) {}
  };
};
