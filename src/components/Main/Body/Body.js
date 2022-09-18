import { Fragment } from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Experiences from "./Experience/Experiences";
import Footer from "./Footer/Footer";
import Professional from "./Professional/Professionals";

const Body = () => {
  return (
    <Fragment>
      <About />
      <Professional />
      <Experiences />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Body;
