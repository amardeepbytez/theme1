import React, {useEffect} from "react";
import "./style/footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const displayYearElement = document.getElementById("displayYear");
    if (displayYearElement) {
      displayYearElement.textContent = currentYear;
    }
  }, []);
  return (
    <>
      <section className="info_section ">
        <div className="container">
          <div className="info_top">
            <div className="row">
              <div className="col-md-3 ">
                <Link className="navbar-brand" to="/">
                  Finter
                </Link>
              </div>
              <div className="col-md-5 ">
                <div className="info_contact">
                  <Link to="/">
                    <span><LocationOnIcon /></span>
                    <h6 className="foh6">Location</h6>
                  </Link>
                  <Link to="/">
                    <span><CallIcon /></span>
                    <h6 className="foh6">+01 1234567890</h6>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="social_box">
                  <Link to="/">
                    <span><FacebookIcon /></span>
                  </Link>
                  <Link to="/">
                    <span><TwitterIcon /></span>
                  </Link>
                  <Link to="/">
                    <span><LinkedInIcon /></span>
                  </Link>
                  <Link to="/">
                    <span><InstagramIcon /></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="info_bottom">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="info_detail">
                  <h5>Company</h5>
                  <p>
                    Randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="info_form">
                  <h5>NEWSLETTER</h5>
                  <form action="">
                    <input type="text" placeholder="Enter Your Email" />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="info_detail">
                  <h5>Services</h5>
                  <p>
                    Randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="">
                  <h5>Useful links</h5>
                  <ul className="info_menu">
                  <Link className="links" to="/">
                    Home
                  </Link>
                  <Link className="links" to="/about">
                    About
                  </Link>
                  <Link className="links" to="/services">
                    Services
                  </Link>
                  <Link className="links" to="/team">
                    Team
                  </Link>
                  <Link className="links" to="/contact">
                    Contact Us
                  </Link>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <span>Free Html Templates</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
