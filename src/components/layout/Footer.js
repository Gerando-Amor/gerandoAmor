import styles from './Footer.module.css'
import React from 'react'
import Logo from '../img/Logo.png'
import { Link } from 'react-router-dom'
import Insta from '../img/InstaIcon.svg'
import Whats from '../img/WhatsIcon.svg'
import You from '../img/YouTubeIcon.svg'
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.boxnavigation}>
                    <img src={Logo} alt="" />
                    <div>
                        <Link to='/Contato'>Fale Conosco</Link>
                        <Link to='/Politica-Privacidade'>Política de privacidade</Link>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <div>
                        <a href="https://api.whatsapp.com/send/?phone=%2B5513974110382&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" ><img src={Whats} alt="" /></a>
                        <a href="https://www.youtube.com/@Gerandoamorsocial" target="_blank" rel="noopener noreferrer"><img src={You} alt="" target="_blank" rel="noopener noreferrer"/></a>
                        <a href="https://www.instagram.com/gerandoamor.013/" target="_blank" rel="noopener noreferrer"><img src={Insta} alt="" /></a>
                    </div>
                    <h3>©Todos os direitos reservados</h3>
                </div>
            </div>
        </footer>
    )
}
