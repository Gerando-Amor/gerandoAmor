import React from "react";
import styles from "./Home.module.css";
import SectionBanner from "./partials_home/SectionBanner";
import SectionDescription from "./partials_home/SectionDescription";
import SectionTeam from "./partials_home/SectionTeam";
function Home() {
  return (
    <main className={styles.main}>
      <SectionBanner/>
      <SectionDescription/>
      <SectionTeam/>
    </main>
  );
}

export default Home;
