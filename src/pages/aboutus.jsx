import React from "react";
import useTitle from "../hooks/useTitle";
const About = () => {
  useTitle("About Us");
  return (
    <React.Fragment>
      <h1> This is about page </h1>
    </React.Fragment>
  );
};

export default About;
