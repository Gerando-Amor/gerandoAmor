import SectionAssociado from "./partials_Doe/SectionAssociado";
import SectionAssociadoText from "./partials_Doe/SectionAssociadoText";
import { Helmet } from "react-helmet";
function Associado() {
    return (
      <main>
        <Helmet>
                <title>Seja Associado</title>
                <meta name="description" content="Seja associado a ong Gerando Amor e transforme vidas. Juntos, fazemos a diferença através do Evangelho."/>
        </Helmet>
        <section>
          <SectionAssociado />
        </section>
        <section>
          <SectionAssociadoText />
        </section>
        </main>
    );
  }
  
  export default Associado