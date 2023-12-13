import styles from "./SectionBanner.module.css"
import React from 'react'
import Logo from "../../img/Logo226x.png"
export default function SectionBanner() {
  return (
    <section className={styles.SectionBanner}>
        <div className={styles.BannerContainer}>
            <div className={styles.imglogo}>
                <img src={Logo} alt="" />
            </div>
            <div className={styles.textbox}>
                <div className={styles.TitleContact}>
                    <h1>Contato</h1>
                    <span>Telefone: +55 13 97411-0382</span>
                </div>
                <h4>Endereço:</h4>
                <span>
                    Praça Maria de Lourdes Batista<br/>
                    Jockei Clube, CEP 11360-160<br/>
                    São Vicente/SP - Brasil
                </span>
            </div>
        </div>
    </section>
  )
}
