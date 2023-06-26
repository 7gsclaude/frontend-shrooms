import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #702a70;
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
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  async function handleLogout() {
    setError("");

    try {
      await logout();
      props.history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  if (!currentUser) {
    return null;
  }

  return (
    <Nav>
      <Logo to="/">Jrs.Shrooms</Logo>
      <NavLinks>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        {currentUser && (
          <>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/logout" onClick={handleLogout}>
              LogOut
            </NavLink>
            {error && <p>{error}</p>}
          </>
        )}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
