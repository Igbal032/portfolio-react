import { Fragment } from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Experiences from "./Experience/Experiences";
import Footer from "./Footer/Footer";
import Professional from "./Professional/Professionals";

const Body = (props) => {
  return (
    <Fragment>
      <About refer={props.homeRef} />
      <Professional refer={props.professinalRef} />
      <Experiences refer={props.expRef} />
      <Contact refer={props.contactRef} />
      <Footer />
    </Fragment>
  );
};

export default Body;
