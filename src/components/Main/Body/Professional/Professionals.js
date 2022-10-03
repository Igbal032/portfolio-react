import { Col, Container, Row } from "react-bootstrap";
import ProfessionalItem from "./ProfessionalItem";
import classes from "./Professionals.module.css";
import { useSelector } from "react-redux/es/exports";
import { useRef } from "react";

const Professional = (props) => {

  const skills = useSelector(state=> state.skill.skills)
  return (
    <div className={classes.professinalBgImage}>
      <Container fluid={true} className={classes.professinalContent} ref={props.refer}>
        <Row className={classes.row}>
          <Col lg={8} md={8} xs={12}>
            <h1 className={classes.title}>01. Professional</h1>
            <p className={classes.knowledgeText}>
              MY KNOWLEDGE LEVEL IN SOFTWARE
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className={classes.professionalSkillsDiv}>
        <Row className={classes.skillsRow}>
          {skills.map((skill, key)=>
          <Col key={key} lg={7} md={7} xs={12} className={classes.col}>
            <ProfessionalItem skill={skill.skillName} persentage={skill.skillPercentage}/>
          </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Professional;
