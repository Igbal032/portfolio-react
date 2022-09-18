import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Experience from "./Experience/Experience";
import Professional from "./Professinal/Professional";
import Header from "./Header/Header";
import User from "./User/User";
import Message from "./Message/Message";

const Admin = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="experiences" element={<Experience />} />
        <Route path="professionals" element={<Professional />} />
        <Route path="users" element={<User />} />
        <Route path="messages" element={<Message />} />
      </Routes>
    </Fragment>
  );
};

export default Admin;
