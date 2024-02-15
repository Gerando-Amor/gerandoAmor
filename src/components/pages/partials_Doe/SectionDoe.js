//Import Img
import imagem01 from "../../img/QrCode Doacao.jpg"
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
                    <img className={style.imagem1} src={imagem01} alt="QR code" />
                        <a href="https://wa.me/5513991532364?text=Ol%C3%A1,%20tudo%20bem?%0AQuero%20fazer%20um%20doa%C3%A7%C3%A3o!" target="_blank" rel="noopener noreferrer"><img src={imagem02} alt="whatsapp incon" /></a>
                    </p>
                    <p className={style.PSectionInfos}>
                        Doe agora escaneando o QR code <br/>
                        Ou <br/>
                        Clique no Icone
                    </p>

                </div>
            </div>
        </section>
    );
};

export default SectionDoe