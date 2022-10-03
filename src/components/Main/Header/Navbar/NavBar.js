import { Container, Nav, Navbar } from "react-bootstrap";
import classes from "./NavBar.module.css";
import NavItem from "./NavItem";
const NavBar = (props) => {

  const navItems = [
    {
      id: 1,
      link: "#home",
      content: "Home",
      refer:props.homeRef
    },
    {
      id: 2,
      link: "#professional",
      content: "Professional",
      refer:props.professinalRef
    },
    {
      id: 3,
      link: "#experience",
      content: "Experience",
      refer:props.expRef
    },
    {
      id: 4,
      link: "#contact",
      content: "Contact",
      refer:props.contactRef
    },
  ];
  return (
    <section>
      <Navbar className={classes.navbar} variant="dark" expand="lg">
        <Container className={classes.navContainer}>
        <Navbar.Brand href="#" className={classes.logo}>I</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            {navItems.map((item) => (
              <NavItem refer={item.refer} key={item.id} nav={item} />
            ))}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default NavBar;
