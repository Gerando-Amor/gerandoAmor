import React from "react";
import styles from "./Home.module.css";
import SectionBanner from "./partials_home/SectionBanner";
import SectionDescription from "./partials_home/SectionDescription";
import SectionTeam from "./partials_home/SectionTeam";
import SectionMission from "./partials_home/SectionMission";
function Home() {
  return (
    <main className={styles.main}>
      <SectionBanner/>
      <SectionDescription/>
      <SectionTeam/>
      <SectionMission/>
    </main>
  );
}

export default Home;
