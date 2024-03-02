"use client";
import styled from "styled-components";

import NavBar from "./Sections/NavBar";
import Landing from "./Sections/Landing";
import Education from "./Sections/Education";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";
import Extra from "./Sections/Extra";

export default function Home() {
  return (
    <>
      <NavBar />
      <Landing />
      <Main>
        <Education />
        <Experience />
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
`;
