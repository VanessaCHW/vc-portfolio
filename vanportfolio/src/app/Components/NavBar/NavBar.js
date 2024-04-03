"use client";
import React, { useState } from "react";
import styled from "styled-components";

const NavBar = () => {
  const [menuShown, setMenuShown] = useState(false);
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

      {/* Dropdown list for mobile view*/}
      <NavListMobile>
        <Hamburger src="hamburg.png" onClick={() => setMenuShown(!menuShown)} />
        {menuShown && (
          <MobileList>
            <li>
              <a href="#section-parcours">Parcours</a>
            </li>
            <li>
              <a href="#section-projets">Projets</a>
            </li>
            <li>
              <a href="#section-extra">Extra</a>
            </li>
            <li>
              <a href="#section-contact">Contact</a>
            </li>
          </MobileList>
        )}
      </NavListMobile>
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

  /**Mobile */
  @media (max-width: 600px) {
    justify-content: right;
    padding-right: 16px;
  }
`;

const LeftLogo = styled.div`
  position: absolute;
  left: 0;
  height: 42px;
  display: flex;
  align-items: center;
  margin-left: 20px;

  @media (max-width: 600px) {
    & > img {
      height: 42px;
    }
  }
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

    /**Mobile */
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

const NavListMobile = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

const Hamburger = styled.img`
  height: 42px;
`;

const MobileList = styled.ul`
  position: absolute;
  top: 56px;
  right: 0px;
  width: 100%;
  padding: 0px 30px;
  background: var(--background-light);
  font-size: 28px;
  list-style-type: none;
  text-align: center;

  & > li {
    height: 70px;
  }
`;

const NavSection = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

export default NavBar;
