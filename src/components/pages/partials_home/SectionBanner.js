import styles from "./SectionBanner.module.css";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Seta from "../../img/chevron-down.svg";
import fazemosDiferença from "../../img/fazemosDiferença.jpeg";
import { useState } from "react";

function SectionBanner() {
  const [imagemC, setImagemC] = useState(false);
  return (
    <section className={styles.section_banner}>
      <div className={styles.container_banner}>
        <div className={classNames(styles.boxtext, styles.w50)}>
          <h1>Juntos Fazemos a Diferença</h1>
          <h3>
            Projeto Social, que visa a transformação <br /> de vidas por meio do
            Evangelho.
          </h3>
          <h4>Seja parte da mudança. Junte-se a nós hoje!</h4>
          <Link to="/Doe" className={styles.button}>
            <button>Doar!</button>
          </Link>
        </div>
        <div className={classNames(styles.w50, styles.boximage)}>
          <div className={styles.caixa_item}></div>
          {imagemC ? (
            <img
              src={fazemosDiferença}
              alt=""
              srcset=""
              onLoad={() => setImagemC(true)}
            />
          ) : (
            <>
              <img
                src={fazemosDiferença}
                style={{ display: "none" }}
                alt=""
                srcset=""
                onLoad={() => setImagemC(true)}
              />
              <div className={styles.onload}></div>
            </>
          )}
        </div>
        <img className={styles.seta} src={Seta} alt="" srcset="" />
      </div>
    </section>
  );
}
export default SectionBanner;
