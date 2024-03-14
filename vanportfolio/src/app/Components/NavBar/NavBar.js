"use client";
import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Header>
      <LeftLogo>
        <img height="32" src="icon-lotusc.png" />
      </LeftLogo>

      {/* Inline list for desktop view*/}
      <NavListDesktop>
        <li>
          <NavSection href="#section-parcours">Parcours</NavSection>
        </li>
        <li>
          <NavSection href="#section-projets">Projets</NavSection>
        </li>
        <li>
          <NavSection href="#section-extra">Extra</NavSection>
        </li>
        <li>
          <NavSection href="#section-contact">Contact</NavSection>
        </li>
      </NavListDesktop>

      {/* Dropdown list for mobile view
          TODO
      */}
    </Header>
  );
};

const Header = styled.header`
  position: relative;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 500;
`;

const LeftLogo = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const NavListDesktop = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 40px;

  & > li {
    border-bottom: 1px solid white;
    align-items: center;

    &:hover {
      background: -webkit-linear-gradient(45deg, #ff503d, #f2c4ce);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const NavSection = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

export default NavBar;
