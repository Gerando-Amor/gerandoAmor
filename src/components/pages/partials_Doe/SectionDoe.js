//Import Img
import imagem01 from "../../img/QR code (1).png"
import imagem02 from "../../img/whatsapp.svg"

// Import Style
import style from "./SectionDoe.module.css"


function  SectionDoe () {

    return(
        <section>
            <div className={style.backgroundDiv}>
                <div className={style.infos}>
                    <h1>Seja um doador</h1>
                    <h2>Toda ajuda é Bem-Vinda</h2>
                    <p className={style.conteudoImagem}>
                        <img src={imagem01} alt="QR code" />
                        <img src={imagem02} alt="whatsapp incon" />
                    </p>
                    <p className={style.PSectionInfos}>
                        Doe agora escaneando o QR code <br />
                        Ou <br/>
                        Clique no Icone
                    </p>

                </div>
            </div>
        </section>
    );
};

export default SectionDoe