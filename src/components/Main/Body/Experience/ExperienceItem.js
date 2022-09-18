import { Fragment } from "react";
import classes from "./ExperienceItem.module.css";
const ExperienceItem = (props) => {
  const containerClasses = props.className;
  return (
    <Fragment>
      <div className={`${classes.container} ${containerClasses === 'left' ? classes.left : classes.right}`}>
        <div className={classes.content}>
          <h2>{props.title}</h2>
          <h4>{props.duration}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ExperienceItem;
