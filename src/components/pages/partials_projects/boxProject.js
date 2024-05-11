import React from "react";
import classNames from "classnames";
import styles from "./boxProject.module.css";
import { useState, useEffect } from "react";

export default function BoxProject({ Data }) {
  const [imagem, setImagem] = useState(null);
  const [imagemCarregada, setImagemCarregada] = useState(false);

  useEffect(() => {
    // Função para carregar dinamicamente a imagem
    const carregarImagem = async () => {
      try {
        const imagemImportada = await import(`../../img/${Data.img}.png`);
        setImagem(imagemImportada.default);
        setImagemCarregada(true);
      } catch (error) {
        console.error(`Erro ao carregar a imagem: ${error}`);
      }
    };

    // Chama a função para carregar a imagem ao montar o componente
    carregarImagem();
  }, [Data.img]);

  return (
    <>
      {imagemCarregada ? (
        <div className={styles.cards_projects} id={`project${Data.id}`}>
          <div
            className={classNames(styles.w50, styles.description_projects)}
            style={{ backgroundColor: `${Data.color}` }}
          >
            <h1>{Data.tittle}</h1>
            <p>{Data.description}</p>
            <a href="https://wa.link/4x12gg">Saiba Mais</a>
          </div>

          <div
            className={classNames(styles.w50, styles.img_projects)}
            style={{ backgroundImage: `url('${imagem}')` }}
          ></div>
        </div>
      ) : (
        <div className={styles.cards_projects}><h6>carregando...</h6></div>
      )}
    </>
  );
}
