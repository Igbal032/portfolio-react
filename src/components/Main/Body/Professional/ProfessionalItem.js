// import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import classes from "./ProfessionalItem.module.css";

const ProfessionalItem = (props) => {
  const [offset, setOffset] = useState(0);
  const[skillBarWith, setSkillBarWith] = useState(0)

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(()=>{
      if(offset>930){
        setSkillBarWith(props.persentage)
      }
      else{
        setSkillBarWith(0)
      }
    },[offset])

  return (
    <div className={classes.profItem}>
      <div className={classes.skillname}><label>{props.skill}</label></div>
      <div className={classes.processingBar}>
        <div className={classes.skillBar} style={{ width: `${skillBarWith+'%'}`}}></div>
        <div className={classes.skillPersentageLabel}><label>{`${props.persentage}%`}</label></div>
      </div>
    </div>
  );
};

export default ProfessionalItem;
