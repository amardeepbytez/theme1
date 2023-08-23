import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  margin-right: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

export const NavItem = styled.li`
  margin-right: 15px;
  position: relative;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 5px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #ff9900;
  }
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #333;
  min-width: 150px;
  z-index: 1;
  padding: 10px;
`;

export const DropdownItem = styled.a`
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 5px 0;

  &:hover {
    color: #ff9900;
  }
`;

export const NavItemDropdown = styled(NavItem)`
  &:hover ${Dropdown} {
    display: block;
  }
`;
