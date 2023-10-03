import React from "react";
import styles from "./Home.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../img/foto.png";
import Seta from "../img/chevron-down.svg";
function Home() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={classNames(styles.boxtext, styles.w50)}>
                    <h1>Juntos Fazemos a Diferença</h1>
                    <h3>Transformando Vidas, Espalhando Amor,<br/>Criando Esperança</h3>
                    <h4>Seja parte mudança. Junte-se a nós hoje!</h4>
                    <Link to="/comoajudar#doe"><button>Doar!</button></Link>            
                </div>
                <div className={classNames(styles.w50, styles.boximage)}>
                    <div className={styles.caixa_item}></div>
                    <img src={Image} alt="" srcset="" />
                </div>
                <img className={styles.seta} src={Seta} alt="" srcset="" />
            </div>
        </section>
    )
}

export default Home