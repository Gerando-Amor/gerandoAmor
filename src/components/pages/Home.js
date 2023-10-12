import React from "react";
import styles from "./Home.module.css";
import SwiperTeam from "./partials_home/SwiperTeam";
import SectionBanner from "./partials_home/SectionBanner";
import SectionDescription from "./partials_home/SectionDescription";

function Home() {
  return (
    <main>
      <SectionBanner/>
      <SectionDescription/>
    </main>
  );
}

export default Home;
