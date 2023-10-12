import React from "react";
import styles from "./Home.module.css";
import classNames from "classnames";
import ImageQuemSomos1 from "../img/quemsomos1.jpg";
import ImageQuemSomos2 from "../img/quemsomos2.png";
import SwiperTeam from "./partials_home/SwiperTeam";
import SectionHome from "./partials_home/SectionBanner";

function Home() {
  return (
    <main>
      <SectionHome/>
    

      {/*section description*/}
      <section className={styles.section_description}>
        <div className={styles.container_description}>
          <div className={classNames(styles.w50, styles.boxtext_description)}>
            <h1>Quem Somos</h1>
            <p>
              A ONG "Gerando Amor" é uma organização dedicada a fazer a diferença na vida de crianças carentes por meio de assistência social e espiritual.
              Nosso principal objetivo é fornecer um ambiente acolhedor e apoiador para as crianças,
              onde não apenas suas necessidades básicas são atendidas,
              mas também onde elas têm a oportunidade de aprender e crescer em diferentes aspectos de suas vidas.
            </p>
          </div>
          <div className={classNames(styles.w50, styles.imagequemsomos)}>
            <img src={ImageQuemSomos1} alt="" srcset="" />
          </div>


          <div className={classNames(styles.w100, styles.containertranformamos)} >
            <div className={classNames(styles.w50, styles.quemsomos2, styles.imagetransformamos)}>
              <img src={ImageQuemSomos2} alt="" srcset="" />
            </div>
            <div className={classNames(styles.w50, styles.boxtext_description)}>
              <h1>Como transformamos</h1>
              <p>
                Por meio do estabelecimento de vínculos de confiança que contemplam conhecer a história de vida de cada criança,
                adolescente e respectivas famílias que integram a comunidade e entorno,
                asseguramos diálogo, relações de afetividade,
                ampliação do universo de troca de bens culturais,
                acesso à tecnologia e a experimentação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section team */}
      <section className={styles.section_team}>
        <div className={styles.container_team}>
          <div className={styles.boxtext_team}>
            <h1>Nossa Equipe</h1>
            <div className={styles.boxvideo_team}>
              <iframe
                title={"Youtube"}
                width="100%"
                height="100%"
                src={"https://www.youtube.com/embed/HmmA6VjTYG8"}
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <p>Conheça as pessoas por trás da Gerando Amor</p>
            <p>Somos um time de colaboradores multidisciplinar</p>
          </div>
          <div className={styles.boxslider_team}>
              <div className={styles.backcolor_team}></div>
              <div className={styles.slider_team}><SwiperTeam/></div>   
          </div>
        </div>       
      </section>
    </main>
  );
}

export default Home;
