import { Swiper, SwiperSlide } from 'swiper/react';
import Next from "../../img/next-arrow-forward-svgrepo-com.svg"
import { useRef } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./SwiperTeam.module.css"
import Joao from "../../img/JoaoAraujo.jpeg";
import Kauan from "../../img/KaunMonteiro.jpeg";
import Marcely from "../../img/MarcelyNeves.jpg";
import Emanoel from "../../img/EmanoelSilva.jpeg";
import Giovanna from "../../img/GiovannaLima.jpeg";
import Julia from "../../img/JuliaChagas.jpeg";
import Bianca from "../../img/BiancaPain.jpeg";

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
export default function SwiperTeam() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: `.${styles.button_prev_team}`, // Use button_prev_team para "Anterior"
                    nextEl: `.${styles.button_next_team}`, // Use button_next_team para "Próximo"
                }}
                breakpoints={{
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },

                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                modules={[Autoplay, Navigation, Pagination]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className={styles.myswiper}
            >
                <SwiperSlide className={styles.swiper_slide} style={{ backgroundImage: `url('${Joao}')`}}><p>Joao Araujo</p></SwiperSlide>
                <SwiperSlide className={styles.swiper_slide} style={{ backgroundImage: `url('${Kauan}')`}}><p>Kauan Monteiro</p></SwiperSlide>
                <SwiperSlide className={styles.swiper_slide} style={{ backgroundImage: `url('${Julia}')`}}><p>Julia Chagas</p></SwiperSlide>
                <SwiperSlide className={styles.swiper_slide} style={{ backgroundImage: `url('${Giovanna}')`}}><p>Giovanna Lima</p></SwiperSlide>
                <SwiperSlide className={styles.swiper_slide} style={{ backgroundImage: `url('${Marcely}')`}}><p>Marcely Neves</p></SwiperSlide>
                <SwiperSlide className={styles.swiper_slide} style={{ backgroundImage: `url('${Bianca}')`}}><p>Bianca Pain</p></SwiperSlide>
                <SwiperSlide className={styles.swiper_slide} style={{ backgroundImage: `url('${Emanoel}')`}}><p>Emanoel Silva</p></SwiperSlide>
                
                <div className={styles.autoplay_progress} slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
            <div className={styles.Arrowbox}>
                <img src={Next} alt='' className={styles.button_prev_team}></img>
                <img src={Next} alt='' className={styles.button_next_team}></img>
            </div>
        </>
    );
}