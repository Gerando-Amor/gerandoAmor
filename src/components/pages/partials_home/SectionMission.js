import styles from "./SectionMission.module.css";

function SectionMission() {
    return (
        <section className={styles.section_mission}>
            <div className={styles.container_mission}>
                <h1>Missão</h1>
                <p>
                    Nossa missão é tripla: aliviar as necessidades imediatas das famílias em situação de carência, 
                    nutrir suas almas com mensagens de fé e esperança, 
                    e capacitar suas mentes por meio de cursos e atividades educacionais e culturais.
                </p>
            </div>
        </section>
    )
}

export default SectionMission