import { Link } from "react-router-dom";

import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../img/Logo.png"

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link className={styles.navBarr} to="/">
            <div>
                <img className={styles.img} src={logo} alt="Logo" /> 
            </div>
        <div>
            <h1>Gerando <span>Amor</span></h1>
        </div>
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Projects">Contato</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Sobre</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Localização</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;