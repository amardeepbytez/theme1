import React from "react";
import About from "./About";
import Team from "./Team";
import ContactUs from "./ContactUs";
import Services from "./Services";
import Slider from "./Slider";

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
