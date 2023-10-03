import React from "react";
import styles from "./Home.module.css";



function Home() {
    return (
        <section>
            <div className={styles.container_caixa}>
                <div className={styles.caixa}>
                    <div className={styles.caixa_item_container}>
                        <div className={styles.caixa_item}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home