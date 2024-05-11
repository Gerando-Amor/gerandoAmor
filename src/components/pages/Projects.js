import SectionProjects from "./partials_projects/sectionProjects";
import { Helmet } from "react-helmet";

function Projects() {
  return (
    <section>
      <Helmet>
        <title>Projetos</title>
        <meta name="description" content="Descubra os projetos da Gerando Amor, incluindo Karate, Capoeira, Teatro, Aulas de Música, Esportes, Atividades Físicas e Corte Solidário."/>
      </Helmet>
      <SectionProjects />
    </section>
  );
}

export default Projects;
