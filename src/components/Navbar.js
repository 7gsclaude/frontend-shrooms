import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: purple;
  padding: 10px;
`;

const Logo = styled(Link)`
  font-size: 24px;
  color: white;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;

  &:hover {
    background-color: #fc8b9e;
  }
`;

const Navbar = (props) => {
  return (
    <Nav>
      <Logo to="/">Jrs.Shrooms</Logo>
      <NavLinks>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/shop">Shop</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
