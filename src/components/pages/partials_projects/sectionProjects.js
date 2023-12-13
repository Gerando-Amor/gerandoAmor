
import classNames from "classnames";

import styles from "../partials_projects/sectionProjects.module.css"

import Caratê from "../../img/Caratê.png";

function SectionProjects(){


    return(
        <section className={classNames(styles.section_projects, )}>

            <div className={classNames(styles.container_projects)}>
            <div className={styles.divh1_projects}>
                <h1>Nossos Projetos</h1>
            </div>
            <div className={styles.cards_projects}>
                <div className={classNames(styles.w100, styles.description_projects)}>
                    <h1>Caratê</h1>
                    <p>Com o esporte mudamos vidas e motivamos <br/> as pessoas se movimentarem</p>
                </div>
                <div className={classNames(styles.w100, styles.img_projects )}>
                <img  src={Caratê} alt="" />
                </div>
            </div>



            <div className={styles.cards_projects}>
                <div className={classNames(styles.w100, styles.description_projects)}>
                    <h1>Caratê</h1>
                    <p>Com o esporte mudamos vidas e motivamos <br/> as pessoas se movimentarem</p>
                </div>
                <div className={classNames(styles.w100, styles.img_projects )}>
                <img  src={Caratê} alt="" />
                </div>
            </div>


            
            <div className={styles.cards_projects}>
                <div className={classNames(styles.w100, styles.description_projects)}>
                    <h1>Caratê</h1>
                    <p>Com o esporte mudamos vidas e motivamos <br/> as pessoas se movimentarem</p>
                </div>
                <div className={classNames(styles.w100, styles.img_projects  )}>
                <img  src={Caratê} alt="" />
                </div>
            </div>
            </div>
        </section>
    )

}



export default SectionProjects