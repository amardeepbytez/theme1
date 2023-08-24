import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Nav, Navbar } from "react-bootstrap";
// import SearchIcon from "@mui/icons-material/Search";
import "./style/header.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <div className="hero_area">
        <div className="hero_bg_box">
          <img src="" alt="" />
        </div>
        <header className="header_section">
          {/* <div className="header_top">
            <div className="container-fluid header_top_container">
              <div className="contact_nav">
                <a>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Location</span>
                </a>
                <a>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call : +01 123455678990</span>
                </a>
                <a>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>demo@gmail.com</span>
                </a>
              </div>
              <div className="social_box">
                <a>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div> */}
          <div className="header_bottom">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <Link className="navbar-brand " to={'/'}>
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
                      <a className="nav-link" href="#">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <span>Login</span>
                      </a>
                    </li>
                    <form className="form-inline justify-content-center">
                      <button
                        className="btn  my-2 my-sm-0 nav_search-btn"
                        type="submit"
                      >
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </form>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
        
      </div>
    </>
  );
};

export default Header;
