import styles from "./SectionRFAQ.module.css"
import React from 'react'
import FAQItem from "./SectionFAQItem";
import FAQData from "../../../Data/FAQData"
export default function SectionRFAQ() {

    return (
        <section className={styles.SectionBanner} id="perguntas">
            <div className={styles.BannerContainer}>
                <h1 className={styles.title}>Perguntas Frequentes</h1>
                <div className={styles.boxesfaq}>
                    {
                        FAQData.map((item, index) => (
                            <FAQItem key={index} question={item.question} answer={item.answer} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
