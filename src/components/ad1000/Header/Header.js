import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { useContext } from "react";
import AuthContext from "../../../store/Auth/auth-context";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const logOutHandler = ()=>{
    authCtx.logout();
  }

  return (
    <Navbar bg="dark" variant="dark" className={classes.navbar}>
      <Container>
        <Navbar.Brand href="/ad1000">Admin Panel</Navbar.Brand>
        <Nav className="me-auto">
          <Link className={`${'nav-link'}`} to="/ad1000/experiences">Experience</Link>
          <Link className={`${'nav-link'}`} to="/ad1000/professionals">Professinal</Link>
          <Link className={`${'nav-link'}`} to="/ad1000/users">User</Link>
          <Link className={`${'nav-link'}`} to="/ad1000/messages">Messages</Link>
          <Button className={`${'nav-link'}`} onClick={logOutHandler}>Log Out</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
