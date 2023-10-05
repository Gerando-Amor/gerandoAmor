import React from "react";
import styles from "./Home.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
import ImageInicio from "../img/foto.png";
import ImageQuemSomos1 from "../img/quemsomos1.jpg";
import ImageQuemSomos2 from "../img/quemsomos2.png";
import Seta from "../img/chevron-down.svg";
import { typeImplementation } from "@testing-library/user-event/dist/type/typeImplementation";

function Home() {
  return (
    <section>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={classNames(styles.boxtext, styles.w50)}>
            <h1>Juntos Fazemos a Diferença</h1>
            <h3>
              Transformando Vidas, Espalhando Amor,
              <br />
              Criando Esperança
            </h3>
            <h4>Seja parte mudança. Junte-se a nós hoje!</h4>
            <Link to="/comoajudar#doe">
              <button>Doar!</button>
            </Link>
          </div>
          <div className={classNames(styles.w50, styles.boximage)}>
            <div className={styles.caixa_item}></div>
            <img src={ImageInicio} alt="" srcset="" />
          </div>
          <img className={styles.seta} src={Seta} alt="" srcset="" />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container2}>
         
            <div className={styles.divh1}>
              <h1>QUEM SOMOS</h1>
              <p>
                A ONG "Gerando Amor" é uma organização <br />
                dedicada a fazer a diferença na vida de crianças
                <br />
                carentes por meio de assistência social e espiritual.
                <br />
                Nosso principal objetivo é fornecer um ambiente <br />
                acolhedor e apoiador para as crianças, onde não
                <br /> apenas suas necessidades básicas são atendidas, mas{" "}
                <br />
                também onde elas têm a oportunidade de aprender e<br />
                crescer em diferentes aspectos de suas vidas.
              </p>
            </div>
            <div>
              <img src={ImageQuemSomos1} alt="" srcset="" />
            </div>
         

            <div>
              <img src={ImageQuemSomos2} alt="" srcset="" />
            </div>
            <div className={styles.divh1}>
              <h1>Como transformamos</h1>
              <p>
                Por meio do estabelecimento de vínculos de confiança que
                <br /> contemplam conhecer a história de vida de cada criança,
                <br /> adolescente e respectivas famílias que integram a
                comunidade e<br /> entorno, asseguramos diálogo, relações de
                afetividade, ampliação
                <br /> do universo de troca de bens culturais, acesso à
                tecnologia e a<br /> experimentação.
              </p>
            </div>
            </div>
    
      </section>
    </section>
  );
}

export default Home;
