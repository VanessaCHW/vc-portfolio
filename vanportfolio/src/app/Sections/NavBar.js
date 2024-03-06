"use client";
import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Header>
      <LeftLogo>
        <p>VC♥</p>
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
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  font-weight: 500;
  color: #2c2b30; /**GRIS FONCÉ */
`;

const LeftLogo = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 20px;

  background: -webkit-linear-gradient(45deg, #ff503d, #e8e5e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  & > p {
    font-family: "Comfortaa", sans-serif;
    font-size: 26px;
    padding-top: 26px;
    font-weight: 700;
  }
`;

const NavListDesktop = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 40px;

  & > li {
    border-bottom: 1px solid white;
    padding-top: 26px;
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
