import SectionBanner from "./partials_contact/SectionBanner"
import SectionMap from "./partials_contact/SectionMap"
import SectionBFAQ from"./partials_contact/SectionBFAQ"
import SectionRFAQ from "./partials_contact/SectionRFAQ"
import { Helmet } from "react-helmet"
function Contact() {
    return (
        <main>
            <Helmet>
                <title>Contato</title>
                <meta name="description" content="Entre em contato com a Gerando Amor. Estamos ansiosos para ouvir de você e responder a quaisquer perguntas que você possa ter sobre nossos projetos e como você pode se envolver."/>
            </Helmet>
            <SectionBanner/>
            <SectionMap/>
            <SectionBFAQ/>
            <SectionRFAQ/>
        </main>
    )

}

export default Contact