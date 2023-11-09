// Import style
import style from "./SectionVoluntarios.module.css"

//Import 


function SectionVoluntarios () {

    return(
        <section>

            <div className={style.BackgroundImg}></div>

            <div className={style.ConteudoDiv}>
                <h1> O que é ser um voluntário? </h1>
                <p>
                    Voluntários são indivíduos que contribuem com seu tempo e esforço de forma não remunerada para apoiar as atividades e causas da ONG.
                </p>
                <p>
                    Eles geralmente têm um compromisso de curto ou médio prazo, e sua participação pode ser mais flexível.
                </p>
                <p>
                    Os voluntários podem desempenhar uma variedade de funções, desde tarefas administrativas simples até trabalho de campo, divulgação, arrecadação de fundos e muito mais.
                </p>
                <p>
                    A participação de voluntários geralmente não envolve responsabilidades legais ou administrativas na organização.
                </p>
                <p>
                    Os voluntários geralmente não são obrigados a fazer contribuições financeiras, embora possam optar por doar se desejarem.
                </p>

                <div className={style.btnsCards}>
                    <a> Saiba Mais </a>
                </div>

            </div>
        </section>

    );
};

export default SectionVoluntarios