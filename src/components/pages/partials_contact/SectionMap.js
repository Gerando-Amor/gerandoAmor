import styles from "./SectionMap.module.css"
import React from 'react'
export default function SectionMap() {
  return (
    <section className={styles.SectionMap}>
        <div className={styles.MapContainer}>
            <h3>Venha fazer uma visita,<br/> saiba onde estamos localizados</h3>
          <div className={styles.Mapa}><h1>Mapa</h1></div>
        </div>
    </section>
  )
}
