// Navbar.js
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, {css} from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  background-color: ${({ isScrolled }) => (isScrolled ? 'white' : 'transparent')};
  color: ${({ isScrolled }) => (isScrolled ? 'black' : 'white')};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0 0 10px rgba(0, 0, 0, 0.3)' : 'none'};

    ${({ isScrolled }) =>
    isScrolled &&
    css`
      a {
        color: black;
      }

      a:visited {
        color: black;
      }
    `}
`;

const NavbarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center; 
  font-size: 1.4rem;
`;

const HomeItem = styled.li`
  margin-right: auto;
  font-weight: 600;
`;

const NavbarItem = styled.li`
  margin: 0 10px;
`;

const NavbarLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  color: ${({ isScrolled }) => (isScrolled ? 'black' : 'white')};

  &:hover {
    background-color: #555;
  }

  &:visited {
    text-decoration: none;
    color: ${({ isScrolled }) => (isScrolled ? 'black' : 'white')};
  }

`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100); // Adjust the threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <NavbarList>
      <HomeItem>
          <NavbarLink to="/" exact>
            SERI 2024 Coimbatore
          </NavbarLink>
        </HomeItem>
        <NavbarItem>
          <NavbarLink to="/" exact>
            Home
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/talks">Talks</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/photos">Photos</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/organizers">Organizers</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/venue">Venue</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/accomodation">Accomodation</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
