import classes from "./auth.module.css";
import { Fragment, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import AuthContext from "../../../store/Auth/auth-context";

const Login = () => {
  const authCtx = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false);
  // const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onLoginSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true)
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdb5dsp_VukB8MJPUXbAp27nfaQcQp3Ds",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    )
      .then((res) => {
        setIsLoading(false)
        console.log(res)
        if (res.ok) {
          return res.json();
        }
        else{
          return res.json().then(data=>{
            let errorMessage = "Authentication failed!!"
            throw new Error(errorMessage)
          })
        }
      })
      .then(data=>{
        authCtx.login(data.idToken)
      })
      .catch((err) => {
        alert(err.message)
      });
  };

  return (
    <Fragment>
      <Form className={classes.form} onSubmit={onLoginSubmit}>
        <h2 className={classes.formName}>Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="text"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="text"
            placeholder="Password"
          />
        </Form.Group>
        {isLoading && <Button variant="danger" disabled type="button">Logging</Button>}
        {!isLoading && <Button variant="primary" type="submit">Login</Button>}
        {/* <div>
          <Link to={"/ad1000/register"}>Register</Link>
        </div> */}
      </Form>
      );
    </Fragment>
  );
};

export default Login;
