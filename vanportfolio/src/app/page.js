"use client";

import GlobalStyle from "./GlobalStyle";
import NavBar from "./Components/NavBar/NavBar";
import Landing from "./Components/Landing/Landing";
import Timeline from "./Components/Timeline/Timeline";
import Projects from "./Components/Projects/Projects";
import Extra from "./Components/Extra/Extra";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <main>
        <Landing />
        <Timeline />
        <Projects />
        <Extra />
      </main>
      <footer>Footer !</footer>
    </>
  );
}
