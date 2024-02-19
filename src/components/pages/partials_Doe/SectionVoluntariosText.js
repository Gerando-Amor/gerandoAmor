import style from "./SectionVoluntariosText.module.css";


function SectionVoluntariosText() {
  return (
    <section className={style.Section_VoluntariosText}>
      <div className={style.Container_VoluntariosText}>
        <div className={style.List}>
         
          <ul> 
            
            <div className={style.Div_h1}>
            <h1> O que é ser um voluntário? </h1>
          </div>
            <li>
              Voluntários são indivíduos que contribuem com seu tempo e esforço
              de forma não remunerada para apoiar as atividades e causas da ONG.
            </li>
            <li>
              Eles geralmente têm um compromisso de curto ou médio prazo, e sua
              participação pode ser mais flexível.
            </li>
            <li>
              Os voluntários podem desempenhar uma variedade de funções, desde
              tarefas administrativas simples até trabalho de campo, divulgação,
              arrecadação de fundos e muito mais.
            </li>
            <li>
              Os voluntários geralmente não são obrigados a fazer contribuições
              financeiras, embora possam optar por doar se desejarem.
            </li>
          </ul>
        </div>

        <div className={style.btnsDiv}>
          <a
            href="https://wa.me/5513991532364?text=Ol%C3%A1,%20tudo%20bem?%0AQuero%20ser%20um%20volunt%C3%A1rio!"
            target="_blank"
            rel="noopener noreferrer"
            className={style.stylea}
          >
            Saiba Mais
          </a>
        </div>
        
      </div>
    </section>
  );
}

export default SectionVoluntariosText;
