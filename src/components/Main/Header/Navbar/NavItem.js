import { Nav } from "react-bootstrap";



const NavItem = (props) => {
  const scrollToContent = (event) => {
    scrollTo({
      top:props.refer.current.offsetTop,
      behavior:'smooth'
    })
  }
  return <Nav.Link id={props.refer} onClick={scrollToContent} href={`${props.nav.link}`}>{props.nav.content}</Nav.Link>;
};

export default NavItem;
