import SectionSecurity from "./partials_Doe/SectionSecurity"
import SectionSecurityText from "./partials_Doe/SectionSecurityText";
import { Helmet } from "react-helmet";
function Security() {
    return (
      <main>
        <Helmet>
          <title>Politica de Privacidade</title>
          <meta name="description" content="Conheça a Política de Privacidade da Gerando Amor. Estamos comprometidos em proteger suas informações pessoais e respeitar sua privacidade."/>
        </Helmet>
        <section>
            < SectionSecurity/>
        </section>
        <section>
            < SectionSecurityText />
        </section>
       
      </main>
    );
  }
  
  export default Security