import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Body from "./Body/Body";
import NavBar from "./Header/Navbar/NavBar";
import classes from './Main.module.css'
const Main = () => {
    return <Fragment>
        <Container className={classes.containerFluid} fluid={true}>
            <Row className={classes.row}>
              <Col className={classes.col} lg={12}>
                <NavBar />
                <Body />
              </Col>
            </Row>
          </Container>
    </Fragment>
}

export default Main;