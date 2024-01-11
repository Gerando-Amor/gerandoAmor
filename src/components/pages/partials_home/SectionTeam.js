import styles from "./SectionTeam.module.css"
import SwiperTeam from "./SwiperTeam"


function SectionTeam() {
    return (
        <section className={styles.section_team} id="equipe">
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
                    <div className={styles.slider_team}><SwiperTeam /></div>
                </div>
            </div>
        </section>
    )
}
export default SectionTeam