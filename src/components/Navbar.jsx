import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  padding: 10px 20px;
  color: white;

  .logo {
    font-size: 1.5rem;
  }

  .menu-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #333;
    width: 100%;
    padding: 10px;
    z-index: 1;
  }

  @media (max-width: 768px) {
    .menu-icon {
      display: block;
    }

    .menu {
      display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    }
  }
`;

const NavbarButton = styled.a`
  color: white;
  text-decoration: none;
  margin: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer isMenuOpen={isMenuOpen}>
      <div className="logo">FINTER</div>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="menu">
        <NavbarButton href="/">Home</NavbarButton>
        <NavbarButton href="/about">About</NavbarButton>
        <NavbarButton href="/services">Services</NavbarButton>
        <NavbarButton href="/team">Team</NavbarButton>
        <NavbarButton href="/contact">Contact Us</NavbarButton>
        <NavbarButton href="/login">Login</NavbarButton>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
