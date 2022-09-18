import { Nav } from "react-bootstrap";

const NavItem = (props) => {
  return <Nav.Link href={`${props.nav.link}`}>{props.nav.content}</Nav.Link>;
};

export default NavItem;
