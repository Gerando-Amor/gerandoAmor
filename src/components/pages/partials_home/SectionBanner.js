import styles from "./SectionBanner.module.css"
import { Link } from "react-router-dom"
import classNames from "classnames"
import Seta from "../../img/chevron-down.svg";
import ImageInicio from "../../img/foto.png";

function SectionBanner(){
    return(
        <section className={styles.section_banner}>
        <div className={styles.container_banner}>
          <div className={classNames(styles.boxtext, styles.w50)}>
            <h1>Juntos Fazemos a Diferença</h1>
            <h3>
              Transformando Vidas, Espalhando Amor,
              <br />
              Criando Esperança
            </h3>
            <h4>Seja parte mudança. Junte-se a nós hoje!</h4>
            <Link to="/comoajudar#doe" className={styles.button}>
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
    )
}
export default SectionBanner