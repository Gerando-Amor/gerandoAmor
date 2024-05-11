import React from "react";
import styles from "./Home.module.css";
import SectionBanner from "./partials_home/SectionBanner";
import SectionDescription from "./partials_home/SectionDescription";
import SectionTeam from "./partials_home/SectionTeam";
import SectionMission from "./partials_home/SectionMission";
import SectionObjective from "./partials_home/SectionObjective";
import { Helmet } from "react-helmet";
function Home() {
  return (
    <main className={styles.main}>
      <Helmet>
        <title>Inicio</title>
        <meta
          name="description"
          content="Gerando Amor é uma ONG que transforma vidas através do Evangelho. Conheça nossa equipe, missão e projetos. Juntos Fazemos a Diferença."
        />
      </Helmet>
      <SectionBanner />
      <SectionDescription />
      <SectionTeam />
      <SectionMission />
      <SectionObjective />
    </main>
  );
}

export default Home;
