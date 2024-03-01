import styles from "./page.module.css";
import NavBar from "./Sections/NavBar";
import Landing from "./Sections/Landing";
import Education from "./Sections/Education";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";
import Extra from "./Sections/Extra";

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <NavBar />
      <Landing />
      <main className={styles.main}>
        Main section test
        <Education />
        <Experience />
        <Projects />
        <Extra />
      </main>
      <footer>Footer !</footer>
    </div>
  );
}
