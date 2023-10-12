import React from 'react'
import Styles from './SectionObjective.module.css'
import SwiperObjective from './SwiperObjective'
export default function SectionObjective() {
    return (
        <section className={Styles.SectionObjective}>
            <div className={Styles.ContainerObjective}>
                <div className={Styles.boxtext}><h1>Objetivos</h1></div>
                <div className={Styles.boxSwiper}><SwiperObjective/></div>
            </div>
        </section>
    )
}
