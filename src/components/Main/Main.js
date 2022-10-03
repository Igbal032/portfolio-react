import { useRef } from "react";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Body from "./Body/Body";
import NavBar from "./Header/Navbar/NavBar";
import classes from './Main.module.css'
const Main = () => {
  const professinalRef = useRef(null)
  const homeRef = useRef(null)
  const expRef = useRef(null)
  const contactRef = useRef(null)

    return <Fragment>
        <Container className={classes.containerFluid} fluid={true}>
            <Row className={classes.row}>
              <Col className={classes.col} lg={12}>
                <NavBar professinalRef = {professinalRef} homeRef={homeRef} expRef = {expRef} contactRef={contactRef}/>
                <Body professinalRef = {professinalRef} homeRef={homeRef} expRef = {expRef} contactRef={contactRef}/>
              </Col>
            </Row>
          </Container>
    </Fragment>
}

export default Main;