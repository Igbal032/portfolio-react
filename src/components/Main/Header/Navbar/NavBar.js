import { Container, Nav, Navbar } from "react-bootstrap";
import classes from "./NavBar.module.css";
import NavItem from "./NavItem";
const NavBar = () => {
  const navItems = [
    {
      id: 1,
      link: "#home",
      content: "Home",
    },
    {
      id: 2,
      link: "#professional",
      content: "Professional",
    },
    {
      id: 3,
      link: "#experience",
      content: "Experience",
    },
    {
      id: 4,
      link: "#contact",
      content: "Contact",
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
              <NavItem key={item.id} nav={item} />
            ))}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default NavBar;
