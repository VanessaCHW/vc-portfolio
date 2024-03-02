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
          <NavSection href="#section-education">ÉDUCATION</NavSection>
        </li>
        <li>
          <NavSection href="#section-experience">EXPÉRIENCE</NavSection>
        </li>
        <li>
          <NavSection href="#section-projets">PROJETS</NavSection>
        </li>
        <li>
          <NavSection href="#section-extra">EXTRA</NavSection>
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
  font-size: 18px;
  font-weight: 600;
`;

const LeftLogo = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 20px;

  & > p {
    font-size: 26px;
  }
`;

const NavListDesktop = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 20px;

  & > li {
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;

    &:hover {
      border-bottom: solid;
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
