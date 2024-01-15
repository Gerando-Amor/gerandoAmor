import style from "./SectionSecurityText.module.css"
import retangulo from "../../img/Rectangle3.svg"

function SectionSecurityText (){

    return(
        <section>
            <section className={style.Sectionbody}>  
                 <div className={style.Title}>
                    <p>
                        Última atualização: 20/12/2023
                    </p>

                    <h1> Política de Privacidade</h1>
                    
                    <img className={style.Subimg} src={retangulo} alt="" />
                </div>
            </section>

            <section className={style.Paragraphs}>
                <div>
                    <h2>Introdução</h2>
                    <p>
                        A ONG Gerando Amor se compromete com a privacidade e a proteção de seus visitantes e usuários. Esta política de privacidade tem como objetivo esclarecer como tratamos as informações coletadas, mesmo que não estejamos coletando dados pessoais neste momento.
                    </p>

                    <h2>Coleta de Informações</h2>
                    <p>
                        Nós não coletamos informações pessoais identificáveis dos visitantes deste site, a menos que voluntariamente fornecidas por meio de formulários de contato ou inscrições em eventos, quando aplicável. Quaisquer informações fornecidas serão usadas apenas para os fins específicos para os quais foram coletadas e não serão compartilhadas com terceiros, a menos que expressamente autorizado por você. 
                    </p>

                    <h2>Cookies e Dados de Navegação</h2>
                    <p>
                        Este site pode usar cookies temporários de sessão que são apagados automaticamente quando você fecha o navegador. Esses cookies são usados apenas para melhorar a experiência de navegação. Não usamos cookies para rastrear informações pessoais.
                    </p>

                    <h2>Registros do Servidor</h2>
                    <p>
                        Nossos servidores podem registrar informações padrão automaticamente, como seu endereço IP, tipo de navegador, páginas visitadas e horários de acesso. Essas informações são usadas apenas para fins de análise de tráfego e não estão vinculadas a identidades pessoais.
                    </p>

                    <h2>Links para Sites Externos</h2>
                    <p>
                        Nosso site pode conter links para sites de terceiros. A ONG Gerando Amor não se responsabiliza pela política de privacidade desses sites. Recomendamos que você leia as políticas de privacidade de qualquer site que você visite.
                    </p>

                    <h2>Alterações na Política de Privacidade</h2>
                    <p>
                        Esta política de privacidade pode ser atualizada periodicamente. Qualquer alteração será refletida nesta página, e a data da última atualização será indicada acima. Certifique-se de verificar periodicamente a política de privacidade para estar ciente de quaisquer mudanças.
                    </p>

                    <h2>Contato</h2>
                    <p>
                        Se você tiver alguma dúvida sobre esta política de privacidade ou sobre como tratamos seus dados, entre em contato conosco em [Inserir endereço de e-mail de contato].Agradecemos por visitar o site da ONG Gerando Amor e pelo seu interesse em nossa causa.
                    </p>
                    
                </div>
            </section>

        </section>
    )
}

export default SectionSecurityText