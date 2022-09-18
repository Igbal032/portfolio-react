import { Col, Container, Row } from "react-bootstrap";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.mainDiv}>
      <Container className={classes.container}>
        <Row className={classes.row}>
          <Col lg={3} md={3} xs={12}>
            <Row className={classes.logoRow}>
              <div className={classes.logoDiv}>
                <h1 className={classes.logoAlfa}>I</h1>
              </div>
            </Row>
          </Col>
          <Col lg={9} md={9} xs={12}>
            <p className={classes.publishText}>© 2023 by Robert Caro. Proudly created with Wix.com</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
