import SectionVoluntarios from "./partials_Doe/SectionVoluntarios";
import SectionVoluntariosText from "./partials_Doe/SectionVoluntariosText";
import { Helmet } from "react-helmet";
function Voluntarios() {
    return (
      <main>
        <Helmet>
                <title>Voluntario</title>
                <meta name="description" content="Junte-se à equipe de voluntários da Gerando Amor e faça a diferença. Descubra oportunidades de voluntariado que transformam vidas através do Evangelho."/>
        </Helmet>
        <section>
        <SectionVoluntarios />
        </section>
        <section>
          <SectionVoluntariosText />
        </section>
       
      </main>
    );
  }
  
  export default Voluntarios