import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./SwiperObjective.module.css"
import Next from '../../img/ObjectiveSwiperArrow.svg'

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
                <SwiperSlide className={styles.swiper_slide}>Slide 1</SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>Slide 2</SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>Slide 3</SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>Slide 4</SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>Slide 5</SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>Slide 6</SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>Slide 7</SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>Slide 8</SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>Slide 9</SwiperSlide>
            </Swiper>
            <div className={styles.Arrowbox}>
                <img src={Next} alt='' className={styles.button_prev_team}></img>
                <img src={Next} alt='' className={styles.button_next_team}></img>
            </div>
        </>
    )
}