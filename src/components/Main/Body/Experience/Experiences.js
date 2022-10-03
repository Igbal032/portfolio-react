import { Fragment } from "react";
import { useSelector} from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import ExperienceItem from "./ExperienceItem";
import classes from "./Experiences.module.css";

const Experiences = (props) => {
  const experiencess = useSelector((state) => state.exps.experiences);
  return (
    <Fragment>
      <Container fluid={true} className={classes.experiencesBgImage}>
        <Row className={classes.experienceRow}  ref={props.refer}>
          {experiencess.map((experience, key) => (
            <Col lg={7} md={7} xs={12} key={experience._id}>
              <ExperienceItem
                orderNo={key}
                id={experience.id}
                className={`${key % 2 === 0 ? "right" : "left"}`}
                title={`${experience.title}`}
                duration={`${experience.start}-${experience.end}`}
                description={experience.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};
export default Experiences;
