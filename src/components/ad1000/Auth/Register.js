// import classes from "./auth.module.css";
// import { Fragment, useContext } from "react";
// import { Button, Form } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import AuthContext from "../../../store/Auth/auth-context";

// // import { ToastContainer, toast } from "react-toastify";
// // import { useDispatch } from 'react-redux';
// // import { regiter } from '../../../store/auth-actions';
// const Register = () => {
//   // const dispatch = useDispatch();
//   const authCtx = useContext(AuthContext)

//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const onRegisterSubmit = (event) => {
//     event.preventDefault();
//     setIsLoading(true)
//     fetch(
//       "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdb5dsp_VukB8MJPUXbAp27nfaQcQp3Ds",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password,
//           returnSecureToken: true,
//         }),
//       }
//     )
//       .then((res) => {
//         setIsLoading(false)
//         console.log(res)
//         if (res.ok) {
//           return res.json();
//         }
//         else{
//           return res.json().then(data=>{
//             let errorMessage = "Authentication failed!!"
//             throw new Error(errorMessage)
//           })
//         }
//       })
//       .then(data=>{
//         authCtx.login(data.idToken)
//       })
//       .catch((err) => {
//         alert(err.message)
//       });
//   };

//   return (
//     <Fragment>
//       <Form className={classes.form} onSubmit={onRegisterSubmit}>
//         <h2 className={classes.formName}>Register</h2>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             onChange={(event) => {
//               setEmail(event.target.value);
//             }}
//             type="text"
//             placeholder="Enter email"
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             onChange={(event) => {
//               setPassword(event.target.value);
//             }}
//             type="text"
//             placeholder="Password"
//           />
//         </Form.Group>
//         {isLoading && <Button variant="danger" type="button">Sending request</Button>}
//         {!isLoading && <Button variant="primary" type="submit">Register</Button>}
//         <div>
//           <Link to={"/ad1000/login"}>Login</Link>
//         </div>
//       </Form>
//       );
//     </Fragment>
//   );
// };

// export default Register;
