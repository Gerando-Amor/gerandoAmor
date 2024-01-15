import React from 'react'
import classNames from 'classnames'
import styles from './boxProject.module.css'
import { useState, useEffect } from 'react';

export default function BoxProject({Data}) {
    const [imagem, setImagem] = useState(null)

    useEffect(() => {
        // Função para carregar dinamicamente a imagem
        const carregarImagem = async () => {
            try {
                const imagemImportada = await import(`../../img/${Data.img}.png`);
                setImagem(imagemImportada.default);
            } catch (error) {
                console.error(`Erro ao carregar a imagem: ${error}`);
            }
        };

        // Chama a função para carregar a imagem ao montar o componente
        carregarImagem();
    }, [Data.img]);
    return (
        <div className={styles.cards_projects}>
            <div className={classNames(styles.w100, styles.description_projects)}>
                <h1>{Data.tittle}</h1>
                <p>{Data.description}</p>
            </div>
            <div className={classNames(styles.w100, styles.img_projects)}>
                <img src={imagem} alt="" />
            </div>
        </div>
    )
}
