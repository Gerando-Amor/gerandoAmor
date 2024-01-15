import classNames from "classnames";
import styles from "./sectionProjects.module.css";
import Project from "./boxProject"
import Data from "../../../Data/ProjectsData"

function SectionProjects() {


    return (
        <section className={classNames(styles.section_projects,)}>
            <div className={classNames(styles.container_projects)}>
                <div className={styles.divh1_projects}>
                    <h1>Nossos Projetos</h1>
                </div>
                {
                    Data.map((Data) => (
                        <Project Data={Data} />
                    ))
                }

            </div>
        </section>
    )

}



export default SectionProjects