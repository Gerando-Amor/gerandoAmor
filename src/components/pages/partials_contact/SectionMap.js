import styles from "./SectionMap.module.css"
import React from 'react'
export default function SectionMap() {
  return (
    <section className={styles.SectionMap}>
      <div className={styles.MapContainer}>
        <h3>Venha fazer uma visita,<br /> saiba onde estamos localizados</h3>
        <a
          href="https://www.google.com/maps/place/arena+smoking/@-23.9447813,-46.4019979,19z/data=!4m6!3m5!1s0x94ce1bb0b17b27f7:0xddcc14efb4655af1!8m2!3d-23.9447469!4d-46.4018766!16s%2Fg%2F11rgg5qsv9?entry=ttu"
          className={styles.Mapa}
          target="_blank"
          rel="noreferrer" // Adicione este atributo por razões de segurança
        ><span></span></a>
      </div>
    </section>
  )
}
