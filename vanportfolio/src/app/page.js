"use client";
import styled from "styled-components";

import NavBar from "./Sections/NavBar";
import Landing from "./Sections/Landing";
import Timeline from "./Sections/Timeline";
import Projects from "./Sections/Projects";
import Extra from "./Sections/Extra";

export default function Home() {
  return (
    <>
      <NavBar />
      <Landing />
      <Main>
        <Timeline />
        <Projects />
        <Extra />
      </Main>
      <footer>Footer !</footer>
    </>
  );
}

const Main = styled.main`
  max-width: 1100px;
  margin: auto;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #2c2b30; /**GRIS FONCÉ */
`;
