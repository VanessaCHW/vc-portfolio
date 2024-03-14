"use client";

import GlobalStyle from "./GlobalStyle";
import NavBar from "./Components/NavBar/NavBar";
import Landing from "./Components/Landing/Landing";
import Timeline from "./Components/Timeline/Timeline";
import Projects from "./Components/Projects/Projects";
import Extra from "./Components/Extra/Extra";
import Footer from "./Components/Footer/Footer";

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
        <Footer />
      </main>
    </>
  );
}
