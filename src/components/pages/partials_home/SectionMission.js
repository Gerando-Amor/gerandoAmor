import styles from "./SectionMission.module.css";

function SectionMission() {
    return (
        <section className={styles.section_mission}>
            <div className={styles.container_mission}>
                <h1>Missão</h1>
                <p>
                “O nosso objetivo é atingir indivíduos e famílias,
                através de doações, cursos e atividades
                esportivas. Acreditamos que o Evangelho é
                muito importante para a nossa sociedade."

                </p>
            </div>
        </section>
    )
}

export default SectionMission