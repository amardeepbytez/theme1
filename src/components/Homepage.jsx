import React from "react";
import Slider from "./Slider";
import About from "./About";
import Team from "./Team";
import ContactUs from "./ContactUs";
import Services from "./Services";

const Homepage = () => {
  return (
    <>
      <Slider />
      <About />
      <Services />
      <Team />
      <ContactUs />
    </>
  );
};

export default Homepage;
