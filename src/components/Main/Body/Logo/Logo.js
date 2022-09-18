import { Row } from 'react-bootstrap';
import classes from './Logo.module.css'
const Logo = () => {
  return (
    <Row className={classes.logoRow}>
      <div className={classes.logoDiv}>
        <h1 className={classes.logoAlfa}>I</h1>
      </div>
    </Row>
  );
};

export default Logo;