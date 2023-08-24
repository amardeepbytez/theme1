import React from 'react'
import Slider from './slider'
import About from './About'
import Team from './Team'
import ContactUs from './ContactUs'
import Services from './Services'
import Footer from './Footer'

const Homepage = () => {
  return (
    <>
      <Slider />
      <About />
      <Services />
      <Team />
      <ContactUs />
      <Footer />
    </>

  )
}

export default Homepage