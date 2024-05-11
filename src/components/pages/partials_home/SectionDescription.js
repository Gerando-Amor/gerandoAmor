import styles from "./SectionDescription.module.css";
import classNames from "classnames";
import QuemSomos from "../../img/QuemSomos.png";
import InicioDoProjeto from "../../img/InicioDoProjeto.png";
import { useState } from "react";
function SectionDescription() {
  const [resultados, setResultados] = useState([]);

  const Verificar = (res) => {
    setResultados((prev) => [...prev, res]);
  };
  return (
    <section className={styles.section_description} id="quemsomos">
      <div className={styles.container_description}>
        <div className={classNames(styles.w50, styles.boxtext_description)}>
          <h1>Quem Somos</h1>
          <p>
            Nosso Projeto surgiu em março de 2020, no auge da Pandemia, quando
            João Vitor A. de Araújo decidiu orar por todos os mais necessitados.
            Entretanto, com o coração inclinado no propósito certo, houve um
            questionamento em seu coração - "{" "}
            <span>Como estão os mais necessitados na Pandemia?</span>" nessa
            oração, João Vitor ouviu a voz do Espírito Santo pela primeira vez
            em sua vida, que disse “<span>Gere</span>”. Nosso Deus não é apenas
            um comunicador com a nossa humanidade, mas sim o Deus Criador. Toda
            sua fala é para criação ou sustento de algo, em nossas vidas.
          </p>
        </div>
        <div className={classNames(styles.w50, styles.imagequemsomos)}>
          {resultados.length === 2? (
            <img src={QuemSomos} alt="" srcset="" />
          ) : (
            <>
              <img
                src={QuemSomos}
                style={{ display: "none" }}
                onLoad={() => Verificar(true)}
                alt=""
                srcset=""
              />
              <div className={styles.onload}></div>
            </>
          )}
        </div>

        <div className={classNames(styles.w100, styles.containertranformamos)}>
          <div
            className={classNames(
              styles.w50,
              styles.quemsomos2,
              styles.imagetransformamos
            )}
          >
            {resultados.length === 2? (
              <img src={InicioDoProjeto} alt="" srcset=""/>
            ) : (
              <>
                <img
                  src={InicioDoProjeto}
                  alt=""
                  srcset=""
                  style={{ display: "none" }}
                  onLoad={() => Verificar(true)}
                />
                <div className={styles.onload}></div>
              </>
            )}
          </div>
          <div className={classNames(styles.w50, styles.boxtext_description)}>
            <h1>Início do Projeto</h1>
            <p>
              João iniciou uma campanha nas redes sociais, convidando seu primo
              Ytalo Freire para recolher doações de alimentos e entregar as
              doações para as famílias em situação de vulnerabilidade social. No
              primeiro mês conseguiram juntos <span>45 cestas básicas</span>, e
              muitas almas se convertendo ao Evangelho nas ruas de São Vicente,
              SP. Visitando lares e moradores de rua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionDescription;
