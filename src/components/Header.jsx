import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from './Slider'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

// const hemage = require("./../assets/images/hero-bg.jpg");


const Header = () => {
  return (
    <>
      {/* <div className="hero_area"> */}
        
        <header className="header_section">
          <div className="header_top">
            <div className="container-fluid header_top_container">
              <div className="contact_nav">
                <div>
                  <span>
                    <LocationOnIcon />
                  </span>
                  <h6>Location</h6>
                </div>
                <div>
                  <span>
                    <CallIcon />
                  </span>
                  <h6>Call : +01 123455678990</h6>
                </div>
                <div>
                  <span>
                    <MailIcon />
                  </span>
                  <h6>demo@gmial.com</h6>
                </div>
              </div>
              <div className="social_box">
                <span><FacebookIcon /></span>
                <span><TwitterIcon /></span>
                <span><LinkedInIcon /></span>
                <span><InstagramIcon /></span>
              </div>
            </div>
          </div>
          <div className="header_bottom">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <Link className="navbar-brand " to={"/"}>
                  Finter
                </Link>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className=""> </span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <Link className="nav-link" to={"/"}>
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/about"}>
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/services"}>
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/team"}>
                        Team
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/contact"}>
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <span>Login</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link"><SearchIcon /></span>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <Slider />
        </header>
      {/* </div> */}
    </>
  );
};

export default Header;
