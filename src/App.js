import AuthContext from "./store/Auth/auth-context";
import React, { Suspense, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchExperiences } from "./store/experience-actions";
import { fetchSkills } from "./store/skill-action";
import { fetchUser, getCvBase64 } from "./store/user-action";
import { fetchMessage } from "./store/message-action";
import { Navigate, Route, Routes } from "react-router-dom";

const Main = React.lazy(() => import("./components/Main/Main"));
const Login = React.lazy(() => import("./components/ad1000/Auth/Login"));
const Admin = React.lazy(() => import("./components/ad1000/Admin"));

let initial = true;
function App() {
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    dispatch(getCvBase64());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    dispatch(fetchMessage());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchExperiences());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);
  console.log(authCtx.isLoggedIn);
  return (
    <div>
      <Suspense>
        <Routes>
          {!authCtx.isLoggedIn && (
            <Route path="/ad1000/login" exact element={<Login />} />
          )}
          {/* {!authCtx.isLoggedIn && (
          <Route path="/ad1000/register" exact element={<Register />} />
        )} */}
          {authCtx.isLoggedIn && (
            <Route path="/ad1000/*" exact element={<Admin />} />
          )}
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
