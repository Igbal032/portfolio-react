import { Col, Container, Row } from "react-bootstrap";
import classes from "./About.module.css";
import Logo from "../Logo/Logo";
import { useSelector } from "react-redux/es/exports";



const About = () => {

  const user = useSelector((state) => state.user.user);
  const cvbase64 = useSelector((state) => state.user.cvBase64);

  return (
      <div className={classes.aboutDiv}>
        <Row className={classes.nameRow}>
          <Col sm={12} md={9} lg={8}>
            <h1>I'M</h1>
            <h1>
              {user.name} <br /> {user.surname}.
            </h1>
            <p>
              {user.professinal}
            </p>
          </Col>
        </Row>
        <Container fluid={true} className={classes.aboutSection}>
          <Row className={classes.aboutRow}>
            <Col lg={6} md={6} xs={11} className={classes.aboutCol}>
              <Container fluid={true}>
                <Logo />
                <Row className={classes.aboutTextContent}>
                  <p>
                    {user.about}
                  </p>
                </Row>
                <Row className={classes.dwnResumeButton}>
                  <Col lg={4} md={6} xs={6}>
                    <button><a href={`data:application/pdf;base64,${cvbase64}`} download="Igbal's Resume">DOWNLOAD RESUME</a></button>
                  </Col>
                </Row>
              </Container>
            </Col>
            <div></div>
          </Row>
        </Container>
      </div>
  );
};

export default About;
