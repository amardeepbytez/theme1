import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
import './style/header.css'
import { NavLink } from "react-router-dom";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const Header = (props) => {
  const pathName = props?.location?.pathname;
  console.log(pathName);
  return (
    <>
      <div>haederupper</div>
      <div>
        <Navbar expand="lg" className="navigation">
          <div>
            <Nav.Link as={NavLink} to="/">
              <Navbar.Brand className="navbar-brand">FINTER</Navbar.Brand>
            </Nav.Link>
          </div>
          <div>
            <Navbar.Toggle />
            <NavbarCollapse>
              <Nav>
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={NavLink} to="/services">
                  Services
                </Nav.Link>
                <Nav.Link as={NavLink} to="/team">
                  Team
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact">
                  Contact Us
                </Nav.Link>
                <Nav.Link>
                  Login
                </Nav.Link>
                <Nav.Link>
                  <SearchIcon />
                </Nav.Link>
              </Nav>
            </NavbarCollapse>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
