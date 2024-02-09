import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./SwiperObjective.module.css"
import Next from '../../img/ObjectiveSwiperArrow.svg'

import Educacao from "../../img/Educacao.jpg"
import Eventos from "../../img/Eventos.jpg"
import Alimentar from "../../img/Alimentar.png"
import Doacao from "../../img/Doacao.jpg"
import Alegria from "../../img/Alegria.jpg"

export default function SwiperObjective(params) {
    return(
        <>
            <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
                prevEl: `.${styles.button_prev_team}`, // Use button_prev_team para "Anterior"
                nextEl: `.${styles.button_next_team}`, // Use button_next_team para "Próximo"
            }}
            loop={true}
            breakpoints={{
                500:{
                    slidesPerView: 2,
                    spaceBetween: 20,
                },

                725: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },

                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            }}
            modules={[Navigation, Pagination]}
            className={styles.myswiper}
            >
                <SwiperSlide className={styles.swiper_slide} style={{ backgroundImage: `url('${Educacao}')`}}> 
                <div className={styles.content_overlay}>
                <h1>Educação</h1>
                <p>Garantir que todas as crianças tenham acesso a uma educação de qualidade, fornecendo recursos como material escolar, livros e oferecendo suporte acadêmico para melhorar o desempenho escolar.</p>
                </div></SwiperSlide>
                    
                <SwiperSlide className={styles.swiper_slide} style={{ backgroundImage: `url('${Eventos}')`}}><div className={styles.content_overlay}>
                <h1>Eventos</h1>
                <p>Esses eventos proporcionam uma plataforma vital para compartilhar ideias e facilitar a participação ativa da comunidade em prol de mudanças positivas. A diversidade de iniciativas sociais reflete a busca coletiva por um impacto significativo em diversas áreas, promovendo um sentido de responsabilidade social.</p>
                </div></SwiperSlide>

                <SwiperSlide className={styles.swiper_slide} style={{ backgroundImage: `url('${Alimentar}')`}}><div className={styles.content_overlay}>
                <h1>Alimentar</h1>
                <p>Alimentar os necessitados é um ato humanitário que não só atende às necessidades básicas, mas também promove compaixão e solidariedade na construção de comunidades mais inclusivas.</p>
                </div></SwiperSlide>

                <SwiperSlide className={styles.swiper_slide} style={{ backgroundImage: `url('${Doacao}')`}}><div className={styles.content_overlay}>
                <h1>Doação</h1>
                <p>A distribuição de alimentos aos necessitados é uma ação essencial para mitigar a fome e promover a justiça social.</p>
                </div></SwiperSlide>

                <SwiperSlide className={styles.swiper_slide} style={{ backgroundImage: `url('${Alegria}')`}}><div className={styles.content_overlay}>
                <h1>Alegria</h1>
                <p>Criar programas culturais e artísticos que ofereçam oportunidades para as crianças explorarem suas habilidades criativas, promovendo expressão individual e fortalecendo o senso de identidade cultural.</p>
                </div></SwiperSlide>


            </Swiper>
            <div className={styles.Arrowbox}>
                <img src={Next} alt='' className={styles.button_prev_team}></img>
                <img src={Next} alt='' className={styles.button_next_team}></img>
            </div>
        </>
    )
}