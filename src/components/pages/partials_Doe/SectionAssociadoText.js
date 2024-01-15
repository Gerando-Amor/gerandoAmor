// Import Style
import style from "./SectionAssociadoText.module.css"

// Import Img
import retangulo from "../../img/Rectangle2.svg"

function SectionVoluntariosText (){

    return(
        <section>
            <div className={style.List}>
                
                
                <ul>
                    <div>
                        <h1> O que é ser um Associado? </h1>
                        <img className={style.Subimg} src={retangulo} alt=""/>
                    </div>
                    
                    <li>
                        Associados são membros que geralmente têm um compromisso de longo prazo com a organização.
                    </li>
                    <li>
                        Eles podem estar envolvidos em funções mais formais, como diretores, membros do conselho ou líderes de comitês.
                    </li>
                    <li>
                        Associados podem ter responsabilidades legais e administrativas na ONG.
                    </li>
                    <li>
                        Eles podem estar envolvidos na tomada de decisões estratégicas e no funcionamento cotidiano da ONG.
                    </li>
                    <li>
                        Os associados podem pagar taxas de associação ou realizar contribuições financeiras à organização. 
                    </li>
                </ul>

            </div>

            <div className={style.btnsDiv}>
                <a href="https://wa.me/5513991532364?text=Ol%C3%A1,%20tudo%20bem?%0AQuero%20ser%20um%20associado!" target="_blank" rel="noopener noreferrer" className={style.stylea} >
                    Quero me Associar!
                </a>
            </div>

        </section>
    )
}

export default SectionVoluntariosText