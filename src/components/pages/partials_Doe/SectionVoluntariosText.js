import style from "./SectionVoluntariosText.module.css"


function SectionVoluntariosText (){

    return(
        <section>
            <div className={style.ConteudoDiv}>
                <ul>
                <h1> O que é ser um voluntário? </h1>
                    <li>
                        Voluntários são indivíduos que contribuem com seu tempo e esforço de forma não remunerada para apoiar as atividades e causas da ONG.
                    </li>
                    <li>
                        Eles geralmente têm um compromisso de curto ou médio prazo, e sua participação pode ser mais flexível.
                    </li>
                    <li>
                        Os voluntários podem desempenhar uma variedade de funções, desde tarefas administrativas simples até trabalho de campo, divulgação, arrecadação de fundos e muito mais.
                    </li>
                    <li>
                        Os voluntários geralmente não são obrigados a fazer contribuições financeiras, embora possam optar por doar se desejarem.
                    </li>
                </ul>
            

                <div className={style.btnsCards}>
                    <a> Saiba Mais </a>
                </div>

            </div>

        </section>
    )
}

export default SectionVoluntariosText