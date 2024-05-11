import SectionDoe from "./partials_Doe/SectionDoe"
import SectionCards from "./partials_Doe/SectionCards";
import { Helmet } from "react-helmet";
function Doe() {
    return (
      <main>
        <Helmet>
        <title>Doe</title>
        <meta name="description" content="Doe para a Gerando Amor e ajude a transformar vidas através do Evangelho. Sua doação financia nossos projetos de Karate, Capoeira, Teatro, Música, Esportes e Corte Solidário."/>
      </Helmet>
        <section>
          <SectionDoe />
        </section>
        <section>
          <SectionCards />
        </section>
       
      </main>
    );
  }
  
  export default Doe